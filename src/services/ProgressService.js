import AsyncStorage from '@react-native-async-storage/async-storage';
import { curriculum } from '../data/curriculum';

class ProgressService {
    async getUserProgress() {
        try {
            const progressData = await AsyncStorage.getItem('userProgress');
            if (!progressData) {
                return this.getDefaultProgress();
            }
            return JSON.parse(progressData);
        } catch (error) {
            console.error('Error loading user progress:', error);
            return this.getDefaultProgress();
        }
    }

    getDefaultProgress() {
        return {
            completedLessons: [],
            streak: 0,
            level: 1,
            progress: 0,
            lastCompletedDate: null,
            moduleProgress: {},
        };
    }

    async calculateModuleProgress(moduleId) {
        const progress = await this.getUserProgress();
        const module = curriculum.find(m => m.id === moduleId);
        
        if (!module) return 0;

        const completedInModule = module.lessons.filter(lesson => {
            const lessonId = `${moduleId}-${lesson.id}`;
            return progress.completedLessons.includes(lessonId);
        }).length;

        return Math.round((completedInModule / module.lessons.length) * 100);
    }

    async calculateOverallProgress() {
        const progress = await this.getUserProgress();
        const totalLessons = curriculum.reduce((sum, module) => sum + module.lessons.length, 0);
        
        if (totalLessons === 0) return 0;
        
        return Math.round((progress.completedLessons.length / totalLessons) * 100);
    }

    async getModuleProgress() {
        const moduleProgress = {};
        
        for (const module of curriculum) {
            moduleProgress[module.id] = await this.calculateModuleProgress(module.id);
        }
        
        return moduleProgress;
    }

    async getNextRecommendedLesson() {
        const progress = await this.getUserProgress();
        
        // Find first incomplete lesson
        for (const module of curriculum) {
            for (const lesson of module.lessons) {
                const lessonId = `${module.id}-${lesson.id}`;
                if (!progress.completedLessons.includes(lessonId)) {
                    // Check if lesson is released
                    if (lesson.releaseDate) {
                        const releaseDate = new Date(lesson.releaseDate);
                        if (new Date() < releaseDate) {
                            continue; // Lesson not yet released
                        }
                    }
                    return { module, lesson };
                }
            }
        }
        
        return null; // All lessons completed
    }

    async getCompletedLessonsCount() {
        const progress = await this.getUserProgress();
        return progress.completedLessons.length;
    }

    async getTotalLessonsCount() {
        return curriculum.reduce((sum, module) => sum + module.lessons.length, 0);
    }

    async updateProgress(lessonId) {
        try {
            const progress = await this.getUserProgress();
            
            if (!progress.completedLessons.includes(lessonId)) {
                progress.completedLessons.push(lessonId);
                
                // Update overall progress
                const totalLessons = await this.getTotalLessonsCount();
                progress.progress = Math.round((progress.completedLessons.length / totalLessons) * 100);
                
                // Update level (every 5 lessons)
                progress.level = Math.floor(progress.completedLessons.length / 5) + 1;
                
                await AsyncStorage.setItem('userProgress', JSON.stringify(progress));
            }
            
            return progress;
        } catch (error) {
            console.error('Error updating progress:', error);
            throw error;
        }
    }
}

export default new ProgressService();
