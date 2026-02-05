import { View, Text, StyleSheet, TouchableOpacity, ScrollView, SafeAreaView, Animated } from 'react-native';
import { useRef, useEffect } from 'react';
import { colors, spacing, borderRadius, typography, shadows, glass } from '../theme';

export default function ReportScreen({ navigation }) {
    const fadeAnim = useRef(new Animated.Value(0)).current;

    useEffect(() => {
        Animated.timing(fadeAnim, {
            toValue: 1,
            duration: 600,
            useNativeDriver: true,
        }).start();
    }, []);

    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.header}>
                <TouchableOpacity onPress={() => navigation.goBack()} style={styles.backButton}>
                    <Text style={styles.backIcon}>←</Text>
                </TouchableOpacity>
                <Text style={styles.title}>Monthly Report</Text>
            </View>

            <ScrollView contentContainerStyle={styles.scrollContent}>
                <Animated.View style={{ opacity: fadeAnim }}>
                    <View style={styles.monthSelector}>
                        <Text style={styles.monthText}>January 2026</Text>
                        <View style={styles.badge}><Text style={styles.badgeText}>LATEST</Text></View>
                    </View>

                    {/* Disclaimer */}
                    <View style={styles.disclaimerBanner}>
                        <Text style={styles.disclaimerIcon}>ℹ️</Text>
                        <Text style={styles.disclaimerText}>
                            This is a sample report for educational purposes. Track your real finances to see your actual WealthIQ score.
                        </Text>
                    </View>

                    {/* Score Summary */}
                    <View style={styles.scoreCard}>
                        <Text style={styles.scoreLabel}>WealthIQ Score</Text>
                        <Text style={styles.scoreValue}>742</Text>
                        <Text style={styles.scoreChange}>+12 points from last month</Text>

                        <View style={styles.chartPlaceholder}>
                            <View style={[styles.bar, { flex: 4, opacity: 0.3 }]} />
                            <View style={[styles.bar, { flex: 5, opacity: 0.5 }]} />
                            <View style={[styles.bar, { flex: 4, opacity: 0.4 }]} />
                            <View style={[styles.bar, { flex: 6, opacity: 0.6 }]} />
                            <View style={[styles.bar, { flex: 8, backgroundColor: colors.primary }]} />
                        </View>
                    </View>

                    <Text style={styles.sectionTitle}>Performance Breakdown</Text>

                    <View style={styles.breakdownCard}>
                        <View style={styles.breakdownItem}>
                            <View style={styles.itemInfo}>
                                <Text style={styles.itemTitle}>Savings Rate</Text>
                                <Text style={styles.itemSubtitle}>Target: 20%</Text>
                            </View>
                            <Text style={[styles.itemValue, { color: colors.success }]}>22%</Text>
                        </View>

                        <View style={styles.divider} />

                        <View style={styles.breakdownItem}>
                            <View style={styles.itemInfo}>
                                <Text style={styles.itemTitle}>Investment Growth</Text>
                                <Text style={styles.itemSubtitle}>S&P 500 Benchmarked</Text>
                            </View>
                            <Text style={styles.itemValue}>+1.4%</Text>
                        </View>

                        <View style={styles.divider} />

                        <View style={styles.breakdownItem}>
                            <View style={styles.itemInfo}>
                                <Text style={styles.itemTitle}>Debt Reduction</Text>
                                <Text style={styles.itemSubtitle}>Total balance change</Text>
                            </View>
                            <Text style={[styles.itemValue, { color: colors.danger }]}>-€450</Text>
                        </View>
                    </View>

                    <View style={styles.insightBox}>
                        <Text style={styles.insightTitle}>💡 Pro Insight</Text>
                        <Text style={styles.insightText}>
                            You saved 2% more than your target this month. Consider moving that extra €120 into your Index Fund to leverage compound growth.
                        </Text>
                    </View>

                    <TouchableOpacity style={styles.downloadButton}>
                        <Text style={styles.downloadButtonText}>Download PDF Report</Text>
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
    monthSelector: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginBottom: spacing.lg,
    },
    monthText: {
        ...typography.h2,
        color: colors.textPrimary,
    },
    badge: {
        backgroundColor: colors.bgCardHover,
        paddingHorizontal: spacing.sm,
        paddingVertical: 2,
        borderRadius: borderRadius.sm,
        overflow: 'hidden',
    },
    badgeText: {
        color: colors.primary,
        fontSize: 10,
        fontWeight: 'bold',
    },
    scoreCard: {
        ...glass.cardLight,
        borderRadius: borderRadius.xl,
        padding: spacing.xl,
        alignItems: 'center',
        marginBottom: spacing.xl,
    },
    scoreLabel: {
        ...typography.caption,
        color: colors.textMuted,
        textTransform: 'uppercase',
    },
    scoreValue: {
        fontSize: 64,
        fontWeight: 'bold',
        color: colors.primary,
        marginVertical: spacing.xs,
    },
    scoreChange: {
        ...typography.bodySmall,
        color: colors.success,
        marginBottom: spacing.xl,
    },
    chartPlaceholder: {
        flexDirection: 'row',
        alignItems: 'flex-end',
        justifyContent: 'space-between',
        alignSelf: 'stretch',
        height: 100,
        paddingHorizontal: spacing.md,
    },
    bar: {
        width: 40,
        backgroundColor: colors.textMuted,
        borderRadius: borderRadius.sm,
    },
    sectionTitle: {
        ...typography.h3,
        color: colors.textPrimary,
        marginBottom: spacing.md,
    },
    breakdownCard: {
        ...glass.card,
        borderRadius: borderRadius.lg,
        padding: spacing.lg,
        marginBottom: spacing.lg,
    },
    breakdownItem: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingVertical: spacing.md,
    },
    itemTitle: {
        ...typography.body,
        fontWeight: 'bold',
        color: colors.textPrimary,
    },
    itemSubtitle: {
        ...typography.caption,
        color: colors.textMuted,
    },
    itemValue: {
        ...typography.h3,
        color: colors.textPrimary,
    },
    divider: {
        height: 1,
        backgroundColor: colors.bgDark,
    },
    insightBox: {
        padding: spacing.lg,
        backgroundColor: colors.bgCard,
        borderRadius: borderRadius.lg,
        borderWidth: 1,
        borderColor: colors.border,
        marginBottom: spacing.xl,
    },
    insightTitle: {
        ...typography.body,
        fontWeight: 'bold',
        color: colors.textPrimary,
        marginBottom: spacing.xs,
    },
    insightText: {
        ...typography.bodySmall,
        color: colors.textSecondary,
        lineHeight: 20,
    },
    downloadButton: {
        backgroundColor: colors.bgDark,
        borderRadius: borderRadius.md,
        padding: spacing.md,
        alignItems: 'center',
        borderWidth: 1,
        borderColor: colors.border,
        marginBottom: spacing.xxl,
    },
    downloadButtonText: {
        ...typography.body,
        color: colors.textPrimary,
    },
});
