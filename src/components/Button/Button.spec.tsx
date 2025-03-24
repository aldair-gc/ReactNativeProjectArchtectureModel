import React from 'react';

import { act, fireEvent, render } from '@testing-library/react-native';

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

    it('should not calls onPress when pressed', () => {
        const onPressMock = jest.fn();
        const { getByText } = render(
            <Button text="Press" disabled onPress={onPressMock} />
        );

        const button = getByText('Press');
        fireEvent.press(button);

        expect(onPressMock).toHaveBeenCalledTimes(0);
    });

    it('applies the correct styles', () => {
        const { getByText } = render(<Button text="Styled" />);
        const buttonText = getByText('Styled');

        expect(buttonText.props.style).toBeDefined();
    });

    it('should not re-render', () => {
        const { rerender, getByText } = render(<Button text="Styled" />);

        act(() => {
            rerender(<Button text="Styled" />);
        });

        const secondButton = getByText('Styled');

        console.log(secondButton.children[0]);

        expect(secondButton.children[0]).toBe('Styled');
    });
});
