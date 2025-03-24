import { PixelRatio, StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    profileArea: {
        flexDirection: 'row',
        padding: 10,
    },
    profileImage: {
        width: PixelRatio.roundToNearestPixel(125),
        height: PixelRatio.roundToNearestPixel(125),
        borderRadius: 16,
    },
    profileInfoArea: {
        padding: 10,
    },
    profileInfoName: {
        fontWeight: '600',
        fontSize: 16,
    },
    profileInfoUrl: {
        fontWeight: '600',
        color: 'blue',
    },
});
