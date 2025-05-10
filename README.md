# ReactNativeStructureModel

React Native application structure, using good architecture practices, reusable components, internationalization and integration with external APIs.

---

## Sumário

- [Requirements](#requirements)
- [Instalation](#instalation)
- [Available Scripts](#available-scripts)
- [Folder Structure](#folder-structure)
- [Technologies and Libraries](#tecnologies-and-libraries)
- [Functionalities](#functionalities)
- [Next Steps and Suggestions](#next-steps-and-suggestions)
- [About](#about)

---

## Requirements

- Node.js
- Yarn or NPM
- Android Studio or Xcode (para emuladores)
- React Native CLI
- CocoaPods (for iOS)

---

## Instalation

```bash
# Clone the repository
git clone

# Enter the project directory
cd ReactNativeStructureModel

# Install dependencies
yarn install
# or
npm install

# Install CocoaPods dependencies (to iOS only)
cd ios && pod install && cd ..
```

---

## Available Scripts

```bash
yarn android     # Run Android emulator
yarn ios         # Run iOS emulator
yarn lint        # Run ESLint to check for code quality
yarn format      # Format code with Prettier
yarn test        # Run tests with Jest
```

---

## Folder Structure

```bash
src/
├── assets/        # Images, fonts, icons
├── components/    # Reusable components (Button, Input, etc.)
├── locales/       # Localization files (i18n)
├── routes/        # Navigation routes with React Navigation
├── screens/       # Screens of the app (Home, Profile, etc.)
├── services/      # API services (Axios instances)
└── index.tsx      # Main entry point of the app
```

---

## Tecnologies and Libraries

- [React Native](https://reactnative.dev/)
- [TypeScript](https://www.typescriptlang.org/)
- [React Navigation](https://reactnavigation.org/)
- [Axios](https://axios-http.com/)
- [i18n-js](https://github.com/fnando/i18n-js) + [react-native-localize](https://github.com/zoontek/react-native-localize)
- [ESLint](https://eslint.org/) + [Prettier](https://prettier.io/)
- [Jest](https://jestjs.io/)

---

## Functionalities

- Modular structure with clear separation of responsibilities
- Optimized and reusable components
- Support for multiple languages
- Integration with external APIs
- Decoupled styling based on props
- Use of TypeScript with strong typing
- Unit tests with Jest

---

## Next Steps and Suggestions

- Implement Global State Management (e.g., Zustand, Redux, MobX)
- Implement CI/CD for automated testing and deployment

---

## About

Forked from: [Adonai Pinheiro](https://github.com/adonaipinheiro).
