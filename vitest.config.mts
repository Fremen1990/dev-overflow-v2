import react from '@vitejs/plugin-react'
import tsconfigPaths from 'vite-tsconfig-paths'
import {defineConfig} from 'vitest/config'

export default defineConfig({
    plugins: [tsconfigPaths(), react()],
    test: {
        environment: 'jsdom',
        globals: true,
        setupFiles: ['./src/test/setup.tsx'],
        css: false, // Disable CSS processing in tests
        coverage: {
            provider: 'v8',
            reporter: ['text', 'json', 'html'],
            include: ['src/**/*.{ts,tsx}'],
            exclude: [
                'node_modules/**',
                '**/*.d.ts',
                '**/*.config.*',
                '**/coverage/**',
                'src/setupTests.ts',
                'src/vitest.config.ts',
                'src/vitest.config.mts',
            ],
        },
    },
})