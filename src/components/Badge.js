import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { colors, spacing, borderRadius, typography } from '../theme';

export default function Badge({
    label,
    variant = 'default',
    size = 'medium',
    style,
    textStyle,
}) {
    const getBadgeStyle = () => {
        const baseStyle = [styles.badge, styles[size]];
        
        switch (variant) {
            case 'success':
                baseStyle.push(styles.success);
                break;
            case 'warning':
                baseStyle.push(styles.warning);
                break;
            case 'danger':
                baseStyle.push(styles.danger);
                break;
            case 'premium':
                baseStyle.push(styles.premium);
                break;
            case 'primary':
                baseStyle.push(styles.primary);
                break;
            default:
                baseStyle.push(styles.default);
        }
        
        return baseStyle;
    };

    const getTextStyle = () => {
        const baseStyle = [styles.text, styles[`${size}Text`]];
        
        if (variant === 'premium') {
            baseStyle.push(styles.premiumText);
        }
        
        return baseStyle;
    };

    return (
        <View style={[...getBadgeStyle(), style]}>
            <Text style={[...getTextStyle(), textStyle]}>{label}</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    badge: {
        borderRadius: borderRadius.full,
        alignItems: 'center',
        justifyContent: 'center',
    },
    default: {
        backgroundColor: colors.bgCard,
    },
    success: {
        backgroundColor: colors.success,
    },
    warning: {
        backgroundColor: colors.warning,
    },
    danger: {
        backgroundColor: colors.danger,
    },
    premium: {
        backgroundColor: colors.premium,
    },
    primary: {
        backgroundColor: colors.primary,
    },
    small: {
        paddingHorizontal: spacing.sm,
        paddingVertical: 2,
    },
    medium: {
        paddingHorizontal: spacing.md,
        paddingVertical: 4,
    },
    large: {
        paddingHorizontal: spacing.lg,
        paddingVertical: 6,
    },
    text: {
        ...typography.caption,
        fontWeight: 'bold',
        color: colors.textPrimary,
    },
    premiumText: {
        color: colors.bgDark,
    },
    smallText: {
        fontSize: 10,
    },
    mediumText: {
        fontSize: 12,
    },
    largeText: {
        fontSize: 14,
    },
});
