import { View, Text, StyleSheet, TouchableOpacity, ScrollView, SafeAreaView } from 'react-native';
import { colors, spacing, borderRadius, typography, glass } from '../../../theme';
import { getModule } from '../data';
import { calculateModuleProgress } from '../logic/progress';
import { useState, useEffect } from 'react';

export default function ModuleListScreen({ route, navigation }) {
  const { course } = route.params;
  const [progressMap, setProgressMap] = useState({});

  useEffect(() => {
    const load = async () => {
      const map = {};
      for (const mod of course.modules) {
        map[mod.id] = await calculateModuleProgress(course.id, mod.id);
      }
      setProgressMap(map);
    };
    load();
  }, [course.id]);

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.goBack()} style={styles.backButton}>
          <Text style={styles.backIcon}>←</Text>
        </TouchableOpacity>
        <Text style={styles.title}>{course.title}</Text>
      </View>
      <ScrollView style={styles.scroll} contentContainerStyle={styles.content}>
        {course.modules.map(mod => (
          <TouchableOpacity
            key={mod.id}
            style={styles.card}
            onPress={() => navigation.navigate('ModuleDetail', { course, module: mod })}
            activeOpacity={0.8}
          >
            <Text style={styles.cardTitle}>{mod.title}</Text>
            <Text style={styles.cardMeta}>{mod.lessons.length} lessons</Text>
            <View style={styles.progressBar}>
              <View style={[styles.progressFill, { width: `${progressMap[mod.id] || 0}%` }]} />
            </View>
          </TouchableOpacity>
        ))}
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
  card: { ...glass.card, borderRadius: borderRadius.lg, padding: spacing.lg, marginBottom: spacing.md },
  cardTitle: { ...typography.h3, color: colors.textPrimary },
  cardMeta: { ...typography.bodySmall, color: colors.textMuted, marginTop: spacing.xs },
  progressBar: { height: 4, backgroundColor: colors.bgDark, borderRadius: 2, marginTop: spacing.sm, overflow: 'hidden' },
  progressFill: { height: '100%', backgroundColor: colors.primary, borderRadius: 2 },
});
