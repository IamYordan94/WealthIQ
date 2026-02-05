import * as Notifications from 'expo-notifications';
import AsyncStorage from '@react-native-async-storage/async-storage';

// Configure notification handler
Notifications.setNotificationHandler({
    handleNotification: async () => ({
        shouldShowAlert: true,
        shouldPlaySound: true,
        shouldSetBadge: true,
    }),
});

class NotificationService {
    async requestPermissions() {
        const { status: existingStatus } = await Notifications.getPermissionsAsync();
        let finalStatus = existingStatus;

        if (existingStatus !== 'granted') {
            const { status } = await Notifications.requestPermissionsAsync();
            finalStatus = status;
        }

        return finalStatus === 'granted';
    }

    async scheduleDailyReminder(hour = 18, minute = 0) {
        try {
            // Cancel existing reminders
            await this.cancelDailyReminder();

            // Schedule new daily reminder
            const id = await Notifications.scheduleNotificationAsync({
                content: {
                    title: "Time to learn! 📚",
                    body: "Complete today's lesson to maintain your streak",
                    data: { type: 'daily_reminder' },
                },
                trigger: {
                    hour,
                    minute,
                    repeats: true,
                },
            });

            await AsyncStorage.setItem('dailyReminderId', id);
            return { success: true, id };
        } catch (error) {
            console.error('Error scheduling daily reminder:', error);
            return { success: false, error: error.message };
        }
    }

    async cancelDailyReminder() {
        try {
            const id = await AsyncStorage.getItem('dailyReminderId');
            if (id) {
                await Notifications.cancelScheduledNotificationAsync(id);
                await AsyncStorage.removeItem('dailyReminderId');
            }
            return { success: true };
        } catch (error) {
            console.error('Error canceling daily reminder:', error);
            return { success: false, error: error.message };
        }
    }

    async checkStreakAndNotify(lastCompletedDate, streak) {
        // Check if user is about to lose streak (hasn't completed lesson today)
        const today = new Date().toDateString();
        const yesterday = new Date(Date.now() - 86400000).toDateString();

        if (lastCompletedDate === yesterday && lastCompletedDate !== today) {
            // User completed yesterday but not today - send reminder
            await Notifications.scheduleNotificationAsync({
                content: {
                    title: `🔥 ${streak}-day streak at risk!`,
                    body: "Complete a lesson today to keep your streak alive",
                    data: { type: 'streak_reminder' },
                },
                trigger: {
                    seconds: 1,
                },
            });
        }
    }

    async sendBadgeNotification(badgeName) {
        await Notifications.scheduleNotificationAsync({
            content: {
                title: "🏆 Badge Earned!",
                body: `You've unlocked: ${badgeName}`,
                data: { type: 'badge_earned', badge: badgeName },
            },
            trigger: {
                seconds: 1,
            },
        });
    }

    async sendLevelUpNotification(level) {
        await Notifications.scheduleNotificationAsync({
            content: {
                title: "⭐ Level Up!",
                body: `You've reached Level ${level}!`,
                data: { type: 'level_up', level },
            },
            trigger: {
                seconds: 1,
            },
        });
    }
}

export default new NotificationService();
