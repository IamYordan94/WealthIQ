import { View, Text, StyleSheet, TouchableOpacity, ScrollView, SafeAreaView } from 'react-native';
import { colors, spacing, borderRadius, typography, shadows } from '../theme';

export default function PremiumScreen({ navigation }) {
    const handleSubscribe = () => {
        // TODO: Integrate RevenueCat
        alert('Subscription coming soon! RevenueCat integration needed.');
    };

    return (
        <SafeAreaView style={styles.container}>
            <ScrollView contentContainerStyle={styles.content}>
                <TouchableOpacity onPress={() => navigation.goBack()} style={styles.closeButton}>
                    <Text style={styles.closeIcon}>×</Text>
                </TouchableOpacity>

                <View style={styles.header}>
                    <Text style={styles.crownIcon}>👑</Text>
                    <Text style={styles.title}>Go Premium</Text>
                    <Text style={styles.subtitle}>Unlock your full potential</Text>
                </View>

                <View style={styles.features}>
                    <View style={styles.feature}>
                        <Text style={styles.featureIcon}>✓</Text>
                        <Text style={styles.featureText}>All wealth lessons unlocked</Text>
                    </View>
                    <View style={styles.feature}>
                        <Text style={styles.featureIcon}>✓</Text>
                        <Text style={styles.featureText}>Advanced investing strategies</Text>
                    </View>
                    <View style={styles.feature}>
                        <Text style={styles.featureIcon}>✓</Text>
                        <Text style={styles.featureText}>Track your financial progress</Text>
                    </View>
                    <View style={styles.feature}>
                        <Text style={styles.featureIcon}>✓</Text>
                        <Text style={styles.featureText}>New content every month</Text>
                    </View>
                </View>

                <View style={styles.pricingCard}>
                    <View style={styles.pricingHeader}>
                        <Text style={styles.pricingLabel}>Monthly</Text>
                    </View>
                    <Text style={styles.price}>€3.99</Text>
                    <Text style={styles.priceSubtext}>per month</Text>
                </View>

                <TouchableOpacity style={styles.subscribeButton} onPress={handleSubscribe}>
                    <Text style={styles.subscribeButtonText}>⚡ Subscribe Now</Text>
                </TouchableOpacity>

                <Text style={styles.disclaimer}>
                    Cancel anytime. Auto-renews monthly. Terms of Service apply.
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
        borderRadius: borderRadius.full,
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
        backgroundColor: colors.bgCard,
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
        backgroundColor: colors.bgCard,
        borderRadius: borderRadius.lg,
        borderWidth: 2,
        borderColor: colors.premium,
        padding: spacing.xl,
        alignItems: 'center',
        marginBottom: spacing.lg,
        alignSelf: 'stretch',
        ...shadows.glow,
    },
    pricingHeader: {
        backgroundColor: colors.premium,
        borderRadius: borderRadius.sm,
        paddingHorizontal: spacing.md,
        paddingVertical: spacing.xs,
        marginBottom: spacing.md,
    },
    pricingLabel: {
        ...typography.bodySmall,
        fontWeight: '700',
        color: colors.bgDark,
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
    },
    subscribeButton: {
        backgroundColor: colors.premium,
        borderRadius: borderRadius.md,
        padding: spacing.md,
        alignItems: 'center',
        alignSelf: 'stretch',
        marginBottom: spacing.lg,
        ...shadows.md,
    },
    subscribeButtonText: {
        ...typography.body,
        fontSize: 18,
        fontWeight: '700',
        color: colors.bgDark,
    },
    disclaimer: {
        ...typography.caption,
        color: colors.textMuted,
        textAlign: 'center',
    },
});
