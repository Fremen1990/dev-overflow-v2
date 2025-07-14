import {render, screen} from '@testing-library/react';
import {describe, expect, it, vi} from 'vitest';

import RootLayout from '@/app/layout';

// Mock the imported components
vi.mock('@/components/navigation/navbar', () => ({
    default: () => <div data-testid="navbar-mock">Navbar Component</div>
}));

vi.mock('@/context/Theme', () => ({
    default: ({children}: { children: React.ReactNode }) => (
        <div data-testid="theme-provider-mock">{children}</div>
    )
}));

// Mock next/font/google
vi.mock('next/font/google', () => ({
    Geist: () => ({variable: 'mocked-geist-variable'}),
    Geist_Mono: () => ({variable: 'mocked-geist-mono-variable'})
}));

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

describe('RootLayout Integration', () => {
    it('renders the complete component structure', () => {
        render(
            <RootLayout>
                <div data-testid="test-children">Child Content</div>
            </RootLayout>
        );

        // Verify ThemeProvider is rendered
        const themeProvider = screen.getByTestId('theme-provider-mock');
        expect(themeProvider).toBeInTheDocument();

        // Verify children are rendered within ThemeProvider
        const children = screen.getByTestId('test-children');
        expect(children).toBeInTheDocument();
        expect(themeProvider).toContainElement(children);
    });

    it('passes theme context to children properly', () => {
        render(
            <RootLayout>
                <div data-testid="theme-consumer">Theme Consumer</div>
            </RootLayout>
        );

        // Check that both the navbar and children are within the theme provider
        const themeProvider = screen.getByTestId('theme-provider-mock');
        const children = screen.getByTestId('theme-consumer');

        expect(themeProvider).toContainElement(children);
    });

    it('applies font variables to body correctly', () => {
        render(
            <RootLayout>
                <div/>
            </RootLayout>
        );

        // Check the body has the font variables applied
        expect(document.body.className).toContain('mocked-geist-variable');
        expect(document.body.className).toContain('mocked-geist-mono-variable');
    });
});