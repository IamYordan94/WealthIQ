import { View, Text, StyleSheet, TouchableOpacity, ScrollView, SafeAreaView, Animated, Alert } from 'react-native';
import { useState, useEffect, useRef } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { colors, spacing, borderRadius, typography, shadows, glass } from '../theme';

const ACTION_BANK = {
    beginner: [
        { id: 'b1', title: 'Download a tracking app', desc: 'Get full visibility on your spending.', icon: '📱' },
        { id: 'b2', title: 'Open a separate savings account', desc: 'Keep your emergency fund away from your spending.', icon: '🏦' },
        { id: 'b3', title: 'Review last month\'s bank statement', desc: 'Find 3 subscriptions to cancel.', icon: '📄' },
    ],
    intermediate: [
        { id: 'i1', title: 'Increase your 401k contribution by 1%', desc: 'A small change now is huge later.', icon: '📈' },
        { id: 'i2', title: 'Research low-cost index funds', desc: 'Look for Vanguard or iShares options.', icon: '🔍' },
        { id: 'i3', title: 'Calculate Your Net Worth', desc: 'Assets minus Liabilities.', icon: '📊' },
    ],
    advanced: [
        { id: 'a1', title: 'Optimize for Tax-Loss Harvesting', desc: 'Lower your taxable income.', icon: '📉' },
        { id: 'a2', title: 'Review your estate plan', desc: 'Ensure your beneficiaries are correct.', icon: '📝' },
        { id: 'a3', title: 'Analyze alternative assets', desc: 'Look into REITs or private equity.', icon: '💎' },
    ],
    student: [
        { id: 's1', title: 'Apply for a student credit card', desc: 'Start building credit history safely.', icon: '🎓' },
        { id: 's2', title: 'Set up a per-semester budget', desc: 'Divide your loans/income by weeks.', icon: '📅' },
    ],
    business: [
        { id: 'biz1', title: 'Separate business and personal accounts', desc: 'Crucial for tax and liability.', icon: '💼' },
        { id: 'biz2', title: 'Review your profit margins', desc: 'Find ways to cut overhead.', icon: '✂️' },
    ],
    debt: [
        { id: 'd1', title: 'List debts by interest rate', desc: 'Use the Debt Avalanche method.', icon: '📋' },
        { id: 'd2', title: 'Negotiate one interest rate', desc: 'Call your bank and ask for a lower APR.', icon: '📞' },
    ],
    save: [
        { id: 'sv1', title: 'Set up an auto-transfer', desc: 'Pay yourself first every payday.', icon: '⚙️' },
        { id: 'sv2', title: 'The "24-hour" rule', desc: 'Wait 24h before any non-essential purchase.', icon: '⏱️' },
    ]
};

