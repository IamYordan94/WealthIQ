import AsyncStorage from '@react-native-async-storage/async-storage';

// Mock Billing Service (billing libraries not compatible yet)
class BillingService {
    constructor() {
        this.isInitialized = false;
    }

    async initialize() {
        this.isInitialized = true;
        console.log('✅ Mock billing initialized');
        return true;
    }

    async getProduct() {
        return {
            productId: 'wealthiq_full_unlock',
            localizedPrice: '€4.99',
            price: 4.99,
            currency: 'EUR'
        };
    }

    async purchaseFullUnlock() {
        await this.unlockPremium();
        return { success: true };
    }

    async unlockPremium() {
        await AsyncStorage.setItem('isPremium', 'true');
        console.log('✅ Premium unlocked (mock)');
        return true;
    }

    async isPremiumUser() {
        const isPremium = await AsyncStorage.getItem('isPremium');
        return isPremium === 'true';
    }

    async restorePurchases() {
        const isPremium = await this.isPremiumUser();
        return { success: true, restored: isPremium };
    }

    async finishTransaction() {
        console.log('✅ Transaction finished (mock)');
    }

    async cleanup() {
        this.isInitialized = false;
        console.log('✅ Mock billing closed');
    }
}

export default new BillingService();
