module.exports = {
    presets: ['module:@react-native/babel-preset'],
    plugins: [
        [
            'module-resolver',
            {
                root: ['./src'],
                extensions: ['.ios.js', '.android.js', '.js', '.ts', '.tsx', '.json'],
                alias: {
                    '@components': './src/components',
                    '@screens': './src/screens',
                    '@services': './src/services',
                    '@assets': './src/assets',
                    '@routes': './src/routes',
                    '@hooks': './src/hooks',
                    '@locales': './src/locales',
                    '@store': './src/store',
                    '@storage': './src/storage',
                    '@utils': './src/utils',
                },
            },
        ],
    ],
};
