import { getProgress, getModuleProgressMap, getNextRecommendedLesson } from './progress';
import { getCourses } from '../data';

export async function getNextLesson() {
  return getNextRecommendedLesson();
}

export async function getRecommendedCourses(limit = 3) {
  const progress = await getProgress();
  const moduleProgress = await getModuleProgressMap();
  const courses = getCourses();

  const inProgress = courses.filter(course => {
    let total = 0;
    let completed = 0;
    for (const mod of course.modules) {
      const key = `${course.id}-${mod.id}`;
      const pct = moduleProgress[key] || 0;
      for (const _ of mod.lessons) {
        total++;
        completed += pct / 100;
      }
    }
    const effective = total ? (completed / total) * 100 : 0;
    return effective > 0 && effective < 100;
  });

  const sorted = inProgress.slice(0, limit);
  if (sorted.length < limit) {
    const started = new Set(sorted.map(c => c.id));
    const rest = courses.filter(c => !started.has(c.id)).slice(0, limit - sorted.length);
    return [...sorted, ...rest];
  }
  return sorted;
}

export async function getDailyGoal() {
  const progress = await getProgress();
  const today = new Date().toDateString();
  const lastCompleted = progress.lastCompletedDate;

  if (lastCompleted === today) {
    return { achieved: true, message: "You've completed your daily goal today.", nextGoal: 'Complete another lesson to build your streak!' };
  }
  if (progress.streak > 0) {
    return { achieved: false, message: `Complete 1 lesson today to maintain your ${progress.streak}-day streak!`, target: 1, current: 0 };
  }
  return { achieved: false, message: 'Complete 1 lesson today to start your learning streak!', target: 1, current: 0 };
}

export async function getPersonalizedRecommendations() {
  const nextLesson = await getNextLesson();
  const recommendedCourses = await getRecommendedCourses(2);
  const dailyGoal = await getDailyGoal();
  return { nextLesson, recommendedCourses, dailyGoal };
}
