import { memo } from 'react';
import { Text, TouchableOpacity, TouchableOpacityProps } from 'react-native';

import { styles } from './styles';

interface ButtonProps extends TouchableOpacityProps {
    text: string;
}

export function ButtonComponent({ text, ...props }: ButtonProps) {
    return (
        <TouchableOpacity
            activeOpacity={0.7}
            style={styles.container}
            {...props}
        >
            <Text style={styles.text}>{text}</Text>
        </TouchableOpacity>
    );
}

export const Button = memo(ButtonComponent, (prev, next) =>
    prev.text === next.text);
