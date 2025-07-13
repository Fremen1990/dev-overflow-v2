// src/__tests__/components/navigation/navbar/ModeToggle.test.tsx
import {render, screen} from '@testing-library/react';
import {describe, expect, it, vi} from 'vitest';

import ModeToggle from '@/components/navigation/navbar/ModeToggle';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    children: React.ReactNode;
    variant?: string;
    size?: string;
}

interface ChildrenOnlyProps {
    children: React.ReactNode;
}

interface DropdownMenuItemProps {
    children: React.ReactNode;
    onClick?: () => void;
}

// Mock the UI components
vi.mock('@/components/ui/button', () => ({
    Button: ({children, ...props}: ChildrenOnlyProps) => (
        <button {...props} data-testid="theme-button">
            {children}
        </button>
    ),
}));

vi.mock('@/components/ui/dropdown-menu', () => ({
    DropdownMenu: ({children}: DropdownMenuItemProps) => <div data-testid="dropdown-menu">{children}</div>,
    DropdownMenuTrigger: ({children}: ButtonProps) => <div data-testid="dropdown-trigger">{children}</div>,
    DropdownMenuContent: ({children}: ButtonProps) => <div data-testid="dropdown-content">{children}</div>,
    DropdownMenuItem: ({children, onClick}: ButtonProps) => (
        <button data-testid={`theme-option-${children.toLowerCase()}`} onClick={onClick}>
            {children}
        </button>
    ),
}));

describe('ModeToggle', () => {
    it('renders the theme toggle button with sun and moon icons', () => {
        render(<ModeToggle/>);

        expect(screen.getByTestId('theme-button')).toBeInTheDocument();
        expect(screen.getByText('Toggle theme')).toBeInTheDocument();
    });

    it('renders dropdown menu with theme options', () => {
        render(<ModeToggle/>);

        expect(screen.getByTestId('dropdown-menu')).toBeInTheDocument();
        expect(screen.getByTestId('dropdown-content')).toBeInTheDocument();
        expect(screen.getByTestId('theme-option-light')).toBeInTheDocument();
        expect(screen.getByTestId('theme-option-dark')).toBeInTheDocument();
        expect(screen.getByTestId('theme-option-system')).toBeInTheDocument();
    });

});