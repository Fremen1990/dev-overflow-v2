import {render, screen} from '@testing-library/react';
import {describe, expect, it} from 'vitest'

import Home from "@/app/(root)/page";

describe('Home Page Component', () => {
    it('renders the heading with correct text', () => {
        render(<Home/>)
        const heading = screen.getByRole('heading', {
            level: 1,
            name: /Home page is here!/i
        });
        expect(heading).toBeDefined();
    });
})