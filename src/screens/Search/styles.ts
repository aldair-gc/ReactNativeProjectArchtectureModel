import { PixelRatio, StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        margin: 24,
        gap: 16,
    },
    title: {
        fontSize: 16,
    },
    image: {
        width: PixelRatio.roundToNearestPixel(100),
        height: PixelRatio.roundToNearestPixel(100),
        borderRadius: 8,
    },
});
