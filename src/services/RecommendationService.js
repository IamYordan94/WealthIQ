import AsyncStorage from '@react-native-async-storage/async-storage';
import ProgressService from './ProgressService';
import { curriculum } from '../data/curriculum';

class RecommendationService {
    async getNextRecommendedLesson() {
        return await ProgressService.getNextRecommendedLesson();
    }

    async getRecommendedModules(limit = 3) {
        const progress = await ProgressService.getUserProgress();
        const moduleProgress = await ProgressService.getModuleProgress();
        
        // Get modules with some progress but not completed
        const inProgressModules = curriculum
            .filter(module => {
                const progressPercent = moduleProgress[module.id] || 0;
                return progressPercent > 0 && progressPercent < 100;
            })
            .sort((a, b) => (moduleProgress[b.id] || 0) - (moduleProgress[a.id] || 0))
            .slice(0, limit);

        // If not enough in-progress, add unstarted modules
        if (inProgressModules.length < limit) {
            const unstartedModules = curriculum
                .filter(module => (moduleProgress[module.id] || 0) === 0)
                .filter(module => !module.isPremium || progress.isPremium)
                .slice(0, limit - inProgressModules.length);
            
            return [...inProgressModules, ...unstartedModules];
        }

        return inProgressModules;
    }

    async getDailyGoal() {
        const progress = await ProgressService.getUserProgress();
        const today = new Date().toDateString();
        const lastCompleted = progress.lastCompletedDate;

        // If already completed today, goal is achieved
        if (lastCompleted === today) {
            return {
                achieved: true,
                message: "Great job! You've completed your daily goal today.",
                nextGoal: "Complete another lesson to build your streak!",
            };
        }

        // If streak is active, maintain it
        if (progress.streak > 0) {
            return {
                achieved: false,
                message: `Complete 1 lesson today to maintain your ${progress.streak}-day streak!`,
                target: 1,
                current: 0,
            };
        }

        // New goal: start a streak
        return {
            achieved: false,
            message: "Complete 1 lesson today to start your learning streak!",
            target: 1,
            current: 0,
        };
    }

    async getWeeklySummary() {
        const progress = await ProgressService.getUserProgress();
        const completedCount = progress.completedLessons.length;
        const totalLessons = await ProgressService.getTotalLessonsCount();
        const overallProgress = await ProgressService.calculateOverallProgress();

        return {
            completedLessons: completedCount,
            totalLessons,
            progressPercent: overallProgress,
            streak: progress.streak,
            level: progress.level,
            message: `You've completed ${completedCount} of ${totalLessons} lessons (${overallProgress}%). Keep going!`,
        };
    }

    async getPersonalizedRecommendations() {
        const nextLesson = await this.getNextRecommendedLesson();
        const recommendedModules = await this.getRecommendedModules(2);
        const dailyGoal = await this.getDailyGoal();

        return {
            nextLesson,
            recommendedModules,
            dailyGoal,
        };
    }
}

export default new RecommendationService();
