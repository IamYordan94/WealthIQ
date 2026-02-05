import { View, Text, StyleSheet, TouchableOpacity, ScrollView, SafeAreaView, Alert, Linking } from 'react-native';
import { useState } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { colors, spacing, borderRadius, typography, shadows, glass } from '../theme';
import { getProgress } from '../features/curriculum/logic/progress';

export default function SettingsScreen({ navigation }) {
    const APP_VERSION = '1.0.0';
    const [exporting, setExporting] = useState(false);

    const handleExportData = async () => {
        setExporting(true);
        try {
            const progress = await getProgress();
            const data = { progress, exportedAt: new Date().toISOString() };
            Alert.alert('Export', 'Your data has been prepared. Save it from app storage or share when implemented.');
            setExporting(false);
        } catch (e) {
            setExporting(false);
            Alert.alert('Error', 'Could not export data.');
        }
    };

    const handleDeleteData = () => {
        Alert.alert('Delete All Data', 'This will remove your progress and reset the app. Continue?', [
            { text: 'Cancel', style: 'cancel' },
            {
                text: 'Delete',
                style: 'destructive',
                onPress: async () => {
                    try {
                        await AsyncStorage.removeItem('userProgress');
                        await AsyncStorage.removeItem('userData');
                        Alert.alert('Done', 'Your data has been deleted.');
                    } catch (e) {
                        Alert.alert('Error', 'Could not delete data.');
                    }
                },
            },
        ]);
    };

    const handleEmailSupport = () => {
        Linking.openURL('mailto:support@wealthiq.app?subject=WealthIQ Support Request');
    };

    const handleRateApp = () => {
        // TODO: Replace with actual Google Play Store link
        Alert.alert(
            'Rate WealthIQ',
            'Thank you for your support! This will open the Google Play Store.',
            [
                { text: 'Cancel', style: 'cancel' },
                {
                    text: 'Rate Now', onPress: () => {
                        // Linking.openURL('market://details?id=com.wealthiq.app');
                        Alert.alert('Coming Soon', 'Play Store link will be added after launch.');
                    }
                }
            ]
        );
    };

    const SettingItem = ({ icon, title, subtitle, onPress, showArrow = true }) => (
        <TouchableOpacity style={styles.settingItem} onPress={onPress}>
            <View style={styles.settingLeft}>
                <Text style={styles.settingIcon}>{icon}</Text>
                <View style={styles.settingText}>
                    <Text style={styles.settingTitle}>{title}</Text>
                    {subtitle && <Text style={styles.settingSubtitle}>{subtitle}</Text>}
                </View>
            </View>
            {showArrow && <Text style={styles.arrow}>→</Text>}
        </TouchableOpacity>
    );

    const SettingSection = ({ title, children }) => (
        <View style={styles.section}>
            <Text style={styles.sectionTitle}>{title}</Text>
            {children}
        </View>
    );

    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.header}>
                <TouchableOpacity onPress={() => navigation.goBack()} style={styles.backButton}>
                    <Text style={styles.backIcon}>←</Text>
                </TouchableOpacity>
                <Text style={styles.title}>Settings</Text>
            </View>

            <ScrollView style={styles.scrollView} contentContainerStyle={styles.scrollContent}>
                <SettingSection title="Data & Privacy">
                    <SettingItem
                        icon="📥"
                        title="Export My Data"
                        subtitle="Download your progress and achievements"
                        onPress={handleExportData}
                        showArrow={!exporting}
                    />
                    {exporting && (
                        <View style={styles.exportingContainer}>
                            <Text style={styles.exportingText}>Preparing your data...</Text>
                        </View>
                    )}
                    <SettingItem
                        icon="🗑️"
                        title="Delete All Data"
                        subtitle="Permanently remove all your data"
                        onPress={handleDeleteData}
                    />
                </SettingSection>

                <SettingSection title="Legal">
                    <SettingItem
                        icon="📜"
                        title="Privacy Policy"
                        subtitle="How we handle your data"
                        onPress={() => navigation.navigate('PrivacyPolicy')}
                    />
                    <SettingItem
                        icon="📋"
                        title="Terms of Service"
                        subtitle="User agreement and subscription terms"
                        onPress={() => navigation.navigate('Terms')}
                    />
                </SettingSection>

                <SettingSection title="Support">
                    <SettingItem
                        icon="💬"
                        title="Contact Support"
                        subtitle="support@wealthiq.app"
                        onPress={handleEmailSupport}
                    />
                    <SettingItem
                        icon="⭐"
                        title="Rate WealthIQ"
                        subtitle="Help us improve"
                        onPress={handleRateApp}
                    />
                </SettingSection>

                <SettingSection title="About">
                    <View style={styles.aboutCard}>
                        <Text style={styles.appName}>💰 WealthIQ</Text>
                        <Text style={styles.appTagline}>Master Your Financial Future</Text>
                        <Text style={styles.appVersion}>Version {APP_VERSION}</Text>

                        <View style={styles.divider} />

                        <Text style={styles.aboutText}>
                            WealthIQ is your personal financial education companion. Learn budgeting, investing, and wealth-building strategies at your own pace.
                        </Text>

                        <Text style={styles.disclaimer}>
                            ⚠️ Educational content only. Not financial advice. Always consult qualified professionals for financial decisions.
                        </Text>
                    </View>
                </SettingSection>

                <View style={styles.footer}>
                    <Text style={styles.footerText}>Made with 💚 for your financial success</Text>
                    <Text style={styles.copyright}>© 2026 WealthIQ. All rights reserved.</Text>
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
    section: {
        marginBottom: spacing.xl,
    },
    sectionTitle: {
        ...typography.caption,
        color: colors.textMuted,
        textTransform: 'uppercase',
        letterSpacing: 1,
        marginBottom: spacing.sm,
        marginLeft: spacing.xs,
    },
    settingItem: {
        ...glass.card,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        padding: spacing.md,
        borderRadius: borderRadius.lg,
        marginBottom: spacing.sm,
    },
    settingLeft: {
        flexDirection: 'row',
        alignItems: 'center',
        flex: 1,
    },
    settingIcon: {
        fontSize: 24,
        marginRight: spacing.md,
    },
    settingText: {
        flex: 1,
    },
    settingTitle: {
        ...typography.body,
        color: colors.textPrimary,
        fontWeight: '600',
    },
    settingSubtitle: {
        ...typography.caption,
        color: colors.textMuted,
        marginTop: 2,
    },
    arrow: {
        fontSize: 20,
        color: colors.textMuted,
    },
    aboutCard: {
        ...glass.card,
        padding: spacing.lg,
        borderRadius: borderRadius.xl,
        alignItems: 'center',
    },
    appName: {
        ...typography.h1,
        color: colors.textPrimary,
        marginBottom: spacing.xs,
    },
    appTagline: {
        ...typography.body,
        color: colors.primary,
        marginBottom: spacing.xs,
    },
    appVersion: {
        ...typography.caption,
        color: colors.textMuted,
    },
    divider: {
        width: '100%',
        height: 1,
        backgroundColor: colors.border,
        marginVertical: spacing.lg,
    },
    aboutText: {
        ...typography.body,
        color: colors.textSecondary,
        textAlign: 'center',
        lineHeight: 22,
        marginBottom: spacing.md,
    },
    disclaimer: {
        ...typography.caption,
        color: colors.textMuted,
        textAlign: 'center',
        lineHeight: 18,
        backgroundColor: colors.bgDark,
        padding: spacing.sm,
        borderRadius: borderRadius.md,
    },
    footer: {
        alignItems: 'center',
        marginTop: spacing.xl,
        marginBottom: spacing.xxl,
    },
    footerText: {
        ...typography.bodySmall,
        color: colors.textMuted,
        marginBottom: spacing.xs,
    },
    copyright: {
        ...typography.caption,
        color: colors.textMuted,
    },
    exportingContainer: {
        padding: spacing.sm,
        alignItems: 'center',
    },
    exportingText: {
        ...typography.caption,
        color: colors.textMuted,
        fontStyle: 'italic',
    },
});
