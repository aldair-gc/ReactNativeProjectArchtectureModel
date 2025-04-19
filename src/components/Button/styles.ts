import { StyleSheet } from 'react-native';

import type { ButtonProps } from '.';

export const stylesWithProps = ({ disabled }: Pick<ButtonProps, 'disabled'>) => StyleSheet.create({
    container: {
        backgroundColor: disabled ? '#0d3db290' : '#0d3db2',
        padding: 10,
        paddingHorizontal: 24,
        borderRadius: 4,
    },
    text: {
        fontSize: 16,
        color: 'white',
        fontWeight: '600',
    },
});
