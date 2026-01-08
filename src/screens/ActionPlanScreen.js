import { View, Text, StyleSheet, TouchableOpacity, ScrollView, SafeAreaView } from 'react-native';
import { useState, useEffect } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { colors, spacing, borderRadius, typography, shadows } from '../theme';

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
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        generatePlan();
    }, []);

    const generatePlan = async () => {
        try {
            const userDataStr = await AsyncStorage.getItem('userData');
            if (userDataStr) {
                const userData = JSON.parse(userDataStr);
                let selectedActions = [];

                // Add based on experience
                if (userData.experience && ACTION_BANK[userData.experience]) {
                    selectedActions = [...ACTION_BANK[userData.experience]];
                }

                // Add based on situation (yourAnatomy)
                if (userData.yourAnatomy && ACTION_BANK[userData.yourAnatomy]) {
                    selectedActions = [...selectedActions, ...ACTION_BANK[userData.yourAnatomy]];
                }

                // Add based on goals (partnerAnatomy)
                if (userData.partnerAnatomy) {
                    userData.partnerAnatomy.forEach(goal => {
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
        } finally {
            setLoading(false);
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

            <ScrollView style={styles.scrollView} contentContainerStyle={styles.scrollContent}>
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
                            onPress={() => {
                                // For now just visual feedback
                                alert('Great job! Keep the momentum going.');
                            }}
                        >
                            <Text style={styles.completeButtonText}>I've done this</Text>
                        </TouchableOpacity>
                    </View>
                ))}

                <TouchableOpacity style={styles.refreshButton} onPress={generatePlan}>
                    <Text style={styles.refreshButtonText}>Generate New Tasks</Text>
                </TouchableOpacity>
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
        backgroundColor: colors.bgCard,
        borderRadius: borderRadius.xl,
        padding: spacing.lg,
        marginBottom: spacing.md,
        ...shadows.md,
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
        backgroundColor: colors.primary + '22',
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
    }
});
