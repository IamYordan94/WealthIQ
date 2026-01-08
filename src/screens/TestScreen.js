import { View, Text, StyleSheet } from 'react-native';

export default function TestScreen() {
    return (
        <View style={styles.container}>
            <Text style={styles.text}>WealthIQ Test</Text>
            <Text style={styles.subtext}>If you see this, the app is working!</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#0a0a0f',
        justifyContent: 'center',
        alignItems: 'center',
        padding: 20,
    },
    text: {
        fontSize: 32,
        fontWeight: '700',
        color: '#10b981',
        marginBottom: 10,
    },
    subtext: {
        fontSize: 16,
        color: '#a0a0b0',
    },
});
