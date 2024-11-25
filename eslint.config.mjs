// @ts-check

import { createConfigForNuxt } from '@nuxt/eslint-config/flat'

export default createConfigForNuxt().overrideRules(
    {
        // Global
        semi: ['error', 'never'],
        quotes: ['error', 'single'],
        'quote-props': ['error', 'as-needed'],
        // Vue
        'vue/multi-word-component-names': 0,
        'vue/max-attributes-per-line': 'off',
        'vue/no-v-html': 0,
        'vue/html-indent': ['error', 4],
        'vue/script-indent': ['error', 4, { baseIndent: 0 }],
        // Typescript
        '@typescript-eslint/indent': ['error', 4],
    }
).append({
    ignores: [
        '.nuxt/*',
        '.output/*',
        'dist/*',
        'node_modules/*',
        'pnpm-lock.yaml'
    ]
})
