import '@testing-library/jest-dom'
import {cleanup} from '@testing-library/react'
import {afterEach, beforeAll, vi} from 'vitest'

// Mock ALL CSS files
vi.mock('../app/globals.css', () => ({}))
vi.mock('*.css', () => ({}))

// Mock Next.js fonts
vi.mock('next/font/google', () => ({
    Geist: () => ({
        variable: '--font-geist-sans',
        className: 'geist-sans',
    }),
    Geist_Mono: () => ({
        variable: '--font-geist-mono',
        className: 'geist-mono',
    }),
}))

// Mock Next.js router
vi.mock('next/navigation', () => ({
    useRouter: () => ({
        push: vi.fn(),
        replace: vi.fn(),
        prefetch: vi.fn(),
        back: vi.fn(),
        forward: vi.fn(),
        refresh: vi.fn(),
    }),
    usePathname: () => '/',
    useSearchParams: () => new URLSearchParams(),
}))

// Mock Next.js Image component
vi.mock('next/image', () => ({
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    default: ({src, alt, ...props}: any) => (
        // eslint-disable-next-line @next/next/no-img-element
        <img src={src} alt={alt} {...props} />
    ),
}))

// MOCK NEXT-THEMES - Essential for theme provider testing
vi.mock('next-themes', () => ({
    ThemeProvider: ({children}: { children: React.ReactNode }) => children,
    useTheme: () => ({
        theme: 'light',
        setTheme: vi.fn(),
        resolvedTheme: 'light',
        themes: ['light', 'dark', 'system'],
        systemTheme: 'light',
    }),
}))

// Global test setup
beforeAll(() => {
    // Add any global setup here
})

// Cleanup after each test
afterEach(() => {
    cleanup()
})