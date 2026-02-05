import { View, Text, StyleSheet, TouchableOpacity, ScrollView, SafeAreaView, ActivityIndicator, Alert } from 'react-native';
import { useState, useEffect } from 'react';
import { colors, spacing, borderRadius, typography, shadows, glass } from '../theme';
import BillingService from '../services/BillingService';

export default function PremiumScreen({ navigation }) {
    const [loading, setLoading] = useState(false);
    const [product, setProduct] = useState(null);

    useEffect(() => {
        initializeBilling();
        return () => {
            BillingService.cleanup();
        };
    }, []);

    const initializeBilling = async () => {
        setLoading(true);
        const initialized = await BillingService.initialize();

        if (initialized) {
            const productDetails = await BillingService.getProduct();
            setProduct(productDetails);
        }

        setLoading(false);
    };

    const handlePurchase = async () => {
        setLoading(true);

        const result = await BillingService.purchaseFullUnlock();

        if (result.success) {
            Alert.alert(
                '🎉 Success!',
                'You now have lifetime access to all WealthIQ content!',
                [
                    {
                        text: 'Start Learning',
                        onPress: () => {
                            // Force refresh Home screen to show unlocked content
                            navigation.replace('Home');
                        }
                    }
                ]
            );
        } else if (result.cancelled) {
            // User cancelled, do nothing
        } else {
            Alert.alert(
                'Purchase Failed',
                result.error || 'Something went wrong. Please try again.',
                [{ text: 'OK' }]
            );
        }

        setLoading(false);
    };

    const handleRestorePurchases = async () => {
        setLoading(true);

        const result = await BillingService.restorePurchases();

        if (result.success) {
            Alert.alert(
                '✅ Restored!',
                'Your purchase has been restored. You now have access to all premium content!',
                [
                    {
                        text: 'Continue',
                        onPress: () => navigation.replace('Home')
                    }
                ]
            );
        } else {
            Alert.alert(
                'No Purchases Found',
                'We couldn\'t find any previous purchases to restore. If you believe this is an error, please contact support.',
                [{ text: 'OK' }]
            );
        }

        setLoading(false);
    };

    const price = product?.localizedPrice || '€4.99';

    return (
        <SafeAreaView style={styles.container}>
            <ScrollView contentContainerStyle={styles.content}>
                <TouchableOpacity onPress={() => navigation.goBack()} style={styles.closeButton}>
                    <Text style={styles.closeIcon}>×</Text>
                </TouchableOpacity>

                <View style={styles.header}>
                    <Text style={styles.crownIcon}>👑</Text>
                    <Text style={styles.title}>Unlock Full Course</Text>
                    <Text style={styles.subtitle}>One-time payment • Lifetime access</Text>
                </View>

                <View style={styles.features}>
                    <View style={styles.feature}>
                        <Text style={styles.featureIcon}>✓</Text>
                        <Text style={styles.featureText}>All 8 wealth-building modules</Text>
                    </View>
                    <View style={styles.feature}>
                        <Text style={styles.featureIcon}>✓</Text>
                        <Text style={styles.featureText}>Interactive quizzes & exercises</Text>
                    </View>
                    <View style={styles.feature}>
                        <Text style={styles.featureIcon}>✓</Text>
                        <Text style={styles.featureText}>Personalized action plans</Text>
                    </View>
                    <View style={styles.feature}>
                        <Text style={styles.featureIcon}>✓</Text>
                        <Text style={styles.featureText}>Monthly financial reports</Text>
                    </View>
                    <View style={styles.feature}>
                        <Text style={styles.featureIcon}>✓</Text>
                        <Text style={styles.featureText}>Full badge collection</Text>
                    </View>
                    <View style={styles.feature}>
                        <Text style={styles.featureIcon}>✓</Text>
                        <Text style={styles.featureText}>No ads, no subscriptions</Text>
                    </View>
                </View>

                <View style={styles.pricingCard}>
                    <Text style={styles.price}>{price}</Text>
                    <Text style={styles.priceSubtext}>one-time payment</Text>
                    <Text style={styles.lifetimeText}>✨ Lifetime Access ✨</Text>
                </View>

                <TouchableOpacity
                    style={[styles.purchaseButton, loading && styles.purchaseButtonDisabled]}
                    onPress={handlePurchase}
                    disabled={loading}
                >
                    {loading ? (
                        <ActivityIndicator color={colors.bgDark} />
                    ) : (
                        <Text style={styles.purchaseButtonText}>⚡ Unlock Now</Text>
                    )}
                </TouchableOpacity>

                <TouchableOpacity
                    style={styles.restoreButton}
                    onPress={handleRestorePurchases}
                    disabled={loading}
                >
                    <Text style={styles.restoreButtonText}>Restore Purchases</Text>
                </TouchableOpacity>

                <View style={styles.whyUpgradeSection}>
                    <Text style={styles.whyUpgradeTitle}>💡 Why Upgrade?</Text>
                    <Text style={styles.whyUpgradeText}>
                        Most financial courses cost €500-2000. WealthIQ gives you the same knowledge for a one-time payment of {price}. That's less than a single dinner out, but it could change your financial future forever.
                    </Text>
                    <Text style={styles.whyUpgradeText}>
                        ✨ Learn at your own pace{'\n'}
                        ✨ No recurring subscriptions{'\n'}
                        ✨ Lifetime updates included{'\n'}
                        ✨ 100% money-back guarantee
                    </Text>
                </View>

                <Text style={styles.disclaimer}>
                    Secure payment via Google Play • No recurring charges
                </Text>
            </ScrollView>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: colors.bgDark,
    },
    content: {
        padding: spacing.lg,
        alignItems: 'center',
    },
    closeButton: {
        alignSelf: 'flex-end',
        width: 40,
        height: 40,
        backgroundColor: colors.bgCard,
        borderRadius: 20,
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: spacing.lg,
    },
    closeIcon: {
        fontSize: 32,
        color: colors.textPrimary,
        lineHeight: 32,
    },
    header: {
        alignItems: 'center',
        marginBottom: spacing.xl,
    },
    crownIcon: {
        fontSize: 80,
        marginBottom: spacing.md,
    },
    title: {
        ...typography.h1,
        color: colors.premium,
        marginBottom: spacing.xs,
    },
    subtitle: {
        ...typography.body,
        color: colors.textSecondary,
    },
    features: {
        alignSelf: 'stretch',
        marginBottom: spacing.xl,
    },
    feature: {
        flexDirection: 'row',
        alignItems: 'center',
        ...glass.card,
        borderRadius: borderRadius.md,
        padding: spacing.md,
        marginBottom: spacing.sm,
    },
    featureIcon: {
        fontSize: 20,
        color: colors.success,
        marginRight: spacing.md,
    },
    featureText: {
        ...typography.body,
        color: colors.textPrimary,
    },
    pricingCard: {
        ...glass.cardLight,
        borderRadius: borderRadius.lg,
        borderWidth: 2,
        borderColor: colors.premium,
        padding: spacing.xl,
        alignItems: 'center',
        marginBottom: spacing.lg,
        alignSelf: 'stretch',
    },
    price: {
        ...typography.h1,
        fontSize: 48,
        color: colors.premium,
        marginBottom: spacing.xs,
    },
    priceSubtext: {
        ...typography.body,
        color: colors.textMuted,
        marginBottom: spacing.sm,
    },
    lifetimeText: {
        ...typography.bodySmall,
        fontWeight: 'bold',
        color: colors.success,
    },
    purchaseButton: {
        backgroundColor: colors.premium,
        borderRadius: borderRadius.md,
        padding: spacing.md,
        alignItems: 'center',
        alignSelf: 'stretch',
        marginBottom: spacing.md,
        ...shadows.md,
    },
    purchaseButtonDisabled: {
        opacity: 0.6,
    },
    purchaseButtonText: {
        ...typography.body,
        fontSize: 18,
        fontWeight: 'bold',
        color: colors.bgDark,
    },
    restoreButton: {
        padding: spacing.sm,
        marginBottom: spacing.lg,
    },
    restoreButtonText: {
        ...typography.bodySmall,
        color: colors.primary,
        textDecorationLine: 'underline',
    },
    disclaimer: {
        ...typography.caption,
        color: colors.textMuted,
        textAlign: 'center',
    },
    whyUpgradeSection: {
        ...glass.card,
        borderRadius: borderRadius.lg,
        padding: spacing.lg,
        marginBottom: spacing.lg,
        alignSelf: 'stretch',
    },
    whyUpgradeTitle: {
        ...typography.h3,
        color: colors.textPrimary,
        marginBottom: spacing.md,
    },
    whyUpgradeText: {
        ...typography.body,
        color: colors.textSecondary,
        lineHeight: 24,
        marginBottom: spacing.md,
    }
});
