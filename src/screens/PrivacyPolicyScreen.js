import { View, Text, StyleSheet, TouchableOpacity, ScrollView, SafeAreaView } from 'react-native';
import { colors, spacing, borderRadius, typography, shadows, glass } from '../theme';

export default function PrivacyPolicyScreen({ navigation }) {
    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.header}>
                <TouchableOpacity onPress={() => navigation.goBack()} style={styles.backButton}>
                    <Text style={styles.backIcon}>←</Text>
                </TouchableOpacity>
                <Text style={styles.title}>Privacy Policy</Text>
            </View>

            <ScrollView style={styles.scrollView} contentContainerStyle={styles.scrollContent}>
                <Text style={styles.lastUpdated}>Last Updated: January 19, 2026</Text>

                <Text style={styles.sectionTitle}>Introduction</Text>
                <Text style={styles.paragraph}>
                    WealthIQ ("we", "our", or "us") is committed to protecting your privacy. This Privacy Policy explains how we collect, use, and safeguard your information when you use our mobile application.
                </Text>

                <Text style={styles.sectionTitle}>Information We Collect</Text>
                <Text style={styles.paragraph}>
                    <Text style={styles.bold}>Information You Provide:</Text>{'\n'}
                    • Onboarding preferences (experience level, financial situation, goals){'\n'}
                    • Lesson completion data and quiz responses{'\n'}
                    • Badge achievements and progress tracking{'\n'}
                    • Calculator inputs (stored locally only)
                </Text>

                <Text style={styles.paragraph}>
                    <Text style={styles.bold}>Automatically Collected Information:</Text>{'\n'}
                    • Device information (model, OS version){'\n'}
                    • App usage statistics (lessons viewed, time spent){'\n'}
                    • Crash reports and error logs
                </Text>

                <Text style={styles.sectionTitle}>How We Use Your Information</Text>
                <Text style={styles.paragraph}>
                    We use your information to:{'\n'}
                    • Provide personalized financial education content{'\n'}
                    • Track your learning progress and achievements{'\n'}
                    • Improve app performance and user experience{'\n'}
                    • Process premium subscription payments{'\n'}
                    • Send educational notifications (if enabled)
                </Text>

                <Text style={styles.sectionTitle}>Data Storage</Text>
                <Text style={styles.paragraph}>
                    Your progress data is stored locally on your device using AsyncStorage. We do not currently sync data to cloud servers. If you uninstall the app or clear app data, your progress will be lost.
                </Text>

                <Text style={styles.sectionTitle}>Third-Party Services</Text>
                <Text style={styles.paragraph}>
                    We use the following third-party services:{'\n'}
                    • Google Play Billing (for premium subscriptions){'\n'}
                    • Expo Services (for app infrastructure){'\n'}
                    {'\n'}
                    These services have their own privacy policies governing their use of your information.
                </Text>

                <Text style={styles.sectionTitle}>Your Rights</Text>
                <Text style={styles.paragraph}>
                    You have the right to:{'\n'}
                    • Access your personal data{'\n'}
                    • Delete your data (by uninstalling the app){'\n'}
                    • Opt out of notifications{'\n'}
                    • Request data portability
                </Text>

                <Text style={styles.sectionTitle}>Children's Privacy</Text>
                <Text style={styles.paragraph}>
                    WealthIQ is intended for users aged 13 and older. We do not knowingly collect information from children under 13.
                </Text>

                <Text style={styles.sectionTitle}>Changes to This Policy</Text>
                <Text style={styles.paragraph}>
                    We may update this Privacy Policy from time to time. We will notify you of any changes by updating the "Last Updated" date.
                </Text>

                <Text style={styles.sectionTitle}>Contact Us</Text>
                <Text style={styles.paragraph}>
                    If you have questions about this Privacy Policy, please contact us at:{'\n'}
                    {'\n'}
                    Email: privacy@wealthiq.app{'\n'}
                    {'\n'}
                    By using WealthIQ, you agree to this Privacy Policy.
                </Text>

                <View style={styles.spacer} />
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
        ...shadows.sm,
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
        ...typography.h2,
        color: colors.textPrimary,
    },
    scrollView: {
        flex: 1,
    },
    scrollContent: {
        padding: spacing.lg,
    },
    lastUpdated: {
        ...typography.caption,
        color: colors.textMuted,
        marginBottom: spacing.xl,
        fontStyle: 'italic',
    },
    sectionTitle: {
        ...typography.h3,
        color: colors.textPrimary,
        marginTop: spacing.lg,
        marginBottom: spacing.sm,
    },
    paragraph: {
        ...typography.body,
        color: colors.textSecondary,
        lineHeight: 24,
        marginBottom: spacing.md,
    },
    bold: {
        fontWeight: 'bold',
        color: colors.textPrimary,
    },
    spacer: {
        height: spacing.xxl,
    },
});
