// src/__tests__/context/Theme.test.tsx
import {render, screen} from '@testing-library/react';
import {ThemeProviderProps} from 'next-themes'
import {describe, expect, it, vi} from 'vitest';

import ThemeProvider from '@/context/Theme';

// Mock the next-themes ThemeProvider
vi.mock('next-themes', () => ({
    ThemeProvider: ({
                        children,
                        attribute,
                        defaultTheme,
                        enableSystem,
                        disableTransitionOnChange
                    }: ThemeProviderProps) => (
        <div
            data-testid="next-theme-provider"
            data-attribute={attribute}
            data-default-theme={defaultTheme}
            data-enable-system={enableSystem ? 'true' : 'false'}
            data-disable-transition={disableTransitionOnChange ? 'true' : 'false'}
        >
            {children}
        </div>
    )
}));

describe('ThemeProvider', () => {
    it('renders children properly', () => {
        render(
            <ThemeProvider>
                <div data-testid="child-element">Test Child</div>
            </ThemeProvider>
        );

        const childElement = screen.getByTestId('child-element');
        expect(childElement).toBeInTheDocument();
        expect(childElement).toHaveTextContent('Test Child');
    });

    it('passes correct props to NextThemeProvider', () => {
        render(
            <ThemeProvider>
                <div>Test</div>
            </ThemeProvider>
        );

        const nextThemeProvider = screen.getByTestId('next-theme-provider');
        expect(nextThemeProvider).toHaveAttribute('data-attribute', 'class');
        expect(nextThemeProvider).toHaveAttribute('data-default-theme', 'system');
        expect(nextThemeProvider).toHaveAttribute('data-enable-system', 'true');
        expect(nextThemeProvider).toHaveAttribute('data-disable-transition', 'true');
    });

    it('wraps children in NextThemeProvider', () => {
        render(
            <ThemeProvider>
                <div data-testid="child">Content</div>
            </ThemeProvider>
        );

        const provider = screen.getByTestId('next-theme-provider');
        const child = screen.getByTestId('child');

        expect(provider).toContainElement(child);
    });
});