import React, { useEffect, useRef } from 'react';
import { View, StyleSheet, Animated } from 'react-native';
import { colors, borderRadius, spacing } from '../theme';

export default function LoadingSkeleton({
    width = '100%',
    height = 20,
    style,
    variant = 'default',
}) {
    const shimmerAnim = useRef(new Animated.Value(0)).current;

    useEffect(() => {
        const animation = Animated.loop(
            Animated.sequence([
                Animated.timing(shimmerAnim, {
                    toValue: 1,
                    duration: 1000,
                    useNativeDriver: true,
                }),
                Animated.timing(shimmerAnim, {
                    toValue: 0,
                    duration: 1000,
                    useNativeDriver: true,
                }),
            ])
        );
        animation.start();
        return () => animation.stop();
    }, []);

    const opacity = shimmerAnim.interpolate({
        inputRange: [0, 1],
        outputRange: [0.3, 0.6],
    });

    const getVariantStyle = () => {
        switch (variant) {
            case 'circular':
                return { borderRadius: borderRadius.full, width: height, height };
            case 'rounded':
                return { borderRadius: borderRadius.md };
            default:
                return { borderRadius: borderRadius.sm };
        }
    };

    return (
        <Animated.View
            style={[
                styles.skeleton,
                {
                    width,
                    height,
                    opacity,
                },
                getVariantStyle(),
                style,
            ]}
        />
    );
}

export function SkeletonText({ lines = 3, style }) {
    return (
        <View style={style}>
            {Array.from({ length: lines }).map((_, index) => (
                <LoadingSkeleton
                    key={index}
                    height={16}
                    width={index === lines - 1 ? '80%' : '100%'}
                    style={{ marginBottom: spacing.sm }}
                />
            ))}
        </View>
    );
}

export function SkeletonCard({ style }) {
    return (
        <View style={[styles.card, style]}>
            <LoadingSkeleton variant="circular" height={48} width={48} style={{ marginBottom: spacing.md }} />
            <SkeletonText lines={2} />
        </View>
    );
}

const styles = StyleSheet.create({
    skeleton: {
        backgroundColor: colors.bgCard,
    },
    card: {
        padding: spacing.lg,
        backgroundColor: colors.bgCard,
        borderRadius: borderRadius.lg,
        marginBottom: spacing.md,
    },
});
