# Cliniqo App

A mobile healthcare application built with React Native and Expo.

## Overview

Cliniqo is a healthcare application designed to streamline clinical workflows and improve patient care. The application provides an intuitive interface for healthcare providers and patients.

## Features

- User onboarding experience
- Cross-platform support (iOS, Android, Web)
- Dark/Light mode theming
- Secure data storage using Supabase

## Tech Stack

- [React Native](https://reactnative.dev/) - Cross-platform mobile framework
- [Expo](https://expo.dev/) - React Native tooling and SDK
- [TypeScript](https://www.typescriptlang.org/) - Static typing for JavaScript
- [Supabase](https://supabase.com/) - Backend as a service platform
- [Expo Router](https://docs.expo.dev/router/introduction/) - File-system based routing
- [Zustand](https://github.com/pmndrs/zustand) - State management
- [React Native Reanimated](https://docs.swmansion.com/react-native-reanimated/) - Animations library

## Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/) (v16 or later)
- [Expo CLI](https://docs.expo.dev/get-started/installation/)
- [Git](https://git-scm.com/)

### Installation

1. Clone the repository:
```bash
git clone https://github.com/yourusername/cliniqo-app.git
cd cliniqo-app
```

2. Install dependencies:
```bash
yarn install
```

3. Start the development server:
```bash
yarn start
```

4. Run on specific platforms:
```bash
# iOS
yarn run ios

# Android
yarn run android

# Web
yarn run web
```

## Project Structure (To be Redefined)

```
cliniqo-app/
├── app/                    # Application screens and navigation
│   ├── _layout.tsx         # Main layout with navigation setup
│   ├── index.tsx           # Home screen
│   └── onboarding/         # Onboarding screens
├── assets/                 # Static assets
│   ├── fonts/              # Custom fonts
│   └── images/             # Images and icons
├── components/             # Reusable React components
├── constants/              # App-wide constants and theme settings
├── app.json                # Expo configuration
├── package.json            # Project dependencies
└── tsconfig.json           # TypeScript configuration
```

## Testing

Run tests with:
```bash
yarn test
```

## Contributing

1. Fork the repository
2. Create a new branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## License

This project is licensed under the MIT License - see the LICENSE file for details.

## Contact

Project Link: [https://github.com/dimacuhamarc/cliniqo-app](https://github.com/dimacuhamarc/cliniqo-app)