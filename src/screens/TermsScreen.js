import { View, Text, StyleSheet, TouchableOpacity, ScrollView, SafeAreaView } from 'react-native';
import { colors, spacing, borderRadius, typography, shadows, glass } from '../theme';

export default function TermsScreen({ navigation }) {
    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.header}>
                <TouchableOpacity onPress={() => navigation.goBack()} style={styles.backButton}>
                    <Text style={styles.backIcon}>←</Text>
                </TouchableOpacity>
                <Text style={styles.title}>Terms of Service</Text>
            </View>

            <ScrollView style={styles.scrollView} contentContainerStyle={styles.scrollContent}>
                <Text style={styles.lastUpdated}>Last Updated: January 19, 2026</Text>

                <Text style={styles.sectionTitle}>Agreement to Terms</Text>
                <Text style={styles.paragraph}>
                    By accessing or using WealthIQ, you agree to be bound by these Terms of Service. If you disagree with any part of these terms, you may not use our app.
                </Text>

                <Text style={styles.sectionTitle}>Description of Service</Text>
                <Text style={styles.paragraph}>
                    WealthIQ is a financial education mobile application that provides:{'\n'}
                    • Educational lessons on personal finance topics{'\n'}
                    • Interactive quizzes to test knowledge{'\n'}
                    • Financial calculators and tools{'\n'}
                    • Progress tracking and gamification features{'\n'}
                    • Premium content via subscription
                </Text>

                <Text style={styles.sectionTitle}>Financial Disclaimer</Text>
                <Text style={styles.paragraph}>
                    <Text style={styles.bold}>IMPORTANT:</Text> WealthIQ provides educational content only. We are NOT financial advisors, and the information provided should NOT be considered as financial, investment, tax, or legal advice.{'\n'}
                    {'\n'}
                    • Always consult with qualified professionals before making financial decisions{'\n'}
                    • Past performance does not guarantee future results{'\n'}
                    • Investing involves risk, including possible loss of principal{'\n'}
                    • We are not responsible for any financial decisions you make based on our content
                </Text>

                <Text style={styles.sectionTitle}>Premium Subscription</Text>
                <Text style={styles.paragraph}>
                    <Text style={styles.bold}>Pricing:</Text> €3.99/month (may vary by region){'\n'}
                    {'\n'}
                    <Text style={styles.bold}>What's Included:</Text>{'\n'}
                    • Access to all premium modules{'\n'}
                    • Personalized Action Plan{'\n'}
                    • Monthly Progress Report{'\n'}
                    • All future premium content{'\n'}
                    {'\n'}
                    <Text style={styles.bold}>Billing:</Text>{'\n'}
                    • Subscriptions are billed monthly through Google Play{'\n'}
                    • Payment charged to your Google Play account{'\n'}
                    • Auto-renewal unless cancelled 24 hours before period ends{'\n'}
                    • Manage subscription in Google Play Store settings
                </Text>

                <Text style={styles.sectionTitle}>Cancellation & Refunds</Text>
                <Text style={styles.paragraph}>
                    • You may cancel your subscription at any time{'\n'}
                    • Cancellation takes effect at the end of the current billing period{'\n'}
                    • No refunds for partial months{'\n'}
                    • Refund requests must be made through Google Play Store{'\n'}
                    • Google Play's refund policy applies
                </Text>

                <Text style={styles.sectionTitle}>User Responsibilities</Text>
                <Text style={styles.paragraph}>
                    You agree to:{'\n'}
                    • Provide accurate information during onboarding{'\n'}
                    • Use the app for personal, non-commercial purposes{'\n'}
                    • Not share your premium subscription with others{'\n'}
                    • Not attempt to reverse engineer or copy our content{'\n'}
                    • Not use the app for any illegal purposes
                </Text>

                <Text style={styles.sectionTitle}>Intellectual Property</Text>
                <Text style={styles.paragraph}>
                    All content, features, and functionality of WealthIQ are owned by us and protected by copyright, trademark, and other intellectual property laws. You may not copy, modify, or distribute our content without permission.
                </Text>

                <Text style={styles.sectionTitle}>Limitation of Liability</Text>
                <Text style={styles.paragraph}>
                    WealthIQ and its creators shall not be liable for:{'\n'}
                    • Any financial losses resulting from use of our content{'\n'}
                    • Errors or inaccuracies in educational materials{'\n'}
                    • Service interruptions or technical issues{'\n'}
                    • Loss of data due to device issues or app deletion
                </Text>

                <Text style={styles.sectionTitle}>Changes to Service</Text>
                <Text style={styles.paragraph}>
                    We reserve the right to:{'\n'}
                    • Modify or discontinue features at any time{'\n'}
                    • Update pricing with 30 days notice{'\n'}
                    • Change these Terms of Service (we'll notify you){'\n'}
                    • Terminate accounts that violate these terms
                </Text>

                <Text style={styles.sectionTitle}>Governing Law</Text>
                <Text style={styles.paragraph}>
                    These Terms shall be governed by the laws of the European Union and your local jurisdiction. Any disputes shall be resolved in accordance with applicable consumer protection laws.
                </Text>

                <Text style={styles.sectionTitle}>Contact Information</Text>
                <Text style={styles.paragraph}>
                    For questions about these Terms:{'\n'}
                    {'\n'}
                    Email: support@wealthiq.app{'\n'}
                    {'\n'}
                    By using WealthIQ, you acknowledge that you have read and agree to these Terms of Service.
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
