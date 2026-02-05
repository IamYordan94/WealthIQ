import { View, Text, StyleSheet, TouchableOpacity, ScrollView, SafeAreaView } from 'react-native';
import { useState, useEffect } from 'react';
import { colors, spacing, borderRadius, typography, glass, shadows } from '../theme';
import { getNextRecommendedLesson } from '../features/curriculum/logic/progress';
import { getCourses } from '../features/curriculum/data';

const HUB_ITEMS = [
  { key: 'Courses', title: 'Courses', desc: 'Explore all courses and track your progress', icon: '📚', screen: 'CourseList' },
  { key: 'Tools', title: 'Tools', desc: 'Calculators and planners to support your goals', icon: '🧮', screen: 'Tools' },
  { key: 'Info', title: 'Info', desc: 'Tips, glossary, and FAQs', icon: '💡', screen: 'Info' },
  { key: 'Settings', title: 'Settings', desc: 'Account and preferences', icon: '⚙️', screen: 'Settings' },
];

export default function HomeScreen({ navigation }) {
  const [nextLesson, setNextLesson] = useState(null);

  useEffect(() => {
    getNextRecommendedLesson().then(setNextLesson);
  }, []);

  const courses = getCourses();

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <View style={styles.headerAccent} />
        <Text style={styles.logo}>WealthIQ</Text>
        <Text style={styles.tagline}>Learn. Grow. Master your future.</Text>
      </View>
      <ScrollView style={styles.scroll} contentContainerStyle={styles.content} showsVerticalScrollIndicator={false}>
        {nextLesson && (
          <>
            <Text style={[styles.sectionLabel, styles.sectionLabelFirst]}>Keep learning</Text>
            <TouchableOpacity
              style={styles.continueCard}
              onPress={() =>
                navigation.navigate('Lesson', {
                  course: nextLesson.course,
                  module: nextLesson.module,
                  lesson: nextLesson.lesson,
                })
              }
              activeOpacity={0.85}
            >
              <View style={styles.continueIconWrap}>
                <Text style={styles.continueIcon}>▶</Text>
              </View>
              <View style={styles.continueTextWrap}>
                <Text style={styles.continueLabel}>Continue where you left off</Text>
                <Text style={styles.continueTitle}>{nextLesson.lesson.title}</Text>
                <Text style={styles.continueMeta}>{nextLesson.course.title}</Text>
              </View>
            </TouchableOpacity>
          </>
        )}

        <Text style={[styles.sectionLabel, styles.sectionLabelSection]}>Explore</Text>
        {HUB_ITEMS.map((item) => (
          <TouchableOpacity
            key={item.key}
            style={styles.hubCard}
            onPress={() => navigation.navigate(item.screen)}
            activeOpacity={0.85}
          >
            <View style={styles.hubIconWrap}>
              <Text style={styles.hubIcon}>{item.icon}</Text>
            </View>
            <View style={styles.hubTextWrap}>
              <Text style={styles.hubTitle}>{item.title}</Text>
              <Text style={styles.hubDesc}>{item.desc}</Text>
            </View>
            <Text style={styles.hubArrow}>→</Text>
          </TouchableOpacity>
        ))}
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: colors.bgDark },
  header: {
    padding: spacing.lg,
    paddingTop: spacing.md,
    paddingBottom: spacing.xl,
    position: 'relative',
  },
  headerAccent: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    height: 120,
    backgroundColor: colors.bgCard,
    borderBottomLeftRadius: borderRadius.xl,
    borderBottomRightRadius: borderRadius.xl,
    opacity: 0.8,
  },
  logo: { ...typography.h1, color: colors.primary, letterSpacing: 0.5 },
  tagline: { ...typography.body, color: colors.textSecondary, marginTop: spacing.sm, opacity: 0.95 },
  scroll: { flex: 1 },
  content: { padding: spacing.lg, paddingBottom: spacing.xxl },
  sectionLabel: {
    ...typography.caption,
    color: colors.textMuted,
    textTransform: 'uppercase',
    letterSpacing: 1.2,
    marginBottom: spacing.md,
  },
  sectionLabelFirst: { marginTop: 0 },
  sectionLabelSection: { marginTop: spacing.xl },
  continueCard: {
    ...glass.cardLight,
    ...shadows.md,
    borderRadius: borderRadius.xl,
    padding: spacing.lg,
    marginBottom: spacing.xl,
    borderLeftWidth: 5,
    borderLeftColor: colors.primary,
    flexDirection: 'row',
    alignItems: 'center',
  },
  continueIconWrap: {
    width: 48,
    height: 48,
    borderRadius: 24,
    backgroundColor: 'rgba(16, 185, 129, 0.2)',
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: spacing.md,
  },
  continueIcon: { fontSize: 20, color: colors.primary, marginLeft: 2 },
  continueTextWrap: { flex: 1 },
  continueLabel: { ...typography.caption, color: colors.primary, marginBottom: spacing.xs, fontWeight: '600' },
  continueTitle: { ...typography.h3, color: colors.textPrimary },
  continueMeta: { ...typography.bodySmall, color: colors.textMuted, marginTop: spacing.xs },
  hubCard: {
    ...glass.card,
    ...shadows.sm,
    borderRadius: borderRadius.lg,
    padding: spacing.lg,
    marginBottom: spacing.md,
    flexDirection: 'row',
    alignItems: 'center',
  },
  hubIconWrap: {
    width: 44,
    height: 44,
    borderRadius: borderRadius.md,
    backgroundColor: 'rgba(255, 255, 255, 0.08)',
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: spacing.md,
  },
  hubIcon: { fontSize: 22 },
  hubTextWrap: { flex: 1 },
  hubTitle: { ...typography.h3, color: colors.textPrimary },
  hubDesc: { ...typography.bodySmall, color: colors.textSecondary, marginTop: spacing.xs },
  hubArrow: { fontSize: 18, color: colors.textMuted, marginLeft: spacing.sm },
});
