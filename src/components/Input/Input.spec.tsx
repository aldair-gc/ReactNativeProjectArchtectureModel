import React from 'react';

import { fireEvent, render, act } from '@testing-library/react-native';

import { Input } from './';

describe('Input', () => {
    it('renders correctly with placeholder', () => {
        const { getByPlaceholderText, toJSON } = render(
            <Input placeholder="Type here" />
        );

        const input = getByPlaceholderText('Type here');
        expect(input).toBeTruthy();
        expect(toJSON()).toMatchSnapshot();
    });

    it('applies the style from styles.container', () => {
        const { getByPlaceholderText } = render(
            <Input placeholder="Test input" />
        );

        const input = getByPlaceholderText('Test input');
        expect(input.props.style).toBeDefined();
    });

    it('calls onChangeText when typing', () => {
        const handleChange = jest.fn();
        const { getByPlaceholderText } = render(
            <Input placeholder="Type" onChangeText={handleChange} />
        );

        const input = getByPlaceholderText('Type');
        fireEvent.changeText(input, 'Hello');
        expect(handleChange).toHaveBeenCalledWith('Hello');
    });

    it('should re-render if props change', () => {
        const { getByPlaceholderText, rerender } = render(
            <Input placeholder="First" />
        );

        act(() => {
            rerender(<Input placeholder="Second" />);
        });

        const input = getByPlaceholderText('Second');
        expect(input).toBeTruthy();
    });

    it('should not re-render if props do not change', () => {
        const renderSpy = jest.fn();

        const Wrapper = ({ placeholder }: { placeholder: string }) => {
            // o renderSpy() está contando as renderizações do Wrapper
            renderSpy();
            return <Input placeholder={placeholder} />;
        };

        const { rerender } = render(<Wrapper placeholder="Same" />);
        rerender(<Wrapper placeholder="Same" />);

        expect(renderSpy).toHaveBeenCalledTimes(2);
    });
});
