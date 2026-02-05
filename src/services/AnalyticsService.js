import AsyncStorage from '@react-native-async-storage/async-storage';

// Analytics Service for tracking user events
// Can be extended to integrate with Firebase Analytics, Mixpanel, etc.

class AnalyticsService {
    constructor() {
        this.enabled = true;
        this.events = [];
    }

    // Track a custom event
    trackEvent(eventName, properties = {}) {
        if (!this.enabled) return;

        const event = {
            name: eventName,
            properties,
            timestamp: new Date().toISOString(),
        };

        this.events.push(event);
        
        // In production, send to analytics service
        // Example: Firebase Analytics, Mixpanel, etc.
        if (__DEV__) {
            console.log('Analytics Event:', event);
        }

        // Store locally for offline sync
        this.storeEvent(event);
    }

    // Track screen views
    trackScreenView(screenName, properties = {}) {
        this.trackEvent('screen_view', {
            screen_name: screenName,
            ...properties,
        });
    }

    // Track lesson completion
    trackLessonCompleted(moduleId, lessonId, quizScore = null) {
        this.trackEvent('lesson_completed', {
            module_id: moduleId,
            lesson_id: lessonId,
            quiz_score: quizScore,
        });
    }

    // Track quiz performance
    trackQuizCompleted(moduleId, lessonId, score, totalQuestions) {
        this.trackEvent('quiz_completed', {
            module_id: moduleId,
            lesson_id: lessonId,
            score,
            total_questions: totalQuestions,
            percentage: Math.round((score / totalQuestions) * 100),
        });
    }

    // Track purchase events
    trackPurchase(productId, price, currency = 'EUR') {
        this.trackEvent('purchase', {
            product_id: productId,
            price,
            currency,
        });
    }

    // Track badge earned
    trackBadgeEarned(badgeId, badgeName) {
        this.trackEvent('badge_earned', {
            badge_id: badgeId,
            badge_name: badgeName,
        });
    }

    // Track user engagement
    trackEngagement(action, details = {}) {
        this.trackEvent('user_engagement', {
            action,
            ...details,
        });
    }

    // Store event locally for offline sync
    async storeEvent(event) {
        try {
            const stored = await AsyncStorage.getItem('analytics_events');
            const events = stored ? JSON.parse(stored) : [];
            events.push(event);
            
            // Keep only last 100 events to prevent storage bloat
            if (events.length > 100) {
                events.shift();
            }
            
            await AsyncStorage.setItem('analytics_events', JSON.stringify(events));
        } catch (error) {
            console.error('Error storing analytics event:', error);
        }
    }

    // Sync stored events (call when online)
    async syncStoredEvents() {
        try {
            const stored = await AsyncStorage.getItem('analytics_events');
            if (!stored) return;

            const events = JSON.parse(stored);
            
            // Send events to analytics service
            // In production, implement actual sync logic here
            
            // Clear stored events after successful sync
            await AsyncStorage.removeItem('analytics_events');
        } catch (error) {
            console.error('Error syncing analytics events:', error);
        }
    }

    // Log errors (for crash reporting)
    logError(error, context = {}) {
        const errorEvent = {
            error: error.toString(),
            stack: error.stack,
            context,
            timestamp: new Date().toISOString(),
        };

        if (__DEV__) {
            console.error('Error Logged:', errorEvent);
        }

        // In production, send to crash reporting service (Sentry, Crashlytics, etc.)
        // Example: Sentry.captureException(error, { extra: context });
    }

    // Set user properties
    setUserProperty(key, value) {
        this.trackEvent('user_property_set', {
            property_key: key,
            property_value: value,
        });
    }

    // Identify user (for user tracking)
    identify(userId, traits = {}) {
        this.trackEvent('user_identified', {
            user_id: userId,
            ...traits,
        });
    }
}

// Export singleton instance
export default new AnalyticsService();
