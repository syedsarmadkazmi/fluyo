# TenTwenty React Native Code Assignment - Sarmad Kazmi

This repository showcases a feature implementation for the TenTwenty mobile app hiring test using React Native. The task assigned was to develop a screen of the app and style it according to the provided Figma designs.


## Features and Implementation Details

-   **React Navigation**: I've implemented React Navigation to enable seamless navigation between different screens.

-   **Code Quality**: To maintain code quality and consistency, ESLint and Prettier have been integrated with specific rules configured to catch syntax errors.

-   **TypeScript**: TypeScript has been utilized to enhance code quality, avoid bugs, and ensure scalability.

-   **Axios Client**: The application fetches real-time data from TheMoviesDB using the Axios client.

-   **Redux Toolkit**: Redux Toolkit serves as a global state management library, implementing the Flux architecture to manage app-wide data and state.

-   **Directory Structure**: I've established a scalable directory structure for the project, making it easier to manage and navigate code files.

-   **Designs**: Custom components have been designed as needed, with the assistance of the NativeBase design library.

-   **Barrel Expports**: to rollup exports from several modules into a single convenient module allowing neat import statements.

-   **Async Storage**: Although I couldn't complete the Async Storage feature due to time constraints, I'm proficient in using it for offline user data access and caching.


## How To Run The Project

### Prerequisites

Before you can run this project, you need to have the following installed on your machine:

-   [Node.js](https://nodejs.org/) (LTS version recommended)
-   [npm](https://www.npmjs.com/) or [Yarn](https://yarnpkg.com/) package manager
-   [Expo CLI](https://docs.expo.dev/get-started/installation/) (install globally)

### Installation

1. Clone this repository to your local machine:

```command
git clone https://github.com/syedsarmadkazmi/tentwenty.git
```
2. Navigate to the project directory:

```command
cd your-project
```

3. Install project dependencies:

```command
npm install # or yarn install
```

### Running the App

To start the development server and run the app, use the following command:


```command 
expo start
```

This will open the Expo DevTools in your default web browser. You can run the app on an emulator or a physical device. To do this, follow the instructions provided in the Expo DevTools.

## Available Scripts

In the project directory, you can also run the following scripts:

-   `npm run ios`: Open the app in the iOS simulator (Mac only).
-   `npm run android`: Open the app in the Android emulator or a connected Android device.
-   `npm start`: Launch the expo client in interactive mode.

