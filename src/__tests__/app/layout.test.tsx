import {render, screen} from '@testing-library/react';
import {describe, expect, it} from 'vitest';

import RootLayout from '@/app/layout';

describe('RootLayout', () => {
    it('renders children correctly', () => {
        render(
            <RootLayout>
                <div data-testid="child">Test Child</div>
            </RootLayout>
        );
        expect(screen.getByTestId('child')).toHaveTextContent('Test Child');
    });

    it('sets html lang attribute to "en"', () => {
        render(
            <RootLayout>
                <div/>
            </RootLayout>
        );
        const html = document.querySelector('html');
        expect(html).toHaveAttribute('lang', 'en');
    });

    it('applies font and antialiased classes to body', () => {
        render(
            <RootLayout>
                <div/>
            </RootLayout>
        );
        const body = document.body;
        expect(body.className).toContain('antialiased');
    });
});