import { FREE_COURSE_SLUG, FREE_LESSONS_PER_MODULE } from './schema';
import placeholderCourses from './placeholder';

const courses = placeholderCourses;

export function getCourses() {
  return courses;
}

export function getCourse(courseId) {
  return courses.find(c => c.id === courseId) || null;
}

export function getLesson(courseId, moduleId, lessonId) {
  const course = getCourse(courseId);
  if (!course) return null;
  const mod = course.modules.find(m => m.id === moduleId);
  if (!mod) return null;
  return mod.lessons.find(l => l.id === lessonId) || null;
}

export function getModule(courseId, moduleId) {
  const course = getCourse(courseId);
  if (!course) return null;
  return course.modules.find(m => m.id === moduleId) || null;
}

export function isCourseFullyFree(courseId) {
  return courseId === FREE_COURSE_SLUG;
}

export function getFreeLessonCountPerModule(courseId) {
  return isCourseFullyFree(courseId) ? Infinity : FREE_LESSONS_PER_MODULE;
}

export function isLessonFree(courseId, moduleId, lessonId) {
  const course = getCourse(courseId);
  if (!course) return false;
  if (isCourseFullyFree(courseId)) return true;
  const mod = course.modules.find(m => m.id === moduleId);
  if (!mod) return false;
  const index = mod.lessons.findIndex(l => l.id === lessonId);
  return index >= 0 && index < FREE_LESSONS_PER_MODULE;
}

export { FREE_COURSE_SLUG, FREE_LESSONS_PER_MODULE };
export { default as placeholderCourses } from './placeholder';
