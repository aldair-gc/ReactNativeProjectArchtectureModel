import React from 'react';

import { fireEvent, render } from '@testing-library/react-native';

import { Button } from './';

describe('Button', () => {
    it('renders correctly with text', () => {
        const { getByText, toJSON } = render(<Button text="Click me" />);
        const button = getByText('Click me');

        expect(button).toBeTruthy();
        expect(toJSON()).toMatchSnapshot();
    });

    it('calls onPress when pressed', () => {
        const onPressMock = jest.fn();
        const { getByText } = render(
            <Button text="Press" onPress={onPressMock} />
        );

        const button = getByText('Press');
        fireEvent.press(button);

        expect(onPressMock).toHaveBeenCalledTimes(1);
    });

    it('applies the correct styles', () => {
        const { getByText } = render(<Button text="Styled" />);
        const buttonText = getByText('Styled');

        expect(buttonText.props.style).toBeDefined();
    });
});
