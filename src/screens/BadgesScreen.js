import { View, Text, StyleSheet, TouchableOpacity, ScrollView, SafeAreaView, FlatList, Alert } from 'react-native';
import { useState, useEffect } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { colors, spacing, borderRadius, typography, shadows } from '../theme';

import ProgressService from '../services/ProgressService';
import { curriculum } from '../data/curriculum';

const ALL_BADGES = [
    // Completion Badges
    { id: 'First Step', title: 'First Step', desc: 'Completed your first lesson', icon: '🌱', category: 'completion', rarity: 'common' },
    { id: 'Getting Started', title: 'Getting Started', desc: 'Completed 5 lessons', icon: '📚', category: 'completion', rarity: 'common' },
    { id: 'Committed Learner', title: 'Committed Learner', desc: 'Completed 10 lessons', icon: '🎓', category: 'completion', rarity: 'uncommon' },
    { id: 'Halfway There', title: 'Halfway There', desc: 'Completed 20 lessons', icon: '⭐', category: 'completion', rarity: 'rare' },
    { id: 'Master of Wealth', title: 'Master of Wealth', desc: 'Completed all lessons', icon: '👑', category: 'completion', rarity: 'legendary' },
    
    // Streak Badges
    { id: 'Week Warrior', title: 'Week Warrior', desc: 'Achieved a 7-day streak', icon: '🔥', category: 'streak', rarity: 'uncommon' },
    { id: 'Month Master', title: 'Month Master', desc: 'Achieved a 30-day streak', icon: '💎', category: 'streak', rarity: 'rare' },
    { id: 'Hundred Days', title: 'Hundred Days', desc: 'Achieved a 100-day streak', icon: '🏆', category: 'streak', rarity: 'legendary' },
    
    // Module Completion Badges
    { id: 'Money Basics Master', title: 'Money Basics Master', desc: 'Completed Money Basics module', icon: '💰', category: 'module', rarity: 'uncommon', moduleId: 'money-basics' },
    { id: 'Banking Expert', title: 'Banking Expert', desc: 'Completed Banking & Credit module', icon: '🏦', category: 'module', rarity: 'uncommon', moduleId: 'banking-credit' },
    { id: 'Investing Pro', title: 'Investing Pro', desc: 'Completed Investing 101 module', icon: '📈', category: 'module', rarity: 'uncommon', moduleId: 'investing-101' },
    { id: 'Wealth Builder', title: 'Wealth Builder', desc: 'Completed Building Wealth module', icon: '💎', category: 'module', rarity: 'rare', moduleId: 'building-wealth' },
    
    // Quiz Performance Badges
    { id: 'Perfect Score', title: 'Perfect Score', desc: 'Got 100% on a quiz', icon: '🎯', category: 'performance', rarity: 'uncommon' },
    { id: 'Quiz Master', title: 'Quiz Master', desc: 'Got 10 perfect quiz scores', icon: '🧠', category: 'performance', rarity: 'rare' },
    
    // Consistency Badges
    { id: 'Early Bird', title: 'Early Bird', desc: 'Completed a lesson before 8 AM', icon: '🌅', category: 'consistency', rarity: 'common' },
    { id: 'Night Owl', title: 'Night Owl', desc: 'Completed a lesson after 10 PM', icon: '🦉', category: 'consistency', rarity: 'common' },
    { id: 'Weekend Warrior', title: 'Weekend Warrior', desc: 'Completed 5 lessons on weekends', icon: '🎮', category: 'consistency', rarity: 'uncommon' },
];

