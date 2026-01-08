import { View, Text, StyleSheet, TouchableOpacity, ScrollView, SafeAreaView } from 'react-native';
import { useState } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { colors, spacing, borderRadius, typography, shadows } from '../theme';
import { curriculum } from '../data/curriculum';

export default function LessonScreen({ route, navigation }) {
    const { module, lesson } = route.params;
    const currentLesson = lesson || module.lessons[0];
    const [quizStep, setQuizStep] = useState('reading'); // 'reading', 'quiz', 'feedback'
    const [selectedOption, setSelectedOption] = useState(null);
    const [isCorrect, setIsCorrect] = useState(false);

    const handleComplete = async () => {
        if (currentLesson.quiz && quizStep !== 'feedback') {
            setQuizStep('quiz');
            return;
        }

        try {
            const progressData = await AsyncStorage.getItem('userProgress');
            let data = progressData ? JSON.parse(progressData) : {
                completedLessons: [],
                streak: 0,
                level: 1,
                progress: 0,
                lastCompletedDate: null
            };

            const lessonId = `${module.id}-${currentLesson.id}`;
            if (!data.completedLessons.includes(lessonId)) {
                data.completedLessons.push(lessonId);

                // Update streak
                const today = new Date().toDateString();
                if (data.lastCompletedDate !== today) {
                    data.streak += 1;
                    data.lastCompletedDate = today;
                }

                // Update level (every 5 lessons)
                data.level = Math.floor(data.completedLessons.length / 5) + 1;

                // Update overall progress percentage
                const totalLessons = 35; // Total expanded curriculum
                data.progress = Math.round((data.completedLessons.length / totalLessons) * 100);

                await AsyncStorage.setItem('userProgress', JSON.stringify(data));
            }

            // check if badge earned
            if (data.completedLessons.length === 1) {
                const badges = JSON.parse(await AsyncStorage.getItem('badges') || '[]');
                if (!badges.includes('First Step')) {
                    badges.push('First Step');
                    await AsyncStorage.setItem('badges', JSON.stringify(badges));
                    alert('🏆 Badge Earned: First Step!');
                }
            }

            navigation.goBack();
        } catch (error) {
            console.error('Error saving progress:', error);
        }
    };

    const handleQuizSubmit = () => {
        if (selectedOption === currentLesson.quiz.correctIndex) {
            setIsCorrect(true);
            setQuizStep('feedback');
        } else {
            setIsCorrect(false);
            setQuizStep('feedback');
        }
    };

    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.header}>
                <TouchableOpacity onPress={() => navigation.goBack()} style={styles.backButton}>
                    <Text style={styles.backIcon}>←</Text>
                </TouchableOpacity>
                <View style={styles.headerInfo}>
                    <Text style={styles.moduleTitle}>{module.title}</Text>
                    <Text style={styles.lessonTitle}>{currentLesson.title}</Text>
                </View>
            </View>

            <ScrollView style={styles.scrollView} contentContainerStyle={styles.scrollContent}>
                {quizStep === 'reading' ? (
                    currentLesson.content.sections.map((section, index) => (
                        <View key={index} style={styles.section}>
                            {section.title && <Text style={styles.sectionTitle}>{section.title}</Text>}
                            {section.type === 'text' && (
                                <Text style={styles.text}>{section.content}</Text>
                            )}
                            {section.type === 'list' && section.items.map((item, i) => (
                                <View key={i} style={styles.listItem}>
                                    <Text style={styles.bullet}>•</Text>
                                    <Text style={styles.listText}>{item}</Text>
                                </View>
                            ))}
                        </View>
                    ))
                ) : quizStep === 'quiz' ? (
                    <View style={styles.quizContainer}>
                        <Text style={styles.quizEmoji}>❓</Text>
                        <Text style={styles.quizQuestion}>{currentLesson.quiz.question}</Text>
                        {currentLesson.quiz.options.map((option, index) => (
                            <TouchableOpacity
                                key={index}
                                style={[
                                    styles.optionCard,
                                    selectedOption === index && styles.optionCardSelected
                                ]}
                                onPress={() => setSelectedOption(index)}
                            >
                                <Text style={[
                                    styles.optionText,
                                    selectedOption === index && styles.optionTextSelected
                                ]}>{option}</Text>
                            </TouchableOpacity>
                        ))}
                    </View>
                ) : (
                    <View style={styles.feedbackContainer}>
                        <Text style={styles.feedbackEmoji}>{isCorrect ? '✅' : '❌'}</Text>
                        <Text style={styles.feedbackTitle}>{isCorrect ? 'Correct!' : 'Not quite...'}</Text>
                        <Text style={styles.feedbackText}>{currentLesson.quiz.explanation}</Text>
                        {!isCorrect && (
                            <TouchableOpacity
                                style={styles.retryButton}
                                onPress={() => {
                                    setQuizStep('quiz');
                                    setSelectedOption(null);
                                }}
                            >
                                <Text style={styles.retryButtonText}>Try Again</Text>
                            </TouchableOpacity>
                        )}
                    </View>
                )}
            </ScrollView>

            <View style={styles.footer}>
                {quizStep === 'reading' ? (
                    <TouchableOpacity style={styles.completeButton} onPress={handleComplete}>
                        <Text style={styles.completeButtonText}>
                            {currentLesson.quiz ? 'Take Quiz' : 'Complete Lesson'}
                        </Text>
                    </TouchableOpacity>
                ) : quizStep === 'quiz' ? (
                    <TouchableOpacity
                        style={[styles.completeButton, selectedOption === null && styles.buttonDisabled]}
                        onPress={handleQuizSubmit}
                        disabled={selectedOption === null}
                    >
                        <Text style={styles.completeButtonText}>Check Answer</Text>
                    </TouchableOpacity>
                ) : (
                    isCorrect && (
                        <TouchableOpacity style={styles.completeButton} onPress={handleComplete}>
                            <Text style={styles.completeButtonText}>Finish Lesson</Text>
                        </TouchableOpacity>
                    )
                )}
            </View>
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
    },
    backIcon: {
        fontSize: 24,
        color: colors.textPrimary,
    },
    headerInfo: {
        flex: 1,
    },
    moduleTitle: {
        ...typography.caption,
        color: colors.primary,
        fontWeight: 'bold',
        textTransform: 'uppercase',
    },
    lessonTitle: {
        ...typography.h3,
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
        ...typography.h3,
        color: colors.textPrimary,
        marginBottom: spacing.md,
    },
    text: {
        ...typography.body,
        color: colors.textSecondary,
        lineHeight: 24,
    },
    listItem: {
        flexDirection: 'row',
        marginBottom: spacing.sm,
    },
    bullet: {
        ...typography.body,
        color: colors.primary,
        marginRight: spacing.sm,
    },
    listItemText: {
        ...typography.body,
        color: colors.textSecondary,
        flex: 1,
        lineHeight: 24,
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
        fontWeight: '700',
        color: colors.textPrimary,
    },
});
