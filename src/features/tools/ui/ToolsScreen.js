import { View, Text, StyleSheet, TouchableOpacity, ScrollView, SafeAreaView } from 'react-native';
import { colors, spacing, borderRadius, typography, glass } from '../../../theme';
import { getTools } from '../data';

export default function ToolsScreen({ navigation }) {
  const tools = getTools();
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.goBack()} style={styles.backButton}>
          <Text style={styles.backIcon}>←</Text>
        </TouchableOpacity>
        <Text style={styles.title}>Tools</Text>
      </View>
      <ScrollView contentContainerStyle={styles.content}>
        {tools.map(tool => (
          <TouchableOpacity key={tool.id} style={styles.card} onPress={() => navigation.navigate('Calculator')}>
            <Text style={styles.cardTitle}>{tool.name}</Text>
            <Text style={styles.cardDesc}>{tool.description}</Text>
          </TouchableOpacity>
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
  content: { padding: spacing.lg },
  card: { ...glass.card, borderRadius: borderRadius.lg, padding: spacing.lg, marginBottom: spacing.md },
  cardTitle: { ...typography.h3, color: colors.textPrimary },
  cardDesc: { ...typography.bodySmall, color: colors.textSecondary, marginTop: spacing.xs },
});
