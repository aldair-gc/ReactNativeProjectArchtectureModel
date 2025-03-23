import React from 'react';

import { act, render } from '@testing-library/react-native';

import { Spacer } from './';

describe('Spacer', () => {
    it('renders a vertical spacer (default)', () => {
        const { getByTestId, toJSON } = render(<Spacer size={8} />);
        const spacer = getByTestId('spacer');

        expect(spacer.props.style).toMatchObject({
            height: 8,
            width: 0,
        });

        expect(toJSON()).toMatchSnapshot();
    });

    it('renders a horizontal spacer when `horizontal` is true', () => {
        const { getByTestId, toJSON } = render(<Spacer horizontal size={12} />);
        const spacer = getByTestId('spacer');

        expect(spacer.props.style).toMatchObject({
            width: 12,
            height: 0,
        });

        expect(toJSON()).toMatchSnapshot();
    });

    it('should re-render if props change', () => {
        const { rerender, getByTestId } = render(<Spacer size={10} horizontal={false} />);

        act(() => {
            rerender(<Spacer size={20} horizontal={true} />);
        });

        const secondRender = getByTestId('spacer');

        expect(secondRender.props.style.width).toBe(20);
        expect(secondRender.props.style.height).toBe(0);
    });

    it('should not re-render if size and horizontal do not change', () => {
        const { rerender, getByTestId } = render(<Spacer size={10} horizontal={false} />);

        act(() => {
            rerender(<Spacer size={10} horizontal={false} />);
        });

        const secondRender = getByTestId('spacer');
        expect(secondRender.props.style.width).toBe(0);
    });
});
