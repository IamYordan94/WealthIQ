import { View, Text, StyleSheet, TouchableOpacity, ScrollView, SafeAreaView } from 'react-native';
import { colors, spacing, borderRadius, typography, glass } from '../../../theme';
import { getCategories, getTips, getGlossary, getFaqs } from '../data';

export default function InfoScreen({ navigation }) {
  const categories = getCategories();
  const tips = getTips();
  const glossary = getGlossary();
  const faqs = getFaqs();

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.goBack()} style={styles.backButton}>
          <Text style={styles.backIcon}>←</Text>
        </TouchableOpacity>
        <Text style={styles.title}>Info</Text>
      </View>
      <ScrollView style={styles.scroll} contentContainerStyle={styles.content}>
        <Text style={styles.sectionTitle}>Tips</Text>
        {tips.map(t => (
          <View key={t.id} style={styles.card}>
            <Text style={styles.cardTitle}>{t.title}</Text>
            <Text style={styles.cardText}>{t.content}</Text>
          </View>
        ))}
        <Text style={styles.sectionTitle}>Glossary</Text>
        {glossary.map(g => (
          <View key={g.id} style={styles.card}>
            <Text style={styles.term}>{g.term}</Text>
            <Text style={styles.definition}>{g.definition}</Text>
          </View>
        ))}
        <Text style={styles.sectionTitle}>FAQs</Text>
        {faqs.map(f => (
          <View key={f.id} style={styles.card}>
            <Text style={styles.cardTitle}>{f.question}</Text>
            <Text style={styles.cardText}>{f.answer}</Text>
          </View>
        ))}
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: colors.bgDark },
  header: { flexDirection: 'row', alignItems: 'center', padding: spacing.lg, backgroundColor: colors.bgCard },
  backButton: { marginRight: spacing.md, width: 40, height: 40, justifyContent: 'center', alignItems: 'center' },
  backIcon: { fontSize: 24, color: colors.textPrimary },
  title: { ...typography.h2, color: colors.textPrimary },
  scroll: { flex: 1 },
  content: { padding: spacing.lg },
  sectionTitle: { ...typography.h3, color: colors.textPrimary, marginTop: spacing.lg, marginBottom: spacing.sm },
  card: { ...glass.card, borderRadius: borderRadius.md, padding: spacing.md, marginBottom: spacing.sm },
  cardTitle: { ...typography.label, color: colors.textPrimary },
  cardText: { ...typography.bodySmall, color: colors.textSecondary, marginTop: spacing.xs },
  term: { ...typography.label, color: colors.primary },
  definition: { ...typography.bodySmall, color: colors.textSecondary, marginTop: spacing.xs },
});