export default function ActionPlanScreen({ navigation }) {
    const [actions, setActions] = useState([]);
    const [completedActions, setCompletedActions] = useState([]);
    const [loading, setLoading] = useState(true);
    const fadeAnim = useRef(new Animated.Value(0)).current;

    useEffect(() => {
        loadActions();
        Animated.timing(fadeAnim, {
            toValue: 1,
            duration: 600,
            useNativeDriver: true,
        }).start();
    }, []);

    const loadActions = async () => {
        try {
            const userDataStr = await AsyncStorage.getItem('userData');
            if (userDataStr) {
                const userData = JSON.parse(userDataStr);
                let selectedActions = [];

                // Add based on experience
                if (userData.experience && ACTION_BANK[userData.experience]) {
                    selectedActions = [...ACTION_BANK[userData.experience]];
                }

                // Add based on situation
                if (userData.situation && ACTION_BANK[userData.situation]) {
                    selectedActions = [...selectedActions, ...ACTION_BANK[userData.situation]];
                }

                // Add based on goals
                if (userData.goals) {
                    userData.goals.forEach(goal => {
                        if (ACTION_BANK[goal]) {
                            selectedActions = [...selectedActions, ...ACTION_BANK[goal]];
                        }
                    });
                }

                // Shuffle and pick 4
                const shuffled = selectedActions.sort(() => 0.5 - Math.random());
                setActions(shuffled.slice(0, 4));
            }
        } catch (error) {
            console.error('Error generating action plan:', error);
            Alert.alert(
                'Error Loading Actions',
                'We couldn\'t load your personalized action plan. Please try again.',
                [{ text: 'OK' }]
            );
        } finally {
            setLoading(false);
        }
    };

    const markAsDone = async (action) => {
        // Show celebration alert
        Alert.alert('🎉 Great job!', 'Keep the momentum going!', [{ text: 'OK' }]);

        // Move to completed
        setCompletedActions([...completedActions, action]);
        setActions(actions.filter(a => a.id !== action.id));

        // Save to AsyncStorage
        try {
            const completed = [...completedActions, action];
            await AsyncStorage.setItem('completedActions', JSON.stringify(completed));
        } catch (error) {
            console.error('Error saving completed action:', error);
            Alert.alert(
                'Save Error',
                'We couldn\'t save your progress. Your completion was recorded for this session only.',
                [{ text: 'OK' }]
            );
        }
    };

    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.header}>
                <TouchableOpacity onPress={() => navigation.goBack()} style={styles.backButton}>
                    <Text style={styles.backIcon}>←</Text>
                </TouchableOpacity>
                <Text style={styles.title}>Personalized Action Plan</Text>
            </View>

            <ScrollView contentContainerStyle={styles.scrollContent}>
                <Animated.View style={{ opacity: fadeAnim }}>
                    <View style={styles.heroSection}>
                        <Text style={styles.heroEmoji}>🎯</Text>
                        <Text style={styles.heroTitle}>Your Next Steps</Text>
                        <Text style={styles.heroSubtitle}>Small actions today lead to big wealth tomorrow.</Text>
                    </View>

                    {actions.map((action, index) => (
                        <View key={action.id} style={styles.actionCard}>
                            <View style={styles.actionHeader}>
                                <View style={styles.iconContainer}>
                                    <Text style={styles.actionIcon}>{action.icon}</Text>
                                </View>
                                <View style={styles.actionInfo}>
                                    <Text style={styles.actionTitle}>{action.title}</Text>
                                    <Text style={styles.actionDesc}>{action.desc}</Text>
                                </View>
                            </View>
                            <TouchableOpacity
                                style={styles.completeButton}
                                onPress={() => markAsDone(action)}
                            >
                                <Text style={styles.completeButtonText}>I've done this</Text>
                            </TouchableOpacity>
                        </View>
                    ))}

                    {completedActions.length > 0 && (
                        <>
                            <Text style={styles.sectionTitle}>✅ Completed Steps</Text>
                            {completedActions.map((action) => (
                                <View key={action.id} style={[styles.actionCard, styles.completedCard]}>
                                    <View style={styles.actionHeader}>
                                        <View style={styles.iconContainer}>
                                            <Text style={styles.actionIcon}>{action.icon}</Text>
                                        </View>
                                        <View style={styles.actionInfo}>
                                            <Text style={[styles.actionTitle, styles.completedText]}>{action.title}</Text>
                                            <Text style={[styles.actionDesc, styles.completedText]}>{action.desc}</Text>
                                        </View>
                                    </View>
                                </View>
                            ))}
                        </>
                    )}

                    <TouchableOpacity style={styles.refreshButton} onPress={loadActions}>
                        <Text style={styles.refreshButtonText}>Generate New Tasks</Text>
                    </TouchableOpacity>
                </Animated.View>
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
    title: {
        ...typography.h3,
        color: colors.textPrimary,
    },
    scrollView: {
        flex: 1,
    },
    scrollContent: {
        padding: spacing.lg,
    },
    heroSection: {
        alignItems: 'center',
        marginBottom: spacing.xl,
        padding: spacing.lg,
    },
    heroEmoji: {
        fontSize: 64,
        marginBottom: spacing.md,
    },
    heroTitle: {
        ...typography.h1,
        color: colors.textPrimary,
        marginBottom: spacing.xs,
    },
    heroSubtitle: {
        ...typography.body,
        color: colors.textSecondary,
        textAlign: 'center',
    },
    actionCard: {
        ...glass.card,
        borderRadius: borderRadius.xl,
        padding: spacing.lg,
        marginBottom: spacing.md,
    },
    actionHeader: {
        flexDirection: 'row',
        marginBottom: spacing.lg,
    },
    iconContainer: {
        width: 48,
        height: 48,
        backgroundColor: colors.bgDark,
        borderRadius: borderRadius.md,
        justifyContent: 'center',
        alignItems: 'center',
        marginRight: spacing.md,
    },
    actionIcon: {
        fontSize: 24,
    },
    actionInfo: {
        flex: 1,
    },
    actionTitle: {
        ...typography.h3,
        color: colors.textPrimary,
        marginBottom: 4,
    },
    actionDesc: {
        ...typography.bodySmall,
        color: colors.textSecondary,
    },
    completeButton: {
        backgroundColor: colors.bgCardHover,
        borderWidth: 1,
        borderColor: colors.primary,
        borderRadius: borderRadius.md,
        padding: spacing.md,
        alignItems: 'center',
    },
    completeButtonText: {
        ...typography.body,
        color: colors.primary,
        fontWeight: 'bold',
    },
    refreshButton: {
        padding: spacing.lg,
        alignItems: 'center',
        marginTop: spacing.md,
    },
    refreshButtonText: {
        ...typography.bodySmall,
        color: colors.textMuted,
        textDecorationLine: 'underline',
    },
    completedCard: {
        opacity: 0.6,
    },
    completedText: {
        textDecorationLine: 'line-through',
        opacity: 0.7,
    },
    sectionTitle: {
        ...typography.h3,
        color: colors.textPrimary,
        marginTop: spacing.xl,
        marginBottom: spacing.md,
    }
});
