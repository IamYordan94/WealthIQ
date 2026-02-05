import { View, Text, StyleSheet, TouchableOpacity, ScrollView } from 'react-native';
import { useState } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { colors, spacing, borderRadius, typography, shadows } from '../theme';

export default function OnboardingScreen({ navigation }) {
    const [step, setStep] = useState(1);
    const [userData, setUserData] = useState({
        experience: null,
        situation: null,
        goals: [],
    });

    const handleExperienceSelect = (level) => {
        setUserData({ ...userData, experience: level });
        setStep(2);
    };

    const handleSituationSelect = (situation) => {
        setUserData({ ...userData, situation: situation });
        setStep(3);
    };

    const toggleGoal = (goal) => {
        const current = userData.goals;
        if (current.includes(goal)) {
            setUserData({ ...userData, goals: current.filter(a => a !== goal) });
        } else {
            setUserData({ ...userData, goals: [...current, goal] });
        }
    };

    const handleComplete = async () => {
        if (userData.goals.length === 0) {
            alert('Please select at least one goal');
            return;
        }

        try {
            await AsyncStorage.setItem('completedOnboarding', 'true');
            await AsyncStorage.setItem('userData', JSON.stringify(userData));
            navigation.replace('Home');
        } catch (error) {
            console.error('Error saving onboarding data:', error);
        }
    };

    return (
        <ScrollView style={styles.container} contentContainerStyle={styles.content}>
            <View style={styles.header}>
                <Text style={styles.brandTitle}>💰 WealthIQ</Text>
                <Text style={styles.brandSubtitle}>Master your money, build your future</Text>
            </View>

            {/* Step 1: Financial Experience Level */}
            {step === 1 && (
                <View style={styles.stepContainer}>
                    <Text style={styles.stepTitle}>What's your financial experience?</Text>
                    <Text style={styles.stepSubtitle}>This helps us personalize your journey</Text>

                    <View style={styles.optionsGrid}>
                        <TouchableOpacity
                            style={styles.optionCard}
                            onPress={() => handleExperienceSelect('beginner')}
                        >
                            <Text style={styles.optionIcon}>🌱</Text>
                            <Text style={styles.optionTitle}>Beginner</Text>
                            <Text style={styles.optionDescription}>Just starting to learn about money</Text>
                        </TouchableOpacity>

                        <TouchableOpacity
                            style={styles.optionCard}
                            onPress={() => handleExperienceSelect('intermediate')}
                        >
                            <Text style={styles.optionIcon}>📊</Text>
                            <Text style={styles.optionTitle}>Intermediate</Text>
                            <Text style={styles.optionDescription}>Have some savings, want to grow wealth</Text>
                        </TouchableOpacity>

                        <TouchableOpacity
                            style={styles.optionCard}
                            onPress={() => handleExperienceSelect('advanced')}
                        >
                            <Text style={styles.optionIcon}>💎</Text>
                            <Text style={styles.optionTitle}>Advanced</Text>
                            <Text style={styles.optionDescription}>Already investing, want to optimize</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            )}

            {/* Step 2: Current Situation */}
            {step === 2 && (
                <View style={styles.stepContainer}>
                    <TouchableOpacity onPress={() => setStep(1)} style={styles.backButton}>
                        <Text style={styles.backIcon}>←</Text>
                    </TouchableOpacity>
                    <Text style={styles.stepTitle}>What's your current situation?</Text>
                    <Text style={styles.stepSubtitle}>Helps us provide relevant advice</Text>

                    <View style={styles.optionsGrid}>
                        <TouchableOpacity
                            style={styles.optionCard}
                            onPress={() => handleSituationSelect('student')}
                        >
                            <Text style={styles.optionIcon}>🎓</Text>
                            <Text style={styles.optionTitle}>Student</Text>
                        </TouchableOpacity>

                        <TouchableOpacity
                            style={styles.optionCard}
                            onPress={() => handleSituationSelect('employed')}
                        >
                            <Text style={styles.optionIcon}>💼</Text>
                            <Text style={styles.optionTitle}>Employed</Text>
                        </TouchableOpacity>

                        <TouchableOpacity
                            style={styles.optionCard}
                            onPress={() => handleSituationSelect('business')}
                        >
                            <Text style={styles.optionIcon}>🚀</Text>
                            <Text style={styles.optionTitle}>Business Owner</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            )}

            {/* Step 3: Financial Goals */}
            {step === 3 && (
                <View style={styles.stepContainer}>
                    <TouchableOpacity onPress={() => setStep(2)} style={styles.backButton}>
                        <Text style={styles.backIcon}>←</Text>
                    </TouchableOpacity>
                    <Text style={styles.stepTitle}>What are your financial goals?</Text>
                    <Text style={styles.stepSubtitle}>Select all that apply</Text>

                    <View style={styles.optionsGrid}>
                        <TouchableOpacity
                            style={[
                                styles.optionCard,
                                userData.goals.includes('save') && styles.optionCardSelected
                            ]}
                            onPress={() => toggleGoal('save')}
                        >
                            <Text style={styles.optionIcon}>💰</Text>
                            <Text style={styles.optionTitle}>Save Money</Text>
                            {userData.goals.includes('save') && (
                                <View style={styles.checkbox}>
                                    <Text style={styles.checkmark}>✓</Text>
                                </View>
                            )}
                        </TouchableOpacity>

                        <TouchableOpacity
                            style={[
                                styles.optionCard,
                                userData.goals.includes('invest') && styles.optionCardSelected
                            ]}
                            onPress={() => toggleGoal('invest')}
                        >
                            <Text style={styles.optionIcon}>📈</Text>
                            <Text style={styles.optionTitle}>Start Investing</Text>
                            {userData.goals.includes('invest') && (
                                <View style={styles.checkbox}>
                                    <Text style={styles.checkmark}>✓</Text>
                                </View>
                            )}
                        </TouchableOpacity>

                        <TouchableOpacity
                            style={[
                                styles.optionCard,
                                userData.goals.includes('debt') && styles.optionCardSelected
                            ]}
                            onPress={() => toggleGoal('debt')}
                        >
                            <Text style={styles.optionIcon}>💳</Text>
                            <Text style={styles.optionTitle}>Pay Off Debt</Text>
                            {userData.goals.includes('debt') && (
                                <View style={styles.checkbox}>
                                    <Text style={styles.checkmark}>✓</Text>
                                </View>
                            )}
                        </TouchableOpacity>

                        <TouchableOpacity
                            style={[
                                styles.optionCard,
                                userData.goals.includes('wealth') && styles.optionCardSelected
                            ]}
                            onPress={() => toggleGoal('wealth')}
                        >
                            <Text style={styles.optionIcon}>💎</Text>
                            <Text style={styles.optionTitle}>Build Wealth</Text>
                            {userData.goals.includes('wealth') && (
                                <View style={styles.checkbox}>
                                    <Text style={styles.checkmark}>✓</Text>
                                </View>
                            )}
                        </TouchableOpacity>
                    </View>

                    <TouchableOpacity style={styles.continueButton} onPress={handleComplete}>
                        <Text style={styles.continueButtonText}>Start Learning</Text>
                    </TouchableOpacity>
                </View>
            )}

            {/* Progress Dots */}
            <View style={styles.progressDots}>
                <View style={[styles.dot, step >= 1 && styles.dotActive]} />
                <View style={[styles.dot, step >= 2 && styles.dotActive]} />
                <View style={[styles.dot, step >= 3 && styles.dotActive]} />
            </View>
        </ScrollView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: colors.bgDark,
    },
    content: {
        padding: spacing.lg,
        paddingTop: spacing.xxl,
    },
    header: {
        alignItems: 'center',
        marginBottom: spacing.xl,
    },
    brandTitle: {
        ...typography.h1,
        color: colors.primary,
        marginBottom: spacing.xs,
    },
    brandSubtitle: {
        ...typography.body,
        color: colors.textSecondary,
    },
    stepContainer: {
        marginBottom: spacing.xl,
    },
    stepTitle: {
        ...typography.h2,
        color: colors.textPrimary,
        textAlign: 'center',
        marginBottom: spacing.sm,
    },
    stepSubtitle: {
        ...typography.body,
        color: colors.textSecondary,
        textAlign: 'center',
        marginBottom: spacing.lg,
    },
    optionsGrid: {
        // gap not supported
    },
    optionCard: {
        marginBottom: spacing.md,
        backgroundColor: colors.bgCard,
        borderRadius: borderRadius.lg,
        borderWidth: 2,
        borderColor: colors.bgCard,
        padding: spacing.lg,
        alignItems: 'center',
        position: 'relative',
        ...shadows.sm,
    },
    optionCardSelected: {
        borderColor: colors.primary,
        backgroundColor: colors.bgCardHover,
    },
    optionIcon: {
        fontSize: 48,
        marginBottom: spacing.sm,
    },
    optionTitle: {
        ...typography.h3,
        color: colors.textPrimary,
        marginBottom: spacing.xs,
    },
    optionDescription: {
        ...typography.bodySmall,
        color: colors.textSecondary,
        textAlign: 'center',
    },
    checkbox: {
        position: 'absolute',
        top: spacing.sm,
        right: spacing.sm,
        width: 24,
        height: 24,
        borderRadius: 6,
        backgroundColor: colors.primary,
        justifyContent: 'center',
        alignItems: 'center',
    },
    checkmark: {
        color: colors.textPrimary,
        fontWeight: 'bold',
        fontSize: 16,
    },
    continueButton: {
        backgroundColor: colors.primary,
        borderRadius: borderRadius.md,
        padding: spacing.md,
        alignItems: 'center',
        marginTop: spacing.lg,
        ...shadows.md,
    },
    continueButtonText: {
        ...typography.body,
        fontWeight: 'bold',
        color: colors.textPrimary,
    },
    progressDots: {
        flexDirection: 'row',
        justifyContent: 'center',
        marginTop: spacing.xl,
    },
    dot: {
        marginHorizontal: 2,
        width: 12,
        height: 12,
        borderRadius: 10,
        backgroundColor: colors.bgCard,
    },
    dotActive: {
        backgroundColor: colors.primary,
    },
    backButton: {
        position: 'absolute',
        top: 0,
        left: 0,
        padding: spacing.md,
        zIndex: 10,
    },
    backIcon: {
        fontSize: 28,
        color: colors.primary,
    },
});
