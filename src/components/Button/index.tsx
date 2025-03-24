import { memo } from 'react';
import { Text, TouchableOpacity, TouchableOpacityProps } from 'react-native';

import { stylesWithProps } from './styles';

export interface ButtonProps extends TouchableOpacityProps {
    text: string;
}

export function ButtonComponent({ text, disabled, ...props }: ButtonProps) {
    const styles = stylesWithProps({ disabled });

    return (
        <TouchableOpacity
            testID="button"
            activeOpacity={0.7}
            style={styles.container}
            disabled={disabled}
            {...props}
        >
            <Text style={styles.text}>{text}</Text>
        </TouchableOpacity>
    );
}

export const Button = memo(ButtonComponent, (prev, next) =>
    prev.text === next.text && prev.disabled === next.disabled);
