import {FlatCompat} from "@eslint/eslintrc";
import js from "@eslint/js";

import {dirname} from "path";
import {fileURLToPath} from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const compat = new FlatCompat({
    baseDirectory: __dirname,
    recommendedConfig: js.configs.recommended,
    allConfig: js.configs.all,
});

const eslintConfig = [
    ...compat.extends("next/core-web-vitals", "next/typescript", "standard", "prettier"), {
        rules: {
            "no-undef": "off", // Disable no-undef rule to allow global variables in Next.js
            'prefer-const': 'warn',
            'no-console': 'warn',
            'no-debugger': 'warn',
            'no-shadow': 'off',
            'no-multiple-empty-lines': 'error',

            'import/no-unresolved': 'error',
            'sort-imports': [
                'error',
                {
                    ignoreCase: true,
                    ignoreDeclarationSort: true,
                },
            ],
            'import/order': [
                'error',
                {
                    'groups': [
                        'external',
                        'builtin',
                        'type',
                        'internal',
                        'sibling',
                        'parent',
                        'index',
                    ],
                    'pathGroups': [
                        {
                            pattern: '~/**',
                            group: 'internal',
                        },
                        {
                            pattern: './**',
                            group: 'sibling',
                            position: 'after',
                        },
                    ],
                    'pathGroupsExcludedImportTypes': ['builtin'],
                    'newlines-between': 'always',
                    'alphabetize': {
                        order: 'asc',
                        caseInsensitive: true,
                    },
                },
            ],
        }
    }
];

export default eslintConfig;
