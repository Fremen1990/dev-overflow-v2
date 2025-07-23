// src/__tests__/components/navigation/navbar/index.test.tsx
import {render, screen} from '@testing-library/react';
import {describe, expect, it, vi} from 'vitest';

import type {ImageProps} from 'next/image';
import type {InternalLinkProps} from 'next/link';

import Navbar from '@/components/navigation/navbar';

// Mock Next.js components
vi.mock('next/image', () => ({
    default: ({src, alt, width, height}: Partial<ImageProps>) => (
        // eslint-disable-next-line @next/next/no-img-element
        <img src={src} alt={alt} width={width} height={height} data-testid="next-image"/>
    ),
}));

vi.mock('next/link', () => ({
    default: ({href, children, className}: InternalLinkProps & { className: string | undefined }) => (
        <a href={href} className={className} data-testid="next-link">
            {children}
        </a>
    ),
}));

// Mock ModeToggle component
vi.mock('@/components/navigation/navbar/ModeToggle', () => ({
    default: () => <div data-testid="mode-toggle">Mode Toggle Component</div>,
}));

describe('Navbar', () => {
    it('renders the logo and site name', () => {
        render(<Navbar/>);

        const logo = screen.getByAltText("Dev Overflow Logo")
        expect(logo).toBeInTheDocument();
        expect(logo).toHaveAttribute('src', '/images/site-logo.svg');
        expect(logo).toHaveAttribute('alt', 'Dev Overflow Logo');

        const siteName = screen.getByText('Dev');
        expect(siteName).toBeInTheDocument();
        expect(screen.getByText('Flow')).toBeInTheDocument();
    });

    it('includes a link to the homepage', () => {
        render(<Navbar/>);

        const homeLink = screen.getByTestId('next-link');
        expect(homeLink).toBeInTheDocument();
        expect(homeLink).toHaveAttribute('href', '/');
    });

    it('includes global search text', () => {
        render(<Navbar/>);

        expect(screen.getByText('Global Search')).toBeInTheDocument();
    });

    it('renders the ModeToggle component', () => {
        render(<Navbar/>);

        expect(screen.getByTestId('mode-toggle')).toBeInTheDocument();
    });

    it('has appropriate styling classes', () => {
        render(<Navbar/>);

        const nav = screen.getByRole('navigation');
        expect(nav.className).toContain('fixed');
        expect(nav.className).toContain('w-full');
    });
});