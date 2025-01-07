Basic Level
What is React Native?

React Native is a framework for building mobile applications using JavaScript and React. It allows developers to create native iOS and Android apps using the same codebase.
What is the difference between React and React Native?

React is used to build web applications, while React Native is used to build mobile applications for iOS and Android. React Native uses native components, whereas React uses HTML elements.
What are components in React Native?

Components in React Native are the building blocks of an application, similar to React. They define the UI and behavior of different parts of the app.
What are the basic building blocks of React Native?

React Native has components like View, Text, Image, ScrollView, TextInput, Button, and more for building user interfaces.
How do you style components in React Native?

Styles in React Native are written in JavaScript, and they are similar to CSS but with a few differences. You can use the StyleSheet.create() method to define styles.
What is Flexbox in React Native?

Flexbox is a layout model used in React Native to arrange items in a container. It provides flexibility and helps in designing responsive layouts.
What are props and state in React Native?

Props are immutable inputs passed from parent to child components. State is a mutable object that holds data specific to a component and can be changed over time.
What is the purpose of the FlatList component in React Native?

FlatList is a component used to render long lists of data efficiently. It only renders the items that are currently visible on the screen to improve performance.
How does React Native handle navigation?

React Native uses libraries like React Navigation and React Native Navigation for managing navigation between different screens and app states.
What is the difference between View and Text components in React Native?

View is used to create containers and layout structures, while Text is used to display text content.
How do you handle user input in React Native?

User input is typically handled using components like TextInput, TouchableOpacity, or custom buttons, and the value is managed through the component's state.
How do you add images in React Native?

You can add images using the Image component. The source can be a local file or a URL.
javascript
Copy code
import { Image } from 'react-native';
<Image source={{uri: 'https://example.com/image.jpg'}} />
What is the purpose of SafeAreaView in React Native?

SafeAreaView ensures that content is displayed within the safe area of a device, avoiding notches, status bars, or interactive areas on modern devices.
Intermediate Level
What is useEffect and how does it work in React Native?

useEffect is a hook in React Native (and React) that allows you to perform side effects, such as data fetching or subscribing to events, after the component renders.
What are some common navigation libraries used in React Native?

The two most common navigation libraries are:
React Navigation: A flexible and widely used navigation library.
React Native Navigation: A navigation solution that uses native components for a more native feel.
What are TouchableOpacity, TouchableWithoutFeedback, and TouchableHighlight used for in React Native?

These components are used to make areas of the UI interactive, and they handle press events.
TouchableOpacity: Reduces opacity when pressed.
TouchableWithoutFeedback: Does not change its visual appearance on press.
TouchableHighlight: Highlights the area when pressed.
What is the difference between ScrollView and FlatList?

ScrollView renders all the items in the list, which can cause performance issues for large lists, while FlatList only renders the visible items, improving performance for long lists.
What is AsyncStorage in React Native?

AsyncStorage is a simple, unencrypted key-value storage system for React Native. It is used to store data persistently on the device, such as user preferences or authentication tokens.
What are hooks in React Native?

Hooks are functions that allow you to "hook into" React Native features such as state, lifecycle methods, and context in functional components. Examples include useState, useEffect, and useContext.
What are useState and useContext hooks?

useState is used to manage local state in functional components, while useContext is used to share state across components by accessing the nearest context provider.
What is React Native Debugger?

React Native Debugger is a powerful debugging tool for React Native applications. It integrates the Chrome Developer Tools with React Native and offers capabilities like inspecting elements, network requests, and performance.
What is the difference between componentDidMount() and useEffect()?

componentDidMount() is a lifecycle method in class components that runs after the component is rendered. useEffect() serves the same purpose in functional components and is more flexible, allowing you to run code after every render or based on specific dependencies.
What is Redux and how does it work in React Native?

Redux is a state management library for JavaScript applications. In React Native, it is often used to manage the application state in a global store, where components can dispatch actions and access state via reducers.
How can you handle deep linking in React Native?

Deep linking in React Native allows you to open specific screens or pages of your app from external links. This can be achieved using libraries like React Navigation and native modules for iOS and Android.
What is the difference between useCallback() and useMemo() in React Native?

useCallback() is used to memoize functions, preventing unnecessary re-creations. useMemo() is used to memoize values, preventing unnecessary recalculations.
How do you handle permissions in React Native?

Permissions in React Native can be handled using the react-native-permissions library, which allows you to request and check the status of various permissions (e.g., camera, location).
How do you handle forms in React Native?

Forms in React Native can be handled using components like TextInput, Button, and CheckBox. You can manage form state using useState or Redux.
What are some common optimizations you can use to improve performance in React Native?

Use FlatList for large lists, optimize images and assets, use shouldComponentUpdate or React.memo to prevent unnecessary re-renders, avoid anonymous functions in render methods, and lazy load components when needed.
Advanced Level
How do you handle background tasks in React Native?

Background tasks can be managed using libraries like react-native-background-fetch, react-native-background-task, or native modules like Headless JS to run tasks while the app is in the background.
What is the difference between React Navigation and React Native Navigation?

React Navigation is a JavaScript-based solution with rich customization options and is easier to set up. React Native Navigation uses native components, providing a more native experience with better performance at the cost of additional setup.
How do you use native modules in React Native?

Native modules allow you to access device-specific functionality such as sensors, camera, or Bluetooth. You can create a custom native module by writing code in Java (Android) or Objective-C/Swift (iOS) and linking it to your React Native app.
What is the Bridge in React Native?

The Bridge is the mechanism that allows JavaScript and native code to communicate with each other. It sends asynchronous messages between JavaScript and native platforms (iOS and Android).
What are the main differences between React Native and Flutter?

React Native uses JavaScript and leverages native components for rendering, while Flutter uses Dart and a custom rendering engine. React Native has been around longer and has better community support, while Flutter offers better performance for complex UIs due to its native rendering.
What are the different ways to test React Native applications?

Testing in React Native can be done using tools like Jest for unit and snapshot testing, Detox for end-to-end testing, and React Native Testing Library for component testing.
How do you handle app state in React Native?

App state in React Native can be handled using:
useState for local component state.
Context API for sharing state across multiple components.
Redux or MobX for global state management.
What is Hermes in React Native?

Hermes is a JavaScript engine optimized for React Native. It reduces memory usage and improves start-up time by compiling JavaScript into bytecode ahead of time.
What is the purpose of react-native link?

react-native link was used to link native dependencies with the project. However, with newer versions of React Native, auto-linking has replaced the need for link.
What is CodePush in React Native?

CodePush is a service provided by Microsoft that allows you to push over-the-air (OTA) updates to your React Native application without going through the app store.
How do you bundle assets in React Native?

React Native bundles assets using the Metro bundler. You can use the react-native bundle command to bundle JavaScript and assets for production.
What is AppState in React Native?

AppState is a component that allows you to listen to changes in the app's state (active, background, or inactive). It’s useful for managing resources when the app is in the background.
