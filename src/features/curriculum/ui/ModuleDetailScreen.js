import { View, Text, StyleSheet, TouchableOpacity, ScrollView, SafeAreaView } from 'react-native';
import { useState, useEffect } from 'react';
import { colors, spacing, borderRadius, typography, glass } from '../../../theme';
import { isLessonFree } from '../data';
import { hasSubscription } from '../../subscription';
import { getProgress, makeLessonId } from '../logic/progress';

export default function ModuleDetailScreen({ route, navigation }) {
  const { course, module } = route.params;
  const [completed, setCompleted] = useState([]);
  const [hasAccess, setHasAccess] = useState(false);

  useEffect(() => {
    (async () => {
      const p = await getProgress();
      setCompleted(p.completedLessons || []);
      setHasAccess(await hasSubscription());
    })();
  }, []);

  const handleLessonPress = (lesson) => {
    const free = isLessonFree(course.id, module.id, lesson.id);
    if (!free && !hasAccess) {
      navigation.navigate('Premium');
      return;
    }
    navigation.navigate('Lesson', { course, module, lesson });
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.goBack()} style={styles.backButton}>
          <Text style={styles.backIcon}>←</Text>
        </TouchableOpacity>
        <Text style={styles.title}>{module.title}</Text>
      </View>
      <ScrollView style={styles.scroll} contentContainerStyle={styles.content}>
        <Text style={styles.sectionTitle}>Lessons</Text>
        {module.lessons.map((lesson, index) => {
          const lessonId = makeLessonId(course.id, module.id, lesson.id);
          const isCompleted = completed.includes(lessonId);
          const locked = !isLessonFree(course.id, module.id, lesson.id) && !hasAccess;
          return (
            <TouchableOpacity
              key={lesson.id}
              style={[styles.lessonRow, locked && styles.lessonRowLocked]}
              onPress={() => handleLessonPress(lesson)}
              disabled={locked}
            >
              <Text style={styles.lessonIndex}>{index + 1}</Text>
              <View style={styles.lessonInfo}>
                <Text style={styles.lessonTitle}>{lesson.title}</Text>
                <Text style={styles.lessonMeta}>{lesson.duration}</Text>
              </View>
              {isCompleted && <Text style={styles.check}>✓</Text>}
              {locked && <Text style={styles.lock}>🔒</Text>}
            </TouchableOpacity>
          );
        })}
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: colors.bgDark },
  header: { flexDirection: 'row', alignItems: 'center', padding: spacing.lg, backgroundColor: colors.bgCard },
  backButton: { marginRight: spacing.md, width: 40, height: 40, justifyContent: 'center', alignItems: 'center' },
  backIcon: { fontSize: 24, color: colors.textPrimary },
  title: { ...typography.h2, color: colors.textPrimary, flex: 1 },
  scroll: { flex: 1 },
  content: { padding: spacing.lg },
  sectionTitle: { ...typography.h3, color: colors.textPrimary, marginBottom: spacing.md },
  lessonRow: { ...glass.card, flexDirection: 'row', alignItems: 'center', padding: spacing.md, marginBottom: spacing.sm, borderRadius: borderRadius.md },
  lessonRowLocked: { opacity: 0.7 },
  lessonIndex: { ...typography.label, color: colors.primary, width: 28 },
  lessonInfo: { flex: 1 },
  lessonTitle: { ...typography.body, color: colors.textPrimary },
  lessonMeta: { ...typography.caption, color: colors.textMuted },
  check: { color: colors.success, fontSize: 18 },
  lock: { marginLeft: spacing.sm },
});
