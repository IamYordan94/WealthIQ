import AsyncStorage from '@react-native-async-storage/async-storage';

export const KEYS = {
    ONBOARDING_COMPLETE: 'completedOnboarding',
    USER_PROGRESS: 'userProgress',
    IS_PREMIUM: 'isPremium',
};

export async function getItem(key) {
    try {
        return await AsyncStorage.getItem(key);
    } catch (e) {
        console.warn('Storage getItem failed:', key, e);
        return null;
    }
}

export async function setItem(key, value) {
    try {
        await AsyncStorage.setItem(key, value);
        return true;
    } catch (e) {
        console.warn('Storage setItem failed:', key, e);
        return false;
    }
}

export async function removeItem(key) {
    try {
        await AsyncStorage.removeItem(key);
        return true;
    } catch (e) {
        console.warn('Storage removeItem failed:', key, e);
        return false;
    }
}
