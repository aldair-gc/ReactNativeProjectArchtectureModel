import { memo } from 'react';
import { TextInput, TextInputProps } from 'react-native';

import { styles } from './styles';

function InputComponent({ ...props }: TextInputProps) {
    return <TextInput style={styles.container} {...props} />;
}

export const Input = memo(InputComponent);

