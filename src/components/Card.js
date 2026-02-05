import React from 'react';
import { View, StyleSheet, TouchableOpacity } from 'react-native';
import { colors, spacing, borderRadius, shadows, glass } from '../theme';

export default function Card({ 
    children, 
    onPress, 
    variant = 'default', 
    style,
    padding = spacing.lg,
    ...props 
}) {
    const Component = onPress ? TouchableOpacity : View;
    
    const getCardStyle = () => {
        switch (variant) {
            case 'light':
                return glass.cardLight;
            case 'premium':
                return glass.premium;
            case 'elevated':
                return { ...glass.card, ...shadows.md };
            default:
                return glass.card;
        }
    };

    return (
        <Component
            style={[
                styles.card,
                getCardStyle(),
                { padding },
                style,
            ]}
            onPress={onPress}
            activeOpacity={onPress ? 0.7 : 1}
            {...props}
        >
            {children}
        </Component>
    );
}

const styles = StyleSheet.create({
    card: {
        borderRadius: borderRadius.lg,
    },
});