export default function BadgesScreen({ navigation }) {
    const [earnedBadges, setEarnedBadges] = useState([]);
    const [moduleProgress, setModuleProgress] = useState({});

    useEffect(() => {
        loadBadges();
        loadModuleProgress();
    }, []);

    const loadBadges = async () => {
        try {
            const badges = JSON.parse(await AsyncStorage.getItem('badges') || '[]');
            setEarnedBadges(badges);
        } catch (error) {
            console.error('Error loading badges:', error);
            Alert.alert(
                'Error Loading Badges',
                'We couldn\'t load your achievements. Please try again.',
                [{ text: 'OK' }]
            );
        }
    };

    const loadModuleProgress = async () => {
        try {
            const progress = await ProgressService.getModuleProgress();
            setModuleProgress(progress);
        } catch (error) {
            console.error('Error loading module progress:', error);
        }
    };

    const getBadgeEarnedStatus = (badge) => {
        // Check if badge is already earned
        if (earnedBadges.includes(badge.id)) return true;
        
        // Check module completion badges
        if (badge.category === 'module' && badge.moduleId) {
            return (moduleProgress[badge.moduleId] || 0) === 100;
        }
        
        return false;
    };

    const getRarityColor = (rarity) => {
        switch (rarity) {
            case 'legendary': return colors.premium;
            case 'rare': return colors.secondary;
            case 'uncommon': return colors.primary;
            default: return colors.textMuted;
        }
    };

    const renderBadge = ({ item }) => {
        const isEarned = getBadgeEarnedStatus(item);
        const rarityColor = getRarityColor(item.rarity);
        
        return (
            <View style={[
                styles.badgeCard, 
                !isEarned && styles.badgeCardLocked,
                isEarned && { borderColor: rarityColor, borderWidth: 2 }
            ]}>
                <View style={[
                    styles.iconContainer, 
                    !isEarned && styles.iconContainerLocked,
                    isEarned && { backgroundColor: rarityColor + '20' }
                ]}>
                    <Text style={[styles.badgeIcon, !isEarned && styles.badgeIconLocked]}>
                        {isEarned ? item.icon : '❓'}
                    </Text>
                </View>
                <Text style={[styles.badgeTitle, !isEarned && styles.badgeTitleLocked]}>
                    {item.title}
                </Text>
                <Text style={styles.badgeDesc}>{item.desc}</Text>
                {isEarned && (
                    <View style={[styles.earnedTag, { backgroundColor: rarityColor }]}>
                        <Text style={styles.earnedTagText}>
                            {item.rarity.toUpperCase()}
                        </Text>
                    </View>
                )}
                {!isEarned && item.category === 'module' && (
                    <View style={styles.progressContainer}>
                        <Text style={styles.progressText}>
                            {moduleProgress[item.moduleId] || 0}% Complete
                        </Text>
                    </View>
                )}
            </View>
        );
    };

    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.header}>
                <TouchableOpacity onPress={() => navigation.goBack()} style={styles.backButton}>
                    <Text style={styles.backIcon}>←</Text>
                </TouchableOpacity>
                <Text style={styles.title}>Your Achievements</Text>
            </View>

            <FlatList
                data={ALL_BADGES}
                renderItem={renderBadge}
                keyExtractor={item => item.id}
                numColumns={2}
                contentContainerStyle={styles.listContent}
                ListHeaderComponent={() => {
                    const earnedCount = ALL_BADGES.filter(b => getBadgeEarnedStatus(b)).length;
                    const categories = ['completion', 'streak', 'module', 'performance', 'consistency'];
                    const categoryCounts = categories.map(cat => ({
                        name: cat,
                        earned: ALL_BADGES.filter(b => b.category === cat && getBadgeEarnedStatus(b)).length,
                        total: ALL_BADGES.filter(b => b.category === cat).length,
                    }));

                    return (
                        <View>
                            <View style={styles.statsSection}>
                                <Text style={styles.statsCount}>{earnedCount}/{ALL_BADGES.length}</Text>
                                <Text style={styles.statsLabel}>Badges Earned</Text>
                                <View style={styles.progressRing}>
                                    <Text style={styles.progressPercent}>
                                        {Math.round((earnedCount / ALL_BADGES.length) * 100)}%
                                    </Text>
                                </View>
                            </View>
                            
                            <View style={styles.categoriesSection}>
                                <Text style={styles.categoriesTitle}>By Category</Text>
                                {categoryCounts.map((cat, index) => (
                                    <View key={index} style={styles.categoryRow}>
                                        <Text style={styles.categoryName}>
                                            {cat.name.charAt(0).toUpperCase() + cat.name.slice(1)}
                                        </Text>
                                        <Text style={styles.categoryCount}>
                                            {cat.earned}/{cat.total}
                                        </Text>
                                    </View>
                                ))}
                            </View>

                            {earnedCount === 0 && (
                                <View style={styles.emptyState}>
                                    <Text style={styles.emptyStateIcon}>🎯</Text>
                                    <Text style={styles.emptyStateTitle}>Start Your Journey!</Text>
                                    <Text style={styles.emptyStateText}>
                                        Complete lessons to earn your first badge. Each achievement celebrates your progress toward financial mastery.
                                    </Text>
                                </View>
                            )}
                        </View>
                    );
                }}
            />
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
    title: {
        ...typography.h3,
        color: colors.textPrimary,
    },
    listContent: {
        padding: spacing.lg,
    },
    statsSection: {
        alignItems: 'center',
        marginBottom: spacing.xl,
        padding: spacing.xl,
        backgroundColor: colors.bgCard,
        borderRadius: borderRadius.xl,
        ...shadows.md,
    },
    statsCount: {
        fontSize: 48,
        fontWeight: 'bold',
        color: colors.primary,
    },
    statsLabel: {
        ...typography.body,
        color: colors.textSecondary,
    },
    badgeCard: {
        flex: 1,
        backgroundColor: colors.bgCard,
        borderRadius: borderRadius.lg,
        padding: spacing.md,
        margin: spacing.xs,
        alignItems: 'center',
        ...shadows.sm,
        borderWidth: 1,
        borderColor: colors.border,
    },
    badgeCardLocked: {
        opacity: 0.6,
        borderColor: colors.transparent,
    },
    iconContainer: {
        width: 70,
        height: 70,
        backgroundColor: colors.bgCardHover,
        borderRadius: 35,
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: spacing.sm,
    },
    iconContainerLocked: {
        backgroundColor: colors.bgDark,
    },
    badgeIcon: {
        fontSize: 36,
    },
    badgeIconLocked: {
        opacity: 0.3,
    },
    badgeTitle: {
        ...typography.body,
        fontWeight: 'bold',
        color: colors.textPrimary,
        textAlign: 'center',
    },
    badgeTitleLocked: {
        color: colors.textMuted,
    },
    badgeDesc: {
        ...typography.caption,
        color: colors.textMuted,
        textAlign: 'center',
        marginTop: 4,
    },
    earnedTag: {
        position: 'absolute',
        top: 8,
        right: 8,
        backgroundColor: colors.success || '#10b981',
        paddingHorizontal: 6,
        paddingVertical: 2,
        borderRadius: 4,
    },
    earnedTagText: {
        fontSize: 8,
        fontWeight: 'bold',
        color: '#fff',
    },
    emptyState: {
        marginTop: spacing.xl,
        padding: spacing.lg,
        alignItems: 'center',
    },
    emptyStateIcon: {
        fontSize: 48,
        marginBottom: spacing.md,
    },
    emptyStateTitle: {
        ...typography.h3,
        color: colors.textPrimary,
        marginBottom: spacing.sm,
    },
    emptyStateText: {
        ...typography.body,
        color: colors.textSecondary,
        textAlign: 'center',
        lineHeight: 22,
    },
    progressRing: {
        width: 80,
        height: 80,
        borderRadius: 40,
        borderWidth: 4,
        borderColor: colors.primary,
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: spacing.md,
    },
    progressPercent: {
        ...typography.h3,
        color: colors.primary,
        fontWeight: 'bold',
    },
    categoriesSection: {
        backgroundColor: colors.bgCard,
        borderRadius: borderRadius.lg,
        padding: spacing.lg,
        marginBottom: spacing.xl,
        marginHorizontal: spacing.lg,
    },
    categoriesTitle: {
        ...typography.h3,
        color: colors.textPrimary,
        marginBottom: spacing.md,
    },
    categoryRow: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingVertical: spacing.sm,
        borderBottomWidth: 1,
        borderBottomColor: colors.border,
    },
    categoryName: {
        ...typography.body,
        color: colors.textSecondary,
        textTransform: 'capitalize',
    },
    categoryCount: {
        ...typography.body,
        color: colors.primary,
        fontWeight: 'bold',
    },
    progressContainer: {
        marginTop: spacing.xs,
        paddingTop: spacing.xs,
        borderTopWidth: 1,
        borderTopColor: colors.border,
    },
    progressText: {
        ...typography.caption,
        color: colors.textMuted,
        fontSize: 10,
    },
});
