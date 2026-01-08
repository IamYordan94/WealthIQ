import { View, Text, StyleSheet, TouchableOpacity, ScrollView, SafeAreaView } from 'react-native';
import { useState, useEffect } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { colors, spacing, borderRadius, typography, shadows } from '../theme';

export default function ModuleDetailScreen({ route, navigation }) {
    const { module } = route.params;
    const [completedLessons, setCompletedLessons] = useState([]);
    const [isPremium, setIsPremium] = useState(false);

    useEffect(() => {
        loadData();
    }, []);

    const loadData = async () => {
        try {
            const progressData = await AsyncStorage.getItem('userProgress');
            if (progressData) {
                const data = JSON.parse(progressData);
                setCompletedLessons(data.completedLessons || []);
            }
            const premiumStatus = await AsyncStorage.getItem('isPremium');
            setIsPremium(premiumStatus === 'true');
        } catch (error) {
            console.error('Error loading module data:', error);
        }
    };

    const isReleased = (lesson) => {
        if (!lesson.releaseDate) return true;
        return new Date() >= new Date(lesson.releaseDate);
    };

    const handleLessonPress = (lesson) => {
        if (!isReleased(lesson)) return;

        if (module.isPremium && !isPremium) {
            navigation.navigate('Premium');
            return;
        }

        navigation.navigate('Lesson', { module, lesson });
    };

    return (
        <SafeAreaView style={styles.container}>
            {/* Header */}
            <View style={styles.header}>
                <TouchableOpacity onPress={() => navigation.goBack()} style={styles.backButton}>
                    <Text style={styles.backIcon}>←</Text>
                </TouchableOpacity>
                <Text style={styles.moduleTitle}>{module.title}</Text>
            </View>

            <ScrollView style={styles.scrollView} contentContainerStyle={styles.scrollContent}>
                <View style={styles.moduleHero}>
                    <Text style={styles.moduleIcon}>{module.icon}</Text>
                    <Text style={styles.moduleDesc}>{module.description}</Text>
                    <View style={styles.badgeContainer}>
                        {module.isPremium && (
                            <View style={styles.premiumBadge}>
                                <Text style={styles.premiumBadgeText}>PREMIUM</Text>
                            </View>
                        )}
                        <View style={styles.lessonCountBadge}>
                            <Text style={styles.lessonCountText}>{module.lessons.length} Lessons</Text>
                        </View>
                    </View>
                </View>

                <Text style={styles.sectionTitle}>Lessons</Text>

                {module.lessons.map((lesson, index) => {
                    const completed = completedLessons.includes(`${module.id}-${lesson.id}`);
                    const released = isReleased(lesson);

                    return (
                        <TouchableOpacity
                            key={lesson.id}
                            style={[
                                styles.lessonItem,
                                !released && styles.lessonItemLocked
                            ]}
                            onPress={() => handleLessonPress(lesson)}
                            disabled={!released}
                        >
                            <View style={styles.lessonNumberContainer}>
                                <Text style={styles.lessonNumber}>{index + 1}</Text>
                            </View>

                            <View style={styles.lessonInfo}>
                                <Text style={styles.lessonTitle}>{lesson.title}</Text>
                                <Text style={styles.lessonDuration}>{lesson.duration}</Text>
                            </View>

                            <View style={styles.statusContainer}>
                                {completed ? (
                                    <View style={styles.completedBadge}>
                                        <Text style={styles.checkIcon}>✓</Text>
                                    </View>
                                ) : !released ? (
                                    <View style={styles.comingSoonBadge}>
                                        <Text style={styles.comingSoonText}>Coming {lesson.releaseDate}</Text>
                                    </View>
                                ) : (
                                    <Text style={styles.playIcon}>▶</Text>
                                )
                                }
                            </View>
                        </TouchableOpacity>
                    );
                })}
            </ScrollView>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: colors.bgDark,
    },
    header: {
        flexDirection: 'row',
        alignItems: 'center',
        padding: spacing.lg,
        backgroundColor: colors.bgCard,
    },
    backButton: {
        marginRight: spacing.md,
        width: 40,
        height: 40,
        backgroundColor: colors.bgDark,
        borderRadius: borderRadius.md,
        justifyContent: 'center',
        alignItems: 'center',
    },
    backIcon: {
        fontSize: 24,
        color: colors.textPrimary,
    },
    moduleTitle: {
        ...typography.h3,
        color: colors.textPrimary,
    },
    scrollView: {
        flex: 1,
    },
    scrollContent: {
        padding: spacing.lg,
    },
    moduleHero: {
        alignItems: 'center',
        backgroundColor: colors.bgCard,
        borderRadius: borderRadius.xl,
        padding: spacing.xl,
        marginBottom: spacing.xl,
        ...shadows.md,
    },
    moduleIcon: {
        fontSize: 64,
        marginBottom: spacing.md,
    },
    moduleDesc: {
        ...typography.body,
        color: colors.textSecondary,
        textAlign: 'center',
        marginBottom: spacing.lg,
    },
    badgeContainer: {
        flexDirection: 'row',
        gap: spacing.sm,
    },
    premiumBadge: {
        backgroundColor: colors.premium,
        paddingHorizontal: spacing.md,
        paddingVertical: 4,
        borderRadius: borderRadius.full,
    },
    premiumBadgeText: {
        ...typography.caption,
        fontWeight: 'bold',
        color: colors.bgDark,
    },
    lessonCountBadge: {
        backgroundColor: colors.bgDark,
        paddingHorizontal: spacing.md,
        paddingVertical: 4,
        borderRadius: borderRadius.full,
    },
    lessonCountText: {
        ...typography.caption,
        color: colors.textMuted,
    },
    sectionTitle: {
        ...typography.h2,
        color: colors.textPrimary,
        marginBottom: spacing.md,
    },
    lessonItem: {
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: colors.bgCard,
        padding: spacing.md,
        borderRadius: borderRadius.lg,
        marginBottom: spacing.sm,
        ...shadows.sm,
    },
    lessonItemLocked: {
        opacity: 0.6,
    },
    lessonNumberContainer: {
        width: 32,
        height: 32,
        borderRadius: 16,
        backgroundColor: colors.bgDark,
        justifyContent: 'center',
        alignItems: 'center',
        marginRight: spacing.md,
    },
    lessonNumber: {
        ...typography.caption,
        color: colors.primary,
        fontWeight: 'bold',
    },
    lessonInfo: {
        flex: 1,
    },
    lessonTitle: {
        ...typography.body,
        fontWeight: '600',
        color: colors.textPrimary,
    },
    lessonDuration: {
        ...typography.caption,
        color: colors.textMuted,
    },
    statusContainer: {
        marginLeft: spacing.md,
    },
    completedBadge: {
        width: 24,
        height: 24,
        borderRadius: 12,
        backgroundColor: colors.success || '#10b981',
        justifyContent: 'center',
        alignItems: 'center',
    },
    checkIcon: {
        color: '#fff',
        fontSize: 14,
        fontWeight: 'bold',
    },
    comingSoonBadge: {
        backgroundColor: colors.bgDark,
        paddingHorizontal: spacing.sm,
        paddingVertical: 4,
        borderRadius: borderRadius.sm,
    },
    comingSoonText: {
        fontSize: 10,
        color: colors.textMuted,
    },
    playIcon: {
        fontSize: 18,
        color: colors.primary,
    }
});
