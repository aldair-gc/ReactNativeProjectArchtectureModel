module.exports = {
    preset: 'react-native',
    collectCoverage: true,
    collectCoverageFrom: [
        'src/**/*.{ts,tsx}',
        '!src/**/*.d.ts',
        '!src/**/index.ts',
        '!src/services/**',
        '!src/index.tsx',
    ],
};
