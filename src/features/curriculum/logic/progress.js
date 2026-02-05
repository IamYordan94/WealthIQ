import { getItem, setItem, KEYS } from '../../../core/storage';
import { getCourses } from '../data';

function makeLessonId(courseId, moduleId, lessonId) {
  return `${courseId}-${moduleId}-${lessonId}`;
}

async function getUserProgress() {
  const raw = await getItem(KEYS.USER_PROGRESS);
  if (!raw) return getDefaultProgress();
  try {
    return JSON.parse(raw);
  } catch (e) {
    return getDefaultProgress();
  }
}

function getDefaultProgress() {
  return {
    completedLessons: [],
    streak: 0,
    level: 1,
    progress: 0,
    lastCompletedDate: null,
    moduleProgress: {},
  };
}

function countTotalLessons() {
  const courses = getCourses();
  let total = 0;
  for (const course of courses) {
    for (const mod of course.modules) {
      total += mod.lessons.length;
    }
  }
  return total;
}

export async function getProgress() {
  return getUserProgress();
}

export async function calculateModuleProgress(courseId, moduleId) {
  const progress = await getUserProgress();
  const courses = getCourses();
  const course = courses.find(c => c.id === courseId);
  if (!course) return 0;
  const mod = course.modules.find(m => m.id === moduleId);
  if (!mod) return 0;
  const completed = mod.lessons.filter(lesson => {
    const lid = makeLessonId(courseId, moduleId, lesson.id);
    return progress.completedLessons.includes(lid);
  }).length;
  return mod.lessons.length === 0 ? 0 : Math.round((completed / mod.lessons.length) * 100);
}

export async function calculateOverallProgress() {
  const progress = await getUserProgress();
  const total = countTotalLessons();
  if (total === 0) return 0;
  return Math.round((progress.completedLessons.length / total) * 100);
}

export async function getModuleProgressMap() {
  const courses = getCourses();
  const map = {};
  for (const course of courses) {
    for (const mod of course.modules) {
      const key = `${course.id}-${mod.id}`;
      map[key] = await calculateModuleProgress(course.id, mod.id);
    }
  }
  return map;
}

export async function getNextRecommendedLesson() {
  const progress = await getUserProgress();
  const courses = getCourses();
  for (const course of courses) {
    for (const mod of course.modules) {
      for (const lesson of mod.lessons) {
        const lid = makeLessonId(course.id, mod.id, lesson.id);
        if (!progress.completedLessons.includes(lid)) {
          return { course, module: mod, lesson };
        }
      }
    }
  }
  return null;
}

export async function getCompletedCount() {
  const progress = await getUserProgress();
  return progress.completedLessons.length;
}

export async function getTotalLessonsCount() {
  return countTotalLessons();
}

export async function updateProgress(courseId, moduleId, lessonId) {
  const progress = await getUserProgress();
  const lid = makeLessonId(courseId, moduleId, lessonId);
  if (progress.completedLessons.includes(lid)) return progress;
  progress.completedLessons.push(lid);
  const total = countTotalLessons();
  progress.progress = total === 0 ? 0 : Math.round((progress.completedLessons.length / total) * 100);
  progress.level = Math.floor(progress.completedLessons.length / 5) + 1;
  progress.lastCompletedDate = new Date().toDateString();
  await setItem(KEYS.USER_PROGRESS, JSON.stringify(progress));
  return progress;
}

export { makeLessonId };
