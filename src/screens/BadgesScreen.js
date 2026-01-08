import { View, Text, StyleSheet, TouchableOpacity, ScrollView, SafeAreaView, FlatList } from 'react-native';
import { useState, useEffect } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { colors, spacing, borderRadius, typography, shadows } from '../theme';

const ALL_BADGES = [
    { id: 'First Step', title: 'First Step', desc: 'Completed your first lesson', icon: '🌱' },
    { id: 'Scholar', title: 'Scholar', desc: 'Completed 5 lessons', icon: '📚' },
    { id: 'Wealth Builder', title: 'Wealth Builder', desc: 'Completed 10 lessons', icon: '🧱' },
    { id: 'Fire Starter', title: 'Fire Starter', desc: 'Achieved a 3-day streak', icon: '🔥' },
    { id: 'Math Whiz', title: 'Math Whiz', desc: 'Used the Compound Calculator', icon: '🧮' },
    { id: 'Strategist', title: 'Strategist', desc: 'Generated an Action Plan', icon: '🎯' },
    { id: 'Premium Member', title: 'VIP', desc: 'Unlocked full access', icon: '👑' },
];

export default function BadgesScreen({ navigation }) {
    const [earnedBadges, setEarnedBadges] = useState([]);

    useEffect(() => {
        loadBadges();
    }, []);

    const loadBadges = async () => {
        try {
            const badges = JSON.parse(await AsyncStorage.getItem('badges') || '[]');
            setEarnedBadges(badges);
        } catch (error) {
            console.error('Error loading badges:', error);
        }
    };

    const renderBadge = ({ item }) => {
        const isEarned = earnedBadges.includes(item.id);
        return (
            <View style={[styles.badgeCard, !isEarned && styles.badgeCardLocked]}>
                <View style={[styles.iconContainer, !isEarned && styles.iconContainerLocked]}>
                    <Text style={[styles.badgeIcon, !isEarned && styles.badgeIconLocked]}>
                        {isEarned ? item.icon : '❓'}
                    </Text>
                </View>
                <Text style={[styles.badgeTitle, !isEarned && styles.badgeTitleLocked]}>
                    {item.title}
                </Text>
                <Text style={styles.badgeDesc}>{item.desc}</Text>
                {isEarned && <View style={styles.earnedTag}><Text style={styles.earnedTagText}>EARNED</Text></View>}
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
                ListHeaderComponent={() => (
                    <View style={styles.statsSection}>
                        <Text style={styles.statsCount}>{earnedBadges.length}/{ALL_BADGES.length}</Text>
                        <Text style={styles.statsLabel}>Badges Earned</Text>
                    </View>
                )}
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
        borderColor: 'transparent',
    },
    iconContainer: {
        width: 70,
        height: 70,
        backgroundColor: colors.primary + '22',
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
    }
});
