# Fluyo React Native Code Assignment - Sarmad Kazmi

This repository serves as a demonstration of my work on the **Fluyo** mobile app hiring test using **React Native Expo**. The assigned task was to create an application that enables users to practice exercises by guessing the correct translation from English to German.

I have successfully fulfilled all the specified requirements and fine-tuned the user interface to achieve pixel-perfect precision, leveraging TypeScript for robust implementation. Additionally, I've crafted schemas within the Firebase Firestore database ([see schema types](https://github.com/syedsarmadkazmi/fluyo/blob/main/src/types/general.ts)), seamlessly integrating Firebase's subscription API to provide real-time updates on data.

## Implementation Screenshots

<img src="https://github.com/syedsarmadkazmi/fluyo/assets/36984862/75d8b2d7-c8c7-4351-8a33-e182b30cba53" alt="Unselected" style="width:200px;"/>
<img src="https://github.com/syedsarmadkazmi/fluyo/assets/36984862/51a6b745-1456-4861-bd2b-ebe102e241c5" alt="Selected" style="width:200px;"/>
<img src="https://github.com/syedsarmadkazmi/fluyo/assets/36984862/032cf768-7a76-4cf3-af2d-72d70c1127d7" alt="Correct Guess" style="width:200px;"/>
<img src="https://github.com/syedsarmadkazmi/fluyo/assets/36984862/e6352916-0c7e-4ec8-ac64-dcc3b1c6015f" alt="Incorrect Guess" style="width:200px;"/>
<img src="https://github.com/syedsarmadkazmi/fluyo/assets/36984862/80479d64-2e1e-48f1-8a5a-d54812a3b8f7" alt="Finish" style="width:200px;"/>

## Firestore Real-time Updates

https://github.com/syedsarmadkazmi/fluyo/assets/36984862/64c24980-8e99-4ae1-86d0-8229318bb5cb


## Features and Implementation Details

-   **TypeScript**: TypeScript has been utilized to enhance code quality, avoid bugs, and ensure scalability.

-   **Firebase SDK**: The application fetches real-time data from Firestore using the Firebase SDK client. I have also written down a [seeder function](https://github.com/syedsarmadkazmi/fluyo/blob/main/src/apis/firebase.seed.ts) to initialize the Firestore database if empty.

-   **ESlint/Prettier**: To maintain code quality and consistency, ESLint and Prettier have been integrated with specific rules configured to catch syntax errors.

-   **Redux Toolkit**: Keeping scalability in mind, Redux Toolkit is integrated as a global state management library, implementing the Flux architecture to manage app-wide data and state.

-   **Barrel Expports**: To roll up exports from several modules into a single convenient module allowing neat import statements and readable code.

-   **Directory Structure**: I've established a scalable directory structure for the project, making it easier to manage and navigate code files.

-   **Designs**: Custom components have been designed as needed, and no third-party design library is introduced keeping the scope of the application in mind.

-   **React Navigation**: I've implemented React Navigation to enable seamless navigation between different screens.

-   **Async Storage**: Although I couldn't complete the Async Storage feature due to time constraints, it was intended to provide offline user data access and caching.


## How To Run The Project

### Prerequisites

Before you can run this project, you need to have the following installed on your machine:

-   [Node.js](https://nodejs.org/) (LTS version recommended)
-   [npm](https://www.npmjs.com/) or [Yarn](https://yarnpkg.com/) package manager
-   [Expo CLI](https://docs.expo.dev/get-started/installation/) (install globally)

### Installation

1. Clone this repository to your local machine:

```command
git clone https://github.com/syedsarmadkazmi/fluyo.git
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

