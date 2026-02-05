import { View, Text, StyleSheet, TouchableOpacity, ScrollView, SafeAreaView, Animated, Alert } from 'react-native';
import { useState, useEffect, useRef } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import * as Haptics from 'expo-haptics';
import * as StoreReview from 'expo-store-review';
import { colors, spacing, borderRadius, typography, shadows, glass } from '../theme';
import { curriculum } from '../data/curriculum';
import AnalyticsService from '../services/AnalyticsService';

export default function LessonScreen({ route, navigation }) {
    const { module, lesson } = route.params;
    const currentLesson = lesson || module.lessons[0];
    const [quizStep, setQuizStep] = useState('reading'); // 'reading', 'quiz', 'feedback'
    const [selectedOption, setSelectedOption] = useState(null);
    const [selectedOptions, setSelectedOptions] = useState([]); // for multi-select
    const [orderedItems, setOrderedItems] = useState([]); // for ordering
    const [isCorrect, setIsCorrect] = useState(false);
    
    // Multi-question quiz support
    const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
    const [quizAnswers, setQuizAnswers] = useState([]);
    const [quizScore, setQuizScore] = useState(0);
    
    // Get quiz questions - support both single question (backward compatible) and multiple questions
    const getQuizQuestions = () => {
        if (!currentLesson.quiz) return [];
        if (currentLesson.quiz.questions && Array.isArray(currentLesson.quiz.questions)) {
            return currentLesson.quiz.questions;
        }
        // Backward compatibility: convert single question to array
        return [{
            question: currentLesson.quiz.question,
            options: currentLesson.quiz.options,
            correctIndex: currentLesson.quiz.correctIndex,
            explanation: currentLesson.quiz.explanation,
            type: currentLesson.quiz.type
        }];
    };
    
    const quizQuestions = getQuizQuestions();
    const currentQuestion = quizQuestions[currentQuestionIndex];
    const isLastQuestion = currentQuestionIndex === quizQuestions.length - 1;
    const totalQuestions = quizQuestions.length;

    // Staggered sections animation
    const sectionsAnim = useRef(new Animated.Value(0)).current;

    useEffect(() => {
        // Initialize ordering items if lesson has it
        if (currentQuestion?.type === 'ordering') {
            setOrderedItems([...currentQuestion.items].sort(() => 0.5 - Math.random()));
        }

        // Reset quiz state when question changes
        setSelectedOption(null);
        setSelectedOptions([]);
        setOrderedItems(currentQuestion?.type === 'ordering' ? [...currentQuestion.items].sort(() => 0.5 - Math.random()) : []);

        // Trigger entrance animation for sections
        Animated.timing(sectionsAnim, {
            toValue: 1,
            duration: 800,
            useNativeDriver: true,
        }).start();
    }, [currentLesson, currentQuestionIndex]);

    const handleComplete = async () => {
        // If quiz exists and we haven't taken it yet, start the quiz
        if (currentLesson.quiz && quizStep === 'reading') {
            setQuizStep('quiz');
            setCurrentQuestionIndex(0);
            setQuizAnswers([]);
            setQuizScore(0);
            return;
        }
        
        // If we're in quiz mode but haven't answered, don't complete
        if (quizStep === 'quiz') {
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

                // Update streak with proper logic
                const today = new Date().toDateString();
                const yesterday = new Date(Date.now() - 86400000).toDateString(); // 24 hours ago

                if (data.lastCompletedDate === today) {
                    // Already completed a lesson today, don't change streak
                } else if (data.lastCompletedDate === yesterday) {
                    // Completed yesterday, continue streak
                    data.streak += 1;
                    data.lastCompletedDate = today;
                } else if (!data.lastCompletedDate) {
                    // First lesson ever
                    data.streak = 1;
                    data.lastCompletedDate = today;
                } else {
                    // Missed a day, reset streak
                    data.streak = 1;
                    data.lastCompletedDate = today;
                }

                // Update level (every 5 lessons)
                data.level = Math.floor(data.completedLessons.length / 5) + 1;

                // Update overall progress percentage - calculate from actual curriculum
                const totalLessons = curriculum.reduce((sum, module) => sum + module.lessons.length, 0);
                data.progress = Math.round((data.completedLessons.length / totalLessons) * 100);

                await AsyncStorage.setItem('userProgress', JSON.stringify(data));
                
                // Track analytics
                AnalyticsService.trackLessonCompleted(module.id, currentLesson.id, quizScore);
                if (quizScore !== null && totalQuestions > 0) {
                    AnalyticsService.trackQuizCompleted(module.id, currentLesson.id, quizScore, totalQuestions);
                }
                
                console.log('Progress saved successfully:', data);
                console.log(`Completed ${data.completedLessons.length} of ${totalLessons} lessons`);
            } else {
                console.log('Lesson already completed, skipping save.');
            }

            // Check if badges earned
            const badges = JSON.parse(await AsyncStorage.getItem('badges') || '[]');
            let newBadge = null;

            if (data.completedLessons.length === 1 && !badges.includes('First Step')) {
                badges.push('First Step');
                newBadge = 'First Step';
                Haptics.notificationAsync(Haptics.NotificationFeedbackType.Success);
            } else if (data.completedLessons.length === 5 && !badges.includes('Getting Started')) {
                badges.push('Getting Started');
                newBadge = 'Getting Started';
                Haptics.notificationAsync(Haptics.NotificationFeedbackType.Success);
            } else if (data.completedLessons.length === 10 && !badges.includes('Committed Learner')) {
                badges.push('Committed Learner');
                newBadge = 'Committed Learner';
                Haptics.notificationAsync(Haptics.NotificationFeedbackType.Success);
            } else if (data.completedLessons.length === 20 && !badges.includes('Halfway There')) {
                badges.push('Halfway There');
                newBadge = 'Halfway There';
                Haptics.notificationAsync(Haptics.NotificationFeedbackType.Success);
            } else if (data.completedLessons.length === totalLessons && !badges.includes('Master of Wealth')) {
                badges.push('Master of Wealth');
                newBadge = 'Master of Wealth';
                Haptics.notificationAsync(Haptics.NotificationFeedbackType.Success);
            }

            // Check streak badges
            if (data.streak === 7 && !badges.includes('Week Warrior')) {
                badges.push('Week Warrior');
                newBadge = 'Week Warrior';
                Haptics.notificationAsync(Haptics.NotificationFeedbackType.Success);
            } else if (data.streak === 30 && !badges.includes('Month Master')) {
                badges.push('Month Master');
                newBadge = 'Month Master';
                Haptics.notificationAsync(Haptics.NotificationFeedbackType.Success);
            }

            if (newBadge) {
                await AsyncStorage.setItem('badges', JSON.stringify(badges));
                AnalyticsService.trackBadgeEarned(newBadge, newBadge);
                alert(`🏆 Badge Earned: ${newBadge}!`);
            }

            // App rating prompt after 5 lessons
            if (data.completedLessons.length === 5) {
                const hasPrompted = await AsyncStorage.getItem('hasPromptedReview');
                if (!hasPrompted && await StoreReview.hasAction()) {
                    await StoreReview.requestReview();
                    await AsyncStorage.setItem('hasPromptedReview', 'true');
                }
            }

            navigation.goBack();
        } catch (error) {
            console.error('Error saving progress:', error);
            Alert.alert(
                'Error Saving Progress',
                'We couldn\'t save your lesson completion. Please try completing the lesson again.',
                [{ text: 'OK', onPress: () => navigation.goBack() }]
            );
        }
    };

    const handleQuizSubmit = () => {
        if (!currentQuestion) return;
        
        let correct = false;

        if (!currentQuestion.type || currentQuestion.type === 'single-choice') {
            correct = selectedOption === currentQuestion.correctIndex;
        } else if (currentQuestion.type === 'multi-select') {
            const sortedSelected = [...selectedOptions].sort();
            const sortedCorrect = [...currentQuestion.correctIndices].sort();
            correct = JSON.stringify(sortedSelected) === JSON.stringify(sortedCorrect);
        } else if (currentQuestion.type === 'ordering') {
            correct = JSON.stringify(orderedItems) === JSON.stringify(currentQuestion.correctOrder);
        }

        // Haptic feedback
        if (correct) {
            Haptics.notificationAsync(Haptics.NotificationFeedbackType.Success);
            setQuizScore(prev => prev + 1);
        } else {
            Haptics.notificationAsync(Haptics.NotificationFeedbackType.Error);
        }

        // Save answer
        setQuizAnswers(prev => [...prev, { questionIndex: currentQuestionIndex, correct }]);
        setIsCorrect(correct);
        setQuizStep('feedback');
    };
    
    const handleNextQuestion = () => {
        if (isLastQuestion) {
            // All questions answered, complete lesson
            handleComplete();
        } else {
            // Move to next question
            setCurrentQuestionIndex(prev => prev + 1);
            setQuizStep('quiz');
            setIsCorrect(false);
        }
    };
    
    const getQuizProgress = () => {
        if (totalQuestions === 0) return 0;
        return ((currentQuestionIndex + 1) / totalQuestions) * 100;
    };

    const toggleMultiSelect = (index) => {
        if (selectedOptions.includes(index)) {
            setSelectedOptions(selectedOptions.filter(i => i !== index));
        } else {
            setSelectedOptions([...selectedOptions, index]);
        }
    };

    const moveOrderItem = (index, direction) => {
        const newItems = [...orderedItems];
        if (direction === 'up' && index > 0) {
            [newItems[index], newItems[index - 1]] = [newItems[index - 1], newItems[index]];
        } else if (direction === 'down' && index < newItems.length - 1) {
            [newItems[index], newItems[index + 1]] = [newItems[index + 1], newItems[index]];
        }
        setOrderedItems(newItems);
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
                        <Animated.View
                            key={index}
                            style={[
                                styles.section,
                                {
                                    opacity: sectionsAnim,
                                    transform: [{
                                        translateY: sectionsAnim.interpolate({
                                            inputRange: [0, 1],
                                            outputRange: [10 * (index + 1), 0]
                                        })
                                    }]
                                }
                            ]}
                        >
                            {section.title && <Text style={styles.sectionTitle}>{section.title}</Text>}
                            {section.type === 'text' && (
                                <Text style={styles.text}>{section.content}</Text>
                            )}
                            {section.type === 'list' && section.items.map((item, i) => (
                                <View key={i} style={styles.listItem}>
                                    <Text style={styles.bullet}>•</Text>
                                    <Text style={styles.listItemText}>{item}</Text>
                                </View>
                            ))}
                        </Animated.View>
                    ))
                ) : quizStep === 'quiz' ? (
                    <View style={styles.quizContainer}>
                        {totalQuestions > 1 && (
                            <View style={styles.quizProgressContainer}>
                                <Text style={styles.quizProgressText}>
                                    Question {currentQuestionIndex + 1} of {totalQuestions}
                                </Text>
                                <View style={styles.quizProgressBar}>
                                    <View style={[styles.quizProgressFill, { width: `${getQuizProgress()}%` }]} />
                                </View>
                            </View>
                        )}
                        <Text style={styles.quizEmoji}>❓</Text>
                        <Text style={styles.quizQuestion}>{currentQuestion?.question}</Text>

                        {/* Single Choice or Multi Select */}
                        {currentQuestion && (!currentQuestion.type || currentQuestion.type === 'single-choice' || currentQuestion.type === 'multi-select') && (
                            currentQuestion.options.map((option, index) => {
                                const isSelected = currentQuestion.type === 'multi-select'
                                    ? selectedOptions.includes(index)
                                    : selectedOption === index;

                                return (
                                    <TouchableOpacity
                                        key={index}
                                        style={[
                                            styles.optionCard,
                                            isSelected && styles.optionCardSelected
                                        ]}
                                        onPress={() => {
                                            if (currentQuestion.type === 'multi-select') {
                                                toggleMultiSelect(index);
                                            } else {
                                                setSelectedOption(index);
                                            }
                                        }}
                                    >
                                        <View style={styles.optionContent}>
                                            <Text style={[
                                                styles.optionText,
                                                isSelected && styles.optionTextSelected
                                            ]}>{option}</Text>
                                            {currentQuestion.type === 'multi-select' && (
                                                <View style={[styles.checkbox, isSelected && styles.checkboxActive]}>
                                                    {isSelected && <Text style={styles.checkIconSmall}>✓</Text>}
                                                </View>
                                            )}
                                        </View>
                                    </TouchableOpacity>
                                );
                            })
                        )}

                        {/* Ordering Quiz */}
                        {currentQuestion?.type === 'ordering' && (
                            <View style={styles.orderContainer}>
                                {orderedItems.map((item, index) => (
                                    <View key={index} style={styles.orderItem}>
                                        <Text style={styles.orderText}>{item}</Text>
                                        <View style={styles.orderControls}>
                                            <TouchableOpacity onPress={() => moveOrderItem(index, 'up')} disabled={index === 0}>
                                                <Text style={[styles.controlIcon, index === 0 && styles.disabledIcon]}>▲</Text>
                                            </TouchableOpacity>
                                            <TouchableOpacity onPress={() => moveOrderItem(index, 'down')} disabled={index === orderedItems.length - 1}>
                                                <Text style={[styles.controlIcon, index === orderedItems.length - 1 && styles.disabledIcon]}>▼</Text>
                                            </TouchableOpacity>
                                        </View>
                                    </View>
                                ))}
                            </View>
                        )}
                    </View>
                ) : (
                    <View style={[
                        styles.feedbackContainer,
                        { borderColor: isCorrect ? colors.success : colors.danger }
                    ]}>
                        <View style={[
                            styles.feedbackBadge,
                            { backgroundColor: isCorrect ? colors.success : colors.danger }
                        ]}>
                            <Text style={styles.feedbackEmoji}>{isCorrect ? '✓' : '!'}</Text>
                        </View>
                        <Text style={[
                            styles.feedbackTitle,
                            { color: isCorrect ? colors.success : colors.danger }
                        ]}>{isCorrect ? 'Brilliant!' : 'Not Quite Right'}</Text>
                        <Text style={styles.feedbackText}>{currentQuestion?.explanation}</Text>

                        {!isCorrect && (
                            <TouchableOpacity
                                activeOpacity={0.8}
                                style={styles.retryButton}
                                onPress={() => {
                                    setQuizStep('quiz');
                                    setSelectedOption(null);
                                    setSelectedOptions([]);
                                }}
                            >
                                <Text style={styles.retryButtonText}>Try Again</Text>
                            </TouchableOpacity>
                        )}
                        
                        {isCorrect && totalQuestions > 1 && (
                            <View style={styles.quizScoreContainer}>
                                <Text style={styles.quizScoreText}>
                                    Score: {quizScore} / {currentQuestionIndex + 1}
                                </Text>
                            </View>
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
                        style={[
                            styles.completeButton,
                            (currentLesson.quiz.type === 'ordering' ? false : (currentLesson.quiz.type === 'multi-select' ? selectedOptions.length === 0 : selectedOption === null)) && styles.buttonDisabled
                        ]}
                        onPress={handleQuizSubmit}
                        disabled={currentLesson.quiz.type === 'ordering' ? false : (currentLesson.quiz.type === 'multi-select' ? selectedOptions.length === 0 : selectedOption === null)}
                    >
                        <Text style={styles.completeButtonText}>Check Answer</Text>
                    </TouchableOpacity>
                ) : (
                    isCorrect && (
                        <TouchableOpacity style={styles.completeButton} onPress={handleNextQuestion}>
                            <Text style={styles.completeButtonText}>
                                {isLastQuestion ? `Finish Lesson (${quizScore}/${totalQuestions} correct)` : 'Next Question'}
                            </Text>
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
    footer: {
        padding: spacing.lg,
        backgroundColor: colors.bgCard,
        borderTopWidth: 1,
        borderTopColor: colors.border,
    },
    completeButton: {
        backgroundColor: colors.primary,
        borderRadius: borderRadius.md,
        padding: spacing.md,
        alignItems: 'center',
        ...shadows.md,
    },
    buttonDisabled: {
        opacity: 0.5,
        backgroundColor: colors.textMuted,
    },
    completeButtonText: {
        ...typography.body,
        fontWeight: 'bold',
        color: colors.textPrimary,
    },
    quizContainer: {
        alignItems: 'center',
        paddingVertical: spacing.xl,
    },
    quizEmoji: {
        fontSize: 48,
        marginBottom: spacing.md,
    },
    quizQuestion: {
        ...typography.h2,
        color: colors.textPrimary,
        textAlign: 'center',
        marginBottom: spacing.xl,
    },
    optionCard: {
        ...glass.card,
        alignSelf: 'stretch',
        padding: spacing.lg,
        borderRadius: borderRadius.lg,
        marginBottom: spacing.md,
    },
    optionCardSelected: {
        borderColor: colors.primary,
        backgroundColor: colors.bgCardHover,
    },
    optionText: {
        ...typography.body,
        color: colors.textPrimary,
        textAlign: 'center',
    },
    optionTextSelected: {
        color: colors.primary,
        fontWeight: 'bold',
    },
    feedbackContainer: {
        ...glass.card,
        borderRadius: borderRadius.xl,
        padding: spacing.xl,
        alignItems: 'center',
        borderWidth: 2,
    },
    feedbackBadge: {
        width: 64,
        height: 64,
        borderRadius: 32,
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: spacing.md,
    },
    feedbackEmoji: {
        fontSize: 32,
        color: '#fff',
        fontWeight: 'bold',
    },
    feedbackTitle: {
        ...typography.h2,
        marginBottom: spacing.sm,
    },
    feedbackText: {
        ...typography.body,
        color: colors.textSecondary,
        textAlign: 'center',
        lineHeight: 22,
        marginBottom: spacing.xl,
    },
    retryButton: {
        padding: spacing.md,
    },
    optionContent: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
    },
    checkbox: {
        width: 22,
        height: 22,
        borderRadius: 6,
        borderWidth: 2,
        borderColor: colors.textMuted,
        justifyContent: 'center',
        alignItems: 'center',
    },
    checkboxActive: {
        borderColor: colors.primary,
        backgroundColor: colors.primary,
    },
    checkIconSmall: {
        color: '#fff',
        fontSize: 12,
        fontWeight: 'bold',
    },
    orderContainer: {
        alignSelf: 'stretch',
    },
    orderItem: {
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: colors.bgCard,
        padding: spacing.md,
        borderRadius: borderRadius.md,
        marginBottom: spacing.sm,
        borderWidth: 1,
        borderColor: colors.border,
    },
    orderText: {
        ...typography.body,
        color: colors.textPrimary,
        flex: 1,
    },
    orderControls: {
        flexDirection: 'row',
    },
    controlIcon: {
        fontSize: 18,
        color: colors.primary,
        paddingHorizontal: spacing.sm,
        marginLeft: spacing.sm,
    },
    disabledIcon: {
        color: colors.textMuted,
    },
    quizProgressContainer: {
        width: '100%',
        marginBottom: spacing.lg,
    },
    quizProgressText: {
        ...typography.bodySmall,
        color: colors.textSecondary,
        marginBottom: spacing.sm,
        textAlign: 'center',
    },
    quizProgressBar: {
        height: 6,
        backgroundColor: colors.bgDark,
        borderRadius: borderRadius.full,
        overflow: 'hidden',
    },
    quizProgressFill: {
        height: '100%',
        backgroundColor: colors.primary,
        borderRadius: borderRadius.full,
    },
    quizScoreContainer: {
        marginTop: spacing.md,
        padding: spacing.md,
        backgroundColor: colors.bgDark,
        borderRadius: borderRadius.md,
    },
    quizScoreText: {
        ...typography.body,
        color: colors.textPrimary,
        textAlign: 'center',
        fontWeight: 'bold',
    },
});
