import { memo } from 'react';
import { View } from 'react-native';

import { stylesWithProps } from './styles';

interface SpacerProps {
    horizontal?: boolean;
    size: number;
}

export function SpacerComponent({ horizontal = false, size }: SpacerProps) {
    const styles = stylesWithProps(horizontal, size);

    return <View testID="spacer" style={styles.container} />;
}

export const Spacer = memo(SpacerComponent, (prev, next) =>
    prev.size === next.size && prev.horizontal === next.horizontal);
