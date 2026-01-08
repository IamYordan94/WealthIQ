import { View, Text, StyleSheet, TouchableOpacity, ScrollView, SafeAreaView } from 'react-native';
import { useState, useEffect } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { colors, spacing, borderRadius, typography, shadows } from '../theme';
import { curriculum } from '../data/curriculum';

export default function HomeScreen({ navigation }) {
    const [userLevel, setUserLevel] = useState(1);
    const [streak, setStreak] = useState(0);
    const [progress, setProgress] = useState(0);
    const [isPremium, setIsPremium] = useState(false);

    useEffect(() => {
        loadUserProgress();
    }, []);

    const loadUserProgress = async () => {
        try {
            const progressData = await AsyncStorage.getItem('userProgress');
            if (progressData) {
                const data = JSON.parse(progressData);
                setUserLevel(data.level || 1);
                setStreak(data.streak || 0);
                setProgress(data.progress || 0);
            }

            const premiumStatus = await AsyncStorage.getItem('isPremium');
            setIsPremium(premiumStatus === 'true');
        } catch (error) {
            console.error('Error loading user progress:', error);
        }
    };

    const handleModulePress = (module) => {
        navigation.navigate('ModuleDetail', { module });
    };

    return (
        <SafeAreaView style={styles.container}>
            {/* Header */}
            <View style={styles.header}>
                <View style={styles.headerTop}>
                    <View style={styles.brandContainer}>
                        <Text style={styles.brandIcon}>💰</Text>
                        <Text style={styles.brandText}>WealthIQ</Text>
                    </View>
                    <TouchableOpacity onPress={() => navigation.navigate('Premium')}>
                        <View style={styles.premiumBadge}>
                            <Text style={styles.premiumIcon}>👑</Text>
                        </View>
                    </TouchableOpacity>
                </View>

                <View style={styles.statsContainer}>
                    <View style={styles.stat}>
                        <Text style={styles.statIcon}>🔥</Text>
                        <View>
                            <Text style={styles.statValue}>{streak}</Text>
                            <Text style={styles.statLabel}>Streak</Text>
                        </View>
                    </View>
                    <TouchableOpacity onPress={() => navigation.navigate('Badges')}>
                        <View style={styles.stat}>
                            <Text style={styles.statIcon}>⭐</Text>
                            <View>
                                <Text style={styles.statValue}>{userLevel}</Text>
                                <Text style={styles.statLabel}>Level</Text>
                            </View>
                        </View>
                    </TouchableOpacity>
                    <View style={styles.stat}>
                        <Text style={styles.statIcon}>📊</Text>
                        <View>
                            <Text style={styles.statValue}>{progress}%</Text>
                            <Text style={styles.statLabel}>Progress</Text>
                        </View>
                    </View>
                </View>
            </View>

            {/* Curriculum */}
            <ScrollView style={styles.scrollView} contentContainerStyle={styles.scrollContent}>
                {/* Community Feed Mock */}
                <View style={styles.communityCard}>
                    <View style={styles.communityHeader}>
                        <Text style={styles.communityTitle}>Wealth Circle</Text>
                        <View style={styles.onlineBadge} />
                        <Text style={styles.communityCount}>1,248 online</Text>
                    </View>
                    <View style={styles.feedItem}>
                        <Text style={styles.feedAvatar}>👨‍💼</Text>
                        <View style={styles.feedContent}>
                            <Text style={styles.feedUser}>Marco R. <Text style={styles.feedTime}>• 2m ago</Text></Text>
                            <Text style={styles.feedText}>Just hit my 30-day streak! The Compound Interest calculator really opened my eyes. 🚀</Text>
                        </View>
                    </View>
                </View>

                {/* Financial Tools */}
                <Text style={styles.sectionTitle}>Financial Tools</Text>
                <ScrollView
                    horizontal
                    showsHorizontalScrollIndicator={false}
                    style={styles.toolsScroll}
                    contentContainerStyle={styles.toolsContent}
                >
                    <TouchableOpacity
                        style={styles.toolCard}
                        onPress={() => navigation.navigate('Calculator')}
                    >
                        <Text style={styles.toolIcon}>🧮</Text>
                        <Text style={styles.toolTitle}>Compound Interest</Text>
                        <Text style={styles.toolDesc}>Watch your money grow</Text>
                    </TouchableOpacity>

                    <TouchableOpacity
                        style={[styles.toolCard, !isPremium && styles.toolCardPremium]}
                        onPress={() => isPremium ? navigation.navigate('ActionPlan') : navigation.navigate('Premium')}
                    >
                        <View style={styles.toolHeader}>
                            <Text style={styles.toolIcon}>📋</Text>
                            {!isPremium && <Text style={styles.lockIconSmall}>🔒</Text>}
                        </View>
                        <Text style={styles.toolTitle}>Action Plan</Text>
                        <Text style={styles.toolDesc}>Your daily wealth tasks</Text>
                    </TouchableOpacity>

                    <TouchableOpacity
                        style={[styles.toolCard, !isPremium && styles.toolCardPremium]}
                        onPress={() => isPremium ? navigation.navigate('Report') : navigation.navigate('Premium')}
                    >
                        <View style={styles.toolHeader}>
                            <Text style={styles.toolIcon}>📊</Text>
                            {!isPremium && <Text style={styles.lockIconSmall}>🔒</Text>}
                        </View>
                        <Text style={styles.toolTitle}>Monthly Report</Text>
                        <Text style={styles.toolDesc}>Analyze your progress</Text>
                    </TouchableOpacity>
                </ScrollView>

                <Text style={styles.sectionTitle}>Your Curriculum</Text>

                {curriculum.map((module) => (
                    <TouchableOpacity
                        key={module.id}
                        style={[
                            styles.moduleCard,
                            { borderLeftColor: module.color },
                        ]}
                        onPress={() => handleModulePress(module)}
                    >
                        <View style={styles.moduleHeader}>
                            <View style={styles.moduleIconContainer}>
                                <Text style={styles.moduleIcon}>{module.icon}</Text>
                            </View>
                            <View style={styles.moduleInfo}>
                                <View style={styles.moduleTitleRow}>
                                    <Text style={styles.moduleTitle}>{module.title}</Text>
                                    {module.isPremium && !isPremium && (
                                        <View style={styles.lockBadge}>
                                            <Text style={styles.lockIcon}>🔒</Text>
                                        </View>
                                    )}
                                </View>
                                <Text style={styles.moduleDescription}>{module.description}</Text>
                                <View style={styles.progressBar}>
                                    <View style={[styles.progressFill, { backgroundColor: module.color }]} />
                                </View>
                            </View>
                        </View>

                        <View style={styles.lessonCount}>
                            <Text style={styles.lessonCountText}>{module.lessons.length} lessons</Text>
                            <Text style={styles.arrow}>→</Text>
                        </View>
                    </TouchableOpacity>
                ))}

                {!isPremium && (
                    <TouchableOpacity
                        style={styles.premiumCTA}
                        onPress={() => navigation.navigate('Premium')}
                    >
                        <Text style={styles.premiumCTAIcon}>👑</Text>
                        <Text style={styles.premiumCTATitle}>Unlock Full Curriculum</Text>
                        <Text style={styles.premiumCTAText}>Master wealth building for €3.99/month</Text>
                    </TouchableOpacity>
                )}
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
        padding: spacing.lg,
        backgroundColor: colors.bgCard,
        borderBottomLeftRadius: borderRadius.xl,
        borderBottomRightRadius: borderRadius.xl,
        ...shadows.md,
    },
    headerTop: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginBottom: spacing.lg,
    },
    brandContainer: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    brandIcon: {
        fontSize: 24,
        marginRight: spacing.sm,
    },
    brandText: {
        ...typography.h3,
        color: colors.textPrimary,
    },
    premiumBadge: {
        backgroundColor: colors.premium,
        borderRadius: borderRadius.full,
        width: 40,
        height: 40,
        justifyContent: 'center',
        alignItems: 'center',
    },
    premiumIcon: {
        fontSize: 20,
    },
    statsContainer: {
        flexDirection: 'row',
        justifyContent: 'space-around',
    },
    stat: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    statIcon: {
        fontSize: 24,
        marginRight: spacing.sm,
    },
    statValue: {
        ...typography.h3,
        color: colors.textPrimary,
        lineHeight: 24,
    },
    statLabel: {
        ...typography.caption,
        color: colors.textMuted,
    },
    scrollView: {
        flex: 1,
    },
    scrollContent: {
        padding: spacing.lg,
    },
    sectionTitle: {
        ...typography.h2,
        color: colors.textPrimary,
        marginBottom: spacing.lg,
    },
    moduleCard: {
        backgroundColor: colors.bgCard,
        borderRadius: borderRadius.lg,
        borderLeftWidth: 4,
        padding: spacing.lg,
        marginBottom: spacing.md,
        ...shadows.sm,
    },
    moduleHeader: {
        flexDirection: 'row',
        marginBottom: spacing.md,
    },
    moduleIconContainer: {
        width: 60,
        height: 60,
        backgroundColor: colors.bgDark,
        borderRadius: borderRadius.md,
        justifyContent: 'center',
        alignItems: 'center',
        marginRight: spacing.md,
    },
    moduleIcon: {
        fontSize: 32,
    },
    moduleInfo: {
        flex: 1,
    },
    moduleTitleRow: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    moduleTitle: {
        ...typography.h3,
        color: colors.textPrimary,
        marginRight: spacing.sm,
    },
    lockBadge: {
        backgroundColor: colors.premium,
        borderRadius: borderRadius.sm,
        paddingHorizontal: spacing.xs,
        paddingVertical: 2,
    },
    lockIcon: {
        fontSize: 12,
    },
    moduleDescription: {
        ...typography.bodySmall,
        color: colors.textSecondary,
        marginTop: spacing.xs,
        marginBottom: spacing.sm,
    },
    progressBar: {
        height: 6,
        backgroundColor: colors.bgDark,
        borderRadius: borderRadius.full,
        overflow: 'hidden',
    },
    progressFill: {
        flex: 1,
        borderRadius: borderRadius.full,
    },
    lessonCount: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    lessonCountText: {
        ...typography.bodySmall,
        color: colors.textMuted,
    },
    arrow: {
        ...typography.h3,
        color: colors.primary,
    },
    premiumCTA: {
        backgroundColor: colors.bgCard,
        borderRadius: borderRadius.lg,
        borderWidth: 2,
        borderColor: colors.premium,
        padding: spacing.xl,
        alignItems: 'center',
        marginTop: spacing.lg,
        ...shadows.glow,
    },
    premiumCTAIcon: {
        fontSize: 48,
        marginBottom: spacing.sm,
    },
    premiumCTATitle: {
        ...typography.h3,
        color: colors.premium,
        marginBottom: spacing.xs,
    },
    premiumCTAText: {
        ...typography.body,
        color: colors.textSecondary,
        textAlign: 'center',
    },
    toolsScroll: {
        marginHorizontal: -spacing.lg,
        marginBottom: spacing.xl,
    },
    toolsContent: {
        paddingHorizontal: spacing.lg,
        gap: spacing.md,
    },
    toolCard: {
        backgroundColor: colors.bgCard,
        borderRadius: borderRadius.lg,
        padding: spacing.lg,
        width: 160,
        ...shadows.sm,
        borderWidth: 1,
        borderColor: colors.border,
    },
    toolCardLocked: {
        opacity: 0.7,
    },
    toolIcon: {
        fontSize: 32,
        marginBottom: spacing.sm,
    },
    toolTitle: {
        ...typography.body,
        fontWeight: 'bold',
        color: colors.textPrimary,
    },
    toolDesc: {
        ...typography.caption,
        color: colors.textMuted,
        marginTop: 2,
    },
    communityCard: {
        backgroundColor: colors.bgCard,
        borderRadius: borderRadius.lg,
        padding: spacing.md,
        marginBottom: spacing.xl,
        borderWidth: 1,
        borderColor: colors.primary + '33',
    },
    communityHeader: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: spacing.md,
    },
    communityTitle: {
        ...typography.bodySmall,
        fontWeight: 'bold',
        color: colors.primary,
        marginRight: spacing.sm,
    },
    onlineBadge: {
        width: 8,
        height: 8,
        borderRadius: 4,
        backgroundColor: colors.success || '#10b981',
        marginRight: 4,
    },
    communityCount: {
        ...typography.caption,
        color: colors.textMuted,
    },
    feedItem: {
        flexDirection: 'row',
        backgroundColor: colors.bgDark,
        padding: spacing.sm,
        borderRadius: borderRadius.md,
    },
    feedAvatar: {
        fontSize: 24,
        marginRight: spacing.sm,
    },
    feedContent: {
        flex: 1,
    },
    feedUser: {
        fontSize: 12,
        fontWeight: 'bold',
        color: colors.textPrimary,
    },
    feedTime: {
        fontWeight: 'normal',
        color: colors.textMuted,
    },
    feedText: {
        fontSize: 12,
        color: colors.textSecondary,
        marginTop: 2,
    },
    toolHeader: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'flex-start',
    },
    toolCardPremium: {
        borderColor: colors.premium + '66',
    },
    lockIconSmall: {
        fontSize: 12,
    },
});
