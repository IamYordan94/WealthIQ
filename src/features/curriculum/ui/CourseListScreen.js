import { View, Text, StyleSheet, TouchableOpacity, ScrollView, SafeAreaView } from 'react-native';
import { useState, useEffect } from 'react';
import { colors, spacing, borderRadius, typography, glass, shadows } from '../../../theme';
import { getCourses } from '../data';
import { calculateOverallProgress } from '../logic/progress';

export default function CourseListScreen({ navigation }) {
  const [progress, setProgress] = useState(0);
  const courses = getCourses();

  useEffect(() => {
    calculateOverallProgress().then(setProgress);
  }, []);

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.goBack()} style={styles.backButton}>
          <Text style={styles.backIcon}>←</Text>
        </TouchableOpacity>
        <Text style={styles.title}>Courses</Text>
      </View>
      <ScrollView style={styles.scroll} contentContainerStyle={styles.content} showsVerticalScrollIndicator={false}>
        <View style={styles.progressCard}>
          <View style={styles.progressBar}>
            <View style={[styles.progressFill, { width: progress + '%' }]} />
          </View>
          <Text style={styles.progressLabel}>Your progress</Text>
          <Text style={styles.progressValue}>{progress}%</Text>
        </View>
        <Text style={styles.sectionLabel}>All courses</Text>
        {courses.map((course) => (
          <TouchableOpacity
            key={course.id}
            style={[styles.card, course.isPremium && styles.cardPremium]}
            onPress={() => navigation.navigate('ModuleList', { course })}
            activeOpacity={0.85}
          >
            <View style={styles.cardIconWrap}>
              <Text style={styles.cardIcon}>📖</Text>
            </View>
            <View style={styles.cardTextWrap}>
              <Text style={styles.cardTitle}>{course.title}</Text>
              <Text style={styles.cardDesc} numberOfLines={2}>{course.description}</Text>
              {course.isPremium && <View style={styles.premiumBadge}><Text style={styles.premiumBadgeText}>Premium</Text></View>}
            </View>
            <Text style={styles.cardArrow}>→</Text>
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
  title: { ...typography.h2, color: colors.textPrimary },
  scroll: { flex: 1 },
  content: { padding: spacing.lg, paddingBottom: spacing.xxl },
  progressCard: {
    ...glass.card,
    ...shadows.sm,
    borderRadius: borderRadius.lg,
    padding: spacing.lg,
    marginBottom: spacing.xl,
  },
  progressBar: { height: 8, backgroundColor: colors.bgDark, borderRadius: 4, overflow: 'hidden', marginBottom: spacing.sm },
  progressFill: { height: '100%', backgroundColor: colors.primary, borderRadius: 4 },
  progressLabel: { ...typography.caption, color: colors.textMuted },
  progressValue: { ...typography.h2, color: colors.primary, marginTop: spacing.xs },
  sectionLabel: {
    ...typography.caption,
    color: colors.textMuted,
    textTransform: 'uppercase',
    letterSpacing: 1.2,
    marginBottom: spacing.md,
  },
  card: {
    ...glass.card,
    ...shadows.sm,
    borderRadius: borderRadius.lg,
    padding: spacing.lg,
    marginBottom: spacing.md,
    flexDirection: 'row',
    alignItems: 'center',
  },
  cardPremium: { ...glass.premium },
  cardIconWrap: {
    width: 44,
    height: 44,
    borderRadius: borderRadius.md,
    backgroundColor: 'rgba(255, 255, 255, 0.08)',
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: spacing.md,
  },
  cardIcon: { fontSize: 22 },
  cardTextWrap: { flex: 1 },
  cardTitle: { ...typography.h3, color: colors.textPrimary, marginBottom: spacing.xs },
  cardDesc: { ...typography.bodySmall, color: colors.textSecondary },
  premiumBadge: { alignSelf: 'flex-start', backgroundColor: 'rgba(251, 191, 36, 0.2)', paddingHorizontal: spacing.sm, paddingVertical: 2, borderRadius: borderRadius.sm, marginTop: spacing.sm },
  premiumBadgeText: { ...typography.caption, color: colors.premium, fontWeight: '600' },
  cardArrow: { fontSize: 18, color: colors.textMuted, marginLeft: spacing.sm },
});
