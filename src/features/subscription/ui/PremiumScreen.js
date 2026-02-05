import { View, Text, StyleSheet, TouchableOpacity, ScrollView, SafeAreaView, ActivityIndicator, Alert } from 'react-native';
import { useState, useEffect } from 'react';
import { colors, spacing, borderRadius, typography, shadows, glass } from '../../../theme';
import * as billing from '../logic/billing';

export default function PremiumScreen({ navigation }) {
  const [loading, setLoading] = useState(false);
  const [product, setProduct] = useState(null);

  useEffect(() => {
    (async () => {
      setLoading(true);
      await billing.initialize();
      const p = await billing.getProduct();
      setProduct(p);
      setLoading(false);
    })();
    return () => billing.cleanup();
  }, []);

  const handlePurchase = async () => {
    setLoading(true);
    const result = await billing.purchaseFullUnlock();
    if (result.success) {
      Alert.alert('Success', 'You now have full access to all WealthIQ content!', [
        { text: 'Start Learning', onPress: () => navigation.replace('Home') },
      ]);
    } else if (result.cancelled) {
      // no op
    } else {
      Alert.alert('Purchase Failed', result.error || 'Something went wrong. Please try again.', [{ text: 'OK' }]);
    }
    setLoading(false);
  };

  const handleRestorePurchases = async () => {
    setLoading(true);
    const result = await billing.restorePurchases();
    if (result.success && result.restored) {
      Alert.alert('Restored', 'Your purchase has been restored.', [
        { text: 'Continue', onPress: () => navigation.replace('Home') },
      ]);
    } else {
      Alert.alert('No Purchases Found', "We couldn't find any previous purchases to restore.", [{ text: 'OK' }]);
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
          <Text style={styles.title}>Unlock Full Access</Text>
          <Text style={styles.subtitle}>One-time payment • Lifetime access</Text>
        </View>
        <View style={styles.features}>
          <FeatureRow text="All 12 courses" />
          <FeatureRow text="All modules & lessons" />
          <FeatureRow text="Premium tools" />
          <FeatureRow text="No ads" />
        </View>
        <View style={styles.pricingCard}>
          <Text style={styles.price}>{price}</Text>
          <Text style={styles.priceSubtext}>one-time payment</Text>
        </View>
        <TouchableOpacity
          style={[styles.purchaseButton, loading && styles.purchaseButtonDisabled]}
          onPress={handlePurchase}
          disabled={loading}
        >
          {loading ? <ActivityIndicator color={colors.bgDark} /> : <Text style={styles.purchaseButtonText}>Unlock Now</Text>}
        </TouchableOpacity>
        <TouchableOpacity style={styles.restoreButton} onPress={handleRestorePurchases} disabled={loading}>
          <Text style={styles.restoreButtonText}>Restore Purchases</Text>
        </TouchableOpacity>
        <Text style={styles.disclaimer}>Secure payment via Google Play</Text>
      </ScrollView>
    </SafeAreaView>
  );
}

function FeatureRow({ text }) {
  return (
    <View style={styles.feature}>
      <Text style={styles.featureIcon}>✓</Text>
      <Text style={styles.featureText}>{text}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: colors.bgDark },
  content: { padding: spacing.lg, alignItems: 'center' },
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
  closeIcon: { fontSize: 32, color: colors.textPrimary, lineHeight: 32 },
  header: { alignItems: 'center', marginBottom: spacing.xl },
  title: { ...typography.h1, color: colors.premium, marginBottom: spacing.xs },
  subtitle: { ...typography.body, color: colors.textSecondary },
  features: { alignSelf: 'stretch', marginBottom: spacing.xl },
  feature: {
    flexDirection: 'row',
    alignItems: 'center',
    ...glass.card,
    borderRadius: borderRadius.md,
    padding: spacing.md,
    marginBottom: spacing.sm,
  },
  featureIcon: { fontSize: 20, color: colors.success, marginRight: spacing.md },
  featureText: { ...typography.body, color: colors.textPrimary },
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
  price: { ...typography.h1, fontSize: 48, color: colors.premium, marginBottom: spacing.xs },
  priceSubtext: { ...typography.body, color: colors.textMuted },
  purchaseButton: {
    backgroundColor: colors.premium,
    borderRadius: borderRadius.md,
    padding: spacing.md,
    alignItems: 'center',
    alignSelf: 'stretch',
    marginBottom: spacing.md,
    ...shadows.md,
  },
  purchaseButtonDisabled: { opacity: 0.6 },
  purchaseButtonText: { ...typography.body, fontSize: 18, fontWeight: 'bold', color: colors.bgDark },
  restoreButton: { padding: spacing.sm, marginBottom: spacing.lg },
  restoreButtonText: { ...typography.bodySmall, color: colors.primary, textDecorationLine: 'underline' },
  disclaimer: { ...typography.caption, color: colors.textMuted, textAlign: 'center' },
});
