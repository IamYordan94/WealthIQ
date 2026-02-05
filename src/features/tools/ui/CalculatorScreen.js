import { View, Text, StyleSheet, TouchableOpacity, ScrollView, TextInput, SafeAreaView } from 'react-native';
import { useState, useEffect } from 'react';
import { colors, spacing, borderRadius, typography, glass } from '../../../theme';
import { calculateCompoundInterest } from '../logic/compoundInterest';

export default function CalculatorScreen({ navigation }) {
  const [principal, setPrincipal] = useState('1000');
  const [monthly, setMonthly] = useState('100');
  const [years, setYears] = useState('10');
  const [rate, setRate] = useState('7');
  const [result, setResult] = useState({ futureValue: 0, totalContributions: 0, totalInterest: 0 });

  useEffect(() => {
    const r = calculateCompoundInterest(principal, monthly, years, rate);
    setResult(r);
  }, [principal, monthly, years, rate]);

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.goBack()} style={styles.backButton}>
          <Text style={styles.backIcon}>←</Text>
        </TouchableOpacity>
        <Text style={styles.title}>Compound Interest</Text>
      </View>
      <ScrollView style={styles.scroll} contentContainerStyle={styles.content}>
        <View style={styles.resultCard}>
          <Text style={styles.resultLabel}>Future Value</Text>
          <Text style={styles.resultValue}>€{result.futureValue.toLocaleString(undefined, { maximumFractionDigits: 2 })}</Text>
          <Text style={styles.breakdownText}>Contributions: €{result.totalContributions.toLocaleString(undefined, { maximumFractionDigits: 2 })}</Text>
          <Text style={styles.breakdownText}>Interest: €{result.totalInterest.toLocaleString(undefined, { maximumFractionDigits: 2 })}</Text>
        </View>
        <View style={styles.inputsSection}>
          <Text style={styles.label}>Initial (€)</Text>
          <TextInput style={styles.input} value={principal} onChangeText={setPrincipal} keyboardType="numeric" placeholderTextColor={colors.textMuted} />
          <Text style={styles.label}>Monthly (€)</Text>
          <TextInput style={styles.input} value={monthly} onChangeText={setMonthly} keyboardType="numeric" placeholderTextColor={colors.textMuted} />
          <Text style={styles.label}>Rate %</Text>
          <TextInput style={styles.input} value={rate} onChangeText={setRate} keyboardType="numeric" placeholderTextColor={colors.textMuted} />
          <Text style={styles.label}>Years</Text>
          <TextInput style={styles.input} value={years} onChangeText={setYears} keyboardType="numeric" placeholderTextColor={colors.textMuted} />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: colors.bgDark },
  header: { flexDirection: 'row', alignItems: 'center', padding: spacing.lg, backgroundColor: colors.bgCard },
  backButton: { marginRight: spacing.md, width: 40, height: 40, justifyContent: 'center', alignItems: 'center' },
  backIcon: { fontSize: 24, color: colors.textPrimary },
  title: { ...typography.h3, color: colors.textPrimary },
  scroll: { flex: 1 },
  content: { padding: spacing.lg },
  resultCard: { ...glass.cardLight, borderRadius: borderRadius.lg, padding: spacing.xl, marginBottom: spacing.lg },
  resultLabel: { ...typography.caption, color: colors.textMuted },
  resultValue: { ...typography.h1, color: colors.primary, marginVertical: spacing.sm },
  breakdownText: { ...typography.bodySmall, color: colors.textSecondary },
  inputsSection: { ...glass.card, borderRadius: borderRadius.lg, padding: spacing.lg },
  label: { ...typography.bodySmall, color: colors.textSecondary, marginBottom: spacing.xs },
  input: { height: 48, color: colors.textPrimary, ...typography.body, backgroundColor: colors.bgDark, borderRadius: borderRadius.md, paddingHorizontal: spacing.md, marginBottom: spacing.md },
});
