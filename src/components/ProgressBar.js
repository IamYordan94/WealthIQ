import React, { useEffect, useRef } from 'react';
import { View, StyleSheet, Animated } from 'react-native';
import { colors, borderRadius } from '../theme';

export default function ProgressBar({ progress = 0, height = 6, color = colors.primary, animated = true, style }) {
    const animatedProgress = useRef(new Animated.Value(0)).current;

    useEffect(() => {
        if (animated) {
            Animated.timing(animatedProgress, {
                toValue: progress,
                duration: 500,
                useNativeDriver: false,
            }).start();
        } else {
            animatedProgress.setValue(progress);
        }
    }, [progress, animated]);

    const width = animatedProgress.interpolate({
        inputRange: [0, 100],
        outputRange: ['0%', '100%'],
        extrapolate: 'clamp',
    });

    return (
        <View style={[styles.container, { height }, style]}>
            <Animated.View
                style={[
                    styles.fill,
                    {
                        width,
                        height,
                        backgroundColor: color,
                    },
                ]}
            />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        width: '100%',
        backgroundColor: colors.bgDark,
        borderRadius: borderRadius.full,
        overflow: 'hidden',
    },
    fill: {
        borderRadius: borderRadius.full,
    },
});
