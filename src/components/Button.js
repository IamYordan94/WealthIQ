import React from 'react';
import { TouchableOpacity, Text, StyleSheet, ActivityIndicator } from 'react-native';
import { colors, spacing, borderRadius, typography, shadows } from '../theme';

export default function Button({
    title,
    onPress,
    variant = 'primary',
    size = 'medium',
    disabled = false,
    loading = false,
    style,
    textStyle,
    ...props
}) {
    const getButtonStyle = () => {
        const baseStyle = [styles.button, styles[size]];
        
        if (disabled || loading) {
            baseStyle.push(styles.disabled);
        }
        
        switch (variant) {
            case 'secondary':
                baseStyle.push(styles.secondary);
                break;
            case 'outline':
                baseStyle.push(styles.outline);
                break;
            case 'ghost':
                baseStyle.push(styles.ghost);
                break;
            default:
                baseStyle.push(styles.primary);
        }
        
        return baseStyle;
    };

    const getTextStyle = () => {
        const baseStyle = [styles.text, styles[`${size}Text`]];
        
        switch (variant) {
            case 'outline':
            case 'ghost':
                baseStyle.push(styles.outlineText);
                break;
            default:
                baseStyle.push(styles.primaryText);
        }
        
        return baseStyle;
    };

    return (
        <TouchableOpacity
            style={[...getButtonStyle(), style]}
            onPress={onPress}
            disabled={disabled || loading}
            activeOpacity={0.7}
            {...props}
        >
            {loading ? (
                <ActivityIndicator 
                    color={variant === 'outline' || variant === 'ghost' ? colors.primary : colors.textPrimary} 
                    size="small" 
                />
            ) : (
                <Text style={[...getTextStyle(), textStyle]}>{title}</Text>
            )}
        </TouchableOpacity>
    );
}

const styles = StyleSheet.create({
    button: {
        borderRadius: borderRadius.md,
        alignItems: 'center',
        justifyContent: 'center',
        ...shadows.sm,
    },
    primary: {
        backgroundColor: colors.primary,
    },
    secondary: {
        backgroundColor: colors.secondary,
    },
    outline: {
        backgroundColor: 'transparent',
        borderWidth: 2,
        borderColor: colors.primary,
    },
    ghost: {
        backgroundColor: 'transparent',
    },
    disabled: {
        opacity: 0.5,
    },
    small: {
        paddingVertical: spacing.sm,
        paddingHorizontal: spacing.md,
    },
    medium: {
        paddingVertical: spacing.md,
        paddingHorizontal: spacing.lg,
    },
    large: {
        paddingVertical: spacing.lg,
        paddingHorizontal: spacing.xl,
    },
    text: {
        ...typography.body,
        fontWeight: 'bold',
    },
    primaryText: {
        color: colors.textPrimary,
    },
    outlineText: {
        color: colors.primary,
    },
    smallText: {
        fontSize: 14,
    },
    mediumText: {
        fontSize: 16,
    },
    largeText: {
        fontSize: 18,
    },
});
