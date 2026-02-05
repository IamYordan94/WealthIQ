import { View, Text, StyleSheet, TouchableOpacity, ScrollView, SafeAreaView, Alert } from 'react-native';
import { useState, useEffect } from 'react';
import { colors, spacing, borderRadius, typography, glass } from '../../../theme';
import { updateProgress } from '../logic/progress';

export default function LessonScreen({ route, navigation }) {
  const { course, module, lesson } = route.params;
  const [step, setStep] = useState('reading');
  const [qIndex, setQIndex] = useState(0);
  const [selectedOption, setSelectedOption] = useState(null);
  const [score, setScore] = useState(0);
  const [showFeedback, setShowFeedback] = useState(false);
  const [correct, setCorrect] = useState(false);

  const sections = lesson.content?.sections || [];
  const quizQuestions = Array.isArray(lesson.content?.quiz) ? lesson.content.quiz : [];
  const currentQ = quizQuestions[qIndex];
  const isLastQ = qIndex === quizQuestions.length - 1;

  const handleComplete = async () => {
    if (quizQuestions.length > 0 && step === 'reading') {
      setStep('quiz');
      setQIndex(0);
      setSelectedOption(null);
      return;
    }
    if (step === 'quiz' && !showFeedback) return;

    try {
      await updateProgress(course.id, module.id, lesson.id);
      navigation.goBack();
    } catch (e) {
      Alert.alert('Error', 'Could not save progress.');
    }
  };

  const handleAnswer = () => {
    if (selectedOption === null || !currentQ) return;
    const right = selectedOption === currentQ.correctIndex;
    setCorrect(right);
    setShowFeedback(true);
    if (right) setScore(s => s + 1);
  };

  const handleNextQuestion = () => {
    setShowFeedback(false);
    setSelectedOption(null);
    if (isLastQ) {
      handleComplete();
    } else {
      setQIndex(i => i + 1);
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
          <Text style={styles.lessonTitle}>{lesson.title}</Text>
        </View>
      </View>

      <ScrollView style={styles.scroll} contentContainerStyle={styles.content}>
        {step === 'reading' && (
          <>
            {sections.map((section, i) => (
              <View key={i} style={styles.section}>
                {section.title && <Text style={styles.sectionTitle}>{section.title}</Text>}
                {section.type === 'text' && <Text style={styles.text}>{section.content}</Text>}
                {section.type === 'list' && section.items && section.items.map((item, j) => (
                  <View key={j} style={styles.listItem}>
                    <Text style={styles.bullet}>•</Text>
                    <Text style={styles.listItemText}>{item}</Text>
                  </View>
                ))}
              </View>
            ))}
          </>
        )}

        {step === 'quiz' && currentQ && (
          <>
            {quizQuestions.length > 1 && (
              <Text style={styles.quizProgress}>Question {qIndex + 1} of {quizQuestions.length}</Text>
            )}
            <Text style={styles.quizQuestion}>{currentQ.question}</Text>
            {!showFeedback && currentQ.options && currentQ.options.map((opt, i) => (
              <TouchableOpacity
                key={i}
                style={[styles.optionCard, selectedOption === i && styles.optionCardSelected]}
                onPress={() => setSelectedOption(i)}
              >
                <Text style={[styles.optionText, selectedOption === i && styles.optionTextSelected]}>{opt}</Text>
              </TouchableOpacity>
            ))}
            {showFeedback && (
              <View style={[styles.feedback, { borderColor: correct ? colors.success : colors.danger }]}>
                <Text style={[styles.feedbackTitle, { color: correct ? colors.success : colors.danger }]}>
                  {correct ? 'Correct!' : 'Not quite'}
                </Text>
                <Text style={styles.feedbackText}>{currentQ.explanation}</Text>
              </View>
            )}
          </>
        )}
      </ScrollView>

      <View style={styles.footer}>
        {step === 'reading' && (
          <TouchableOpacity style={styles.btn} onPress={handleComplete}>
            <Text style={styles.btnText}>{quizQuestions.length ? 'Take Quiz' : 'Complete Lesson'}</Text>
          </TouchableOpacity>
        )}
        {step === 'quiz' && !showFeedback && (
          <TouchableOpacity
            style={[styles.btn, selectedOption === null && styles.btnDisabled]}
            onPress={handleAnswer}
            disabled={selectedOption === null}
          >
            <Text style={styles.btnText}>Check Answer</Text>
          </TouchableOpacity>
        )}
        {step === 'quiz' && showFeedback && (
          <TouchableOpacity style={styles.btn} onPress={handleNextQuestion}>
            <Text style={styles.btnText}>{isLastQ ? `Finish (${score}/${quizQuestions.length})` : 'Next'}</Text>
          </TouchableOpacity>
        )}
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: colors.bgDark },
  header: { flexDirection: 'row', alignItems: 'center', padding: spacing.lg, backgroundColor: colors.bgCard },
  backButton: { marginRight: spacing.md },
  backIcon: { fontSize: 24, color: colors.textPrimary },
  headerInfo: { flex: 1 },
  moduleTitle: { ...typography.caption, color: colors.primary },
  lessonTitle: { ...typography.h3, color: colors.textPrimary },
  scroll: { flex: 1 },
  content: { padding: spacing.lg },
  section: { marginBottom: spacing.xl },
  sectionTitle: { ...typography.h3, color: colors.textPrimary, marginBottom: spacing.sm },
  text: { ...typography.body, color: colors.textSecondary, lineHeight: 24 },
  listItem: { flexDirection: 'row', marginBottom: spacing.sm },
  bullet: { ...typography.body, color: colors.primary, marginRight: spacing.sm },
  listItemText: { ...typography.body, color: colors.textSecondary, flex: 1 },
  quizProgress: { ...typography.bodySmall, color: colors.textMuted, marginBottom: spacing.md },
  quizQuestion: { ...typography.h3, color: colors.textPrimary, marginBottom: spacing.lg },
  optionCard: { ...glass.card, padding: spacing.lg, borderRadius: borderRadius.md, marginBottom: spacing.sm },
  optionCardSelected: { borderColor: colors.primary },
  optionText: { ...typography.body, color: colors.textPrimary },
  optionTextSelected: { color: colors.primary, fontWeight: 'bold' },
  feedback: { ...glass.card, padding: spacing.lg, borderRadius: borderRadius.md, borderWidth: 2 },
  feedbackTitle: { ...typography.h3, marginBottom: spacing.sm },
  feedbackText: { ...typography.body, color: colors.textSecondary },
  footer: { padding: spacing.lg, backgroundColor: colors.bgCard },
  btn: { backgroundColor: colors.primary, borderRadius: borderRadius.md, padding: spacing.md, alignItems: 'center' },
  btnDisabled: { opacity: 0.5 },
  btnText: { ...typography.body, fontWeight: 'bold', color: colors.textPrimary },
});
