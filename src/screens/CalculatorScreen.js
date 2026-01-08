import { View, Text, StyleSheet, TouchableOpacity, ScrollView, TextInput, SafeAreaView } from 'react-native';
import { useState, useEffect } from 'react';
import { colors, spacing, borderRadius, typography, shadows } from '../theme';

export default function CalculatorScreen({ navigation }) {
    const [principal, setPrincipal] = useState('1000');
    const [monthlyContribution, setMonthlyContribution] = useState('100');
    const [years, setYears] = useState('10');
    const [interestRate, setInterestRate] = useState('7');
    const [result, setResult] = useState(0);
    const [totalContributions, setTotalContributions] = useState(0);
    const [totalInterest, setTotalInterest] = useState(0);

    useEffect(() => {
        calculateCompoundInterest();
    }, [principal, monthlyContribution, years, interestRate]);

    const calculateCompoundInterest = () => {
        const P = parseFloat(principal) || 0;
        const PMT = parseFloat(monthlyContribution) || 0;
        const t = parseFloat(years) || 0;
        const r = (parseFloat(interestRate) || 0) / 100 / 12;
        const n = 12; // monthly compounding

        if (t <= 0) {
            setResult(P);
            setTotalContributions(P);
            setTotalInterest(0);
            return;
        }

        // Formula: FV = P(1 + r/n)^(nt) + PMT * [((1 + r/n)^(nt) - 1) / (r/n)]
        const compoundFactor = Math.pow(1 + r, n * t);
        const fvPrincipal = P * compoundFactor;
        const fvAnnuity = PMT * ((compoundFactor - 1) / r);

        const finalValue = fvPrincipal + fvAnnuity;
        const totalSent = P + (PMT * 12 * t);

        setResult(finalValue.toFixed(2));
        setTotalContributions(totalSent.toFixed(2));
        setTotalInterest((finalValue - totalSent).toFixed(2));
    };

    const InputField = ({ label, value, onChangeText, suffix }) => (
        <View style={styles.inputGroup}>
            <Text style={styles.label}>{label}</Text>
            <View style={styles.inputWrapper}>
                <TextInput
                    style={styles.input}
                    value={value}
                    onChangeText={onChangeText}
                    keyboardType="numeric"
                    placeholderTextColor={colors.textMuted}
                />
                <Text style={styles.suffix}>{suffix}</Text>
            </View>
        </View>
    );

    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.header}>
                <TouchableOpacity onPress={() => navigation.goBack()} style={styles.backButton}>
                    <Text style={styles.backIcon}>←</Text>
                </TouchableOpacity>
                <Text style={styles.title}>Compound Interest</Text>
            </View>

            <ScrollView style={styles.scrollView} contentContainerStyle={styles.scrollContent}>
                <View style={styles.resultCard}>
                    <Text style={styles.resultLabel}>Future Value</Text>
                    <Text style={styles.resultValue}>€{parseFloat(result).toLocaleString()}</Text>

                    <View style={styles.breakdown}>
                        <View style={styles.breakdownItem}>
                            <View style={[styles.dot, { backgroundColor: colors.primary }]} />
                            <Text style={styles.breakdownText}>Contributions: €{parseFloat(totalContributions).toLocaleString()}</Text>
                        </View>
                        <View style={styles.breakdownItem}>
                            <View style={[styles.dot, { backgroundColor: colors.success || '#10b981' }]} />
                            <Text style={styles.breakdownText}>Interest: €{parseFloat(totalInterest).toLocaleString()}</Text>
                        </View>
                    </View>
                </View>

                <View style={styles.inputsSection}>
                    <InputField
                        label="Initial Investment"
                        value={principal}
                        onChangeText={setPrincipal}
                        suffix="€"
                    />
                    <InputField
                        label="Monthly Contribution"
                        value={monthlyContribution}
                        onChangeText={setMonthlyContribution}
                        suffix="€"
                    />
                    <InputField
                        label="Interest Rate (Annual)"
                        value={interestRate}
                        onChangeText={setInterestRate}
                        suffix="%"
                    />
                    <InputField
                        label="Time Period"
                        value={years}
                        onChangeText={setYears}
                        suffix="Years"
                    />
                </View>

                <View style={styles.infoBox}>
                    <Text style={styles.infoText}>
                        💡 Compound interest is interest calculated on the initial principal, which also includes all of the accumulated interest from previous periods.
                    </Text>
                </View>
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
    resultCard: {
        backgroundColor: colors.bgCard,
        borderRadius: borderRadius.xl,
        padding: spacing.xl,
        alignItems: 'center',
        marginBottom: spacing.xl,
        ...shadows.md,
        borderWidth: 1,
        borderColor: colors.primary + '33',
    },
    resultLabel: {
        ...typography.caption,
        color: colors.textMuted,
        textTransform: 'uppercase',
        letterSpacing: 1,
    },
    resultValue: {
        ...typography.h1,
        color: colors.primary,
        marginVertical: spacing.sm,
    },
    breakdown: {
        marginTop: spacing.md,
        width: '100%',
    },
    breakdownItem: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: spacing.xs,
    },
    dot: {
        width: 8,
        height: 8,
        borderRadius: 4,
        marginRight: spacing.sm,
    },
    breakdownText: {
        ...typography.bodySmall,
        color: colors.textSecondary,
    },
    inputsSection: {
        backgroundColor: colors.bgCard,
        borderRadius: borderRadius.lg,
        padding: spacing.lg,
        marginBottom: spacing.lg,
    },
    inputGroup: {
        marginBottom: spacing.md,
    },
    label: {
        ...typography.bodySmall,
        color: colors.textSecondary,
        marginBottom: spacing.xs,
    },
    inputWrapper: {
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: colors.bgDark,
        borderRadius: borderRadius.md,
        paddingHorizontal: spacing.md,
        borderWidth: 1,
        borderColor: colors.border,
    },
    input: {
        flex: 1,
        height: 48,
        color: colors.textPrimary,
        ...typography.body,
    },
    suffix: {
        ...typography.body,
        color: colors.textMuted,
        marginLeft: spacing.sm,
    },
    infoBox: {
        padding: spacing.md,
        backgroundColor: colors.primary + '11',
        borderRadius: borderRadius.md,
        borderLeftWidth: 4,
        borderLeftColor: colors.primary,
    },
    infoText: {
        ...typography.bodySmall,
        color: colors.textSecondary,
        fontStyle: 'italic',
    }
});
