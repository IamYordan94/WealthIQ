import NetInfo from '@react-native-community/netinfo';
import AsyncStorage from '@react-native-async-storage/async-storage';

class SyncService {
    constructor() {
        this.isOnline = true;
        this.listeners = [];
    }

    async initialize() {
        // Get initial connection state
        const state = await NetInfo.fetch();
        this.isOnline = state.isConnected;

        // Listen for connection changes
        NetInfo.addEventListener(state => {
            const wasOffline = !this.isOnline;
            this.isOnline = state.isConnected;

            // Notify listeners
            this.listeners.forEach(listener => listener(this.isOnline));

            // Sync when coming back online
            if (wasOffline && this.isOnline) {
                this.syncPendingData();
            }
        });
    }

    onConnectionChange(callback) {
        this.listeners.push(callback);
        return () => {
            this.listeners = this.listeners.filter(l => l !== callback);
        };
    }

    async queueProgressUpdate(progressData) {
        try {
            if (this.isOnline) {
                // If online, save directly
                await AsyncStorage.setItem('userProgress', JSON.stringify(progressData));
            } else {
                // If offline, queue for later sync
                const pending = await AsyncStorage.getItem('pendingSync');
                const queue = pending ? JSON.parse(pending) : [];
                queue.push({
                    type: 'progress',
                    data: progressData,
                    timestamp: Date.now(),
                });
                await AsyncStorage.setItem('pendingSync', JSON.stringify(queue));
                await AsyncStorage.setItem('userProgress', JSON.stringify(progressData));
            }
            return { success: true };
        } catch (error) {
            console.error('Error queuing progress:', error);
            return { success: false, error: error.message };
        }
    }

    async syncPendingData() {
        try {
            const pending = await AsyncStorage.getItem('pendingSync');
            if (!pending) return { success: true, synced: 0 };

            const queue = JSON.parse(pending);

            // In a real app, you'd send this to a backend
            // For now, we just clear the queue since everything is local
            await AsyncStorage.removeItem('pendingSync');

            console.log(`Synced ${queue.length} pending items`);
            return { success: true, synced: queue.length };
        } catch (error) {
            console.error('Error syncing pending data:', error);
            return { success: false, error: error.message };
        }
    }

    getConnectionStatus() {
        return this.isOnline;
    }
}

export default new SyncService();
