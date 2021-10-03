import React from "react";
import { render, cleanup } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import Contact from '..';

afterEach(cleanup);

describe('Contact component', () => {
    // baseline test
    it('renders', () => {
        render(<Contact />);
    });

    it('matches snapshot', () => {
        const { asFragment } = render(<Contact />);
        expect(asFragment()).toMatchSnapshot();
    });

    it('renders h1 tag', () => {
        const { getByTestId } = render(<Contact />);
        expect(getByTestId('h1tag')).toHaveTextContent('Contact me');
    });

    it('renders submit button', () => {
        const { getByTestId } = render(<Contact />);
        expect(getByTestId('submitBtn')).toHaveTextContent('Submit');
    });
})