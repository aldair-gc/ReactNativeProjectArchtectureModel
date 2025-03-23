import { StyleSheet } from 'react-native';

export const stylesWithProps = (horizontal: boolean, size: number) => StyleSheet.create({
    container: {
        width: horizontal ? size : 0,
        height: horizontal ? 0 : size,
    },
});
