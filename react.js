Basic Level
What is React?

React is a JavaScript library for building user interfaces, developed by Facebook. It allows you to build reusable UI components and efficiently update and render components based on data changes.
What are components in React?

Components are the building blocks of a React application. They can be either functional or class-based and define the structure and behavior of the UI.
What is JSX in React?

JSX (JavaScript XML) is a syntax extension for JavaScript that allows you to write HTML-like code within JavaScript. It gets transpiled to JavaScript by tools like Babel.
What is the difference between a functional component and a class component?

Functional Component: A simpler component that is just a function returning JSX.
Class Component: A component that extends React.Component and requires a render() method.
What is state in React?

State is an object that holds data that can change over time. It is used to create dynamic and interactive components.
What is props in React?

Props (short for properties) are immutable data passed to a component from its parent component. They allow components to receive dynamic data.
What is the virtual DOM in React?

The virtual DOM is a lightweight copy of the actual DOM. React uses it to optimize DOM manipulation by updating only parts of the UI that have changed.
How does React update the DOM?

React updates the DOM through a process called reconciliation. It compares the current virtual DOM with the previous one and calculates the minimum number of changes needed to update the real DOM.
What is the render method in React?

The render() method is used in class components to return the JSX markup that should be displayed. It is automatically called whenever the component’s state or props change.
What are controlled components in React?

Controlled components are form elements (like <input>, <select>, etc.) whose value is controlled by the component's state.
What are uncontrolled components in React?

Uncontrolled components store their value in the DOM, and React doesn't control them. You access the values using refs.
What is React Router?

React Router is a standard library for routing in React applications. It allows you to define multiple routes and navigate between different components based on the URL.
What is the purpose of the key prop in React?

The key prop helps React identify which items have changed, are added, or are removed, improving performance during re-rendering of lists.
What are lifecycle methods in React?

Lifecycle methods are special methods that are called at different stages of a component’s life cycle, such as componentDidMount(), componentDidUpdate(), and componentWillUnmount() (for class components).
Intermediate Level
What is the difference between componentDidMount() and componentWillUnmount()?

componentDidMount() is called once after the component has been rendered, and it’s typically used for data fetching.
componentWillUnmount() is called just before the component is removed from the DOM, and is used for cleanup tasks (like clearing timers).
What is the purpose of the shouldComponentUpdate() method?

shouldComponentUpdate() is a lifecycle method that allows you to prevent unnecessary re-renders by returning false when the component's state or props haven't changed.
What is a higher-order component (HOC)?

A higher-order component is a function that takes a component and returns a new component with additional props or behavior. It’s a pattern for reusing component logic.
What is a hook in React?

Hooks are functions that allow you to "hook into" React features such as state, lifecycle methods, and context in functional components.
What is the useState hook?

The useState hook is used to add state to functional components. It returns an array with the current state value and a function to update it.
What is the useEffect hook?

The useEffect hook is used to perform side effects (like data fetching or DOM manipulation) in functional components. It replaces lifecycle methods like componentDidMount() and componentDidUpdate().
What are refs in React?

Refs provide a way to access the DOM nodes or React elements directly. They are typically used for managing focus, text selection, or triggering imperative animations.
What is the context API in React?

The context API is a way to share state and other values across the component tree without having to pass props down manually at every level.
What are hooks rules in React?

Hooks must be called at the top level of the component, inside functional components or custom hooks, and never inside loops, conditions, or nested functions.
What is the useMemo hook?

useMemo memoizes a value, meaning it only recalculates it when its dependencies change, improving performance by preventing unnecessary calculations.
What is the useCallback hook?

useCallback memoizes a function, returning the same function reference unless its dependencies change. It helps to prevent unnecessary re-creations of functions.
What is the useReducer hook?

useReducer is an alternative to useState for managing more complex state logic in functional components, especially when state depends on the previous state.
What is the difference between useEffect and componentDidMount()?

useEffect in functional components is similar to componentDidMount() but with more flexibility, such as being able to execute on updates as well. You can also clean up effects using the return function.
How can you pass data between components in React?

Data can be passed between components via props. For deeply nested components, you can use context or state management libraries like Redux.
What is Redux?

Redux is a state management library for JavaScript apps, often used with React to manage application state in a central store, using actions and reducers to update state.
Advanced Level
What is the Redux flow (actions, reducers, store)?

Actions are plain JavaScript objects that describe an event or intent to change the state.
Reducers are functions that handle actions and update the state.
Store is the central repository for the state of the application.
What are middleware in Redux?

Middleware in Redux is used to extend the store’s abilities, such as handling asynchronous actions, logging, or error reporting.
What are the advantages of using React's functional components over class components?

Functional components are simpler, easier to test, and have less boilerplate. With hooks, they can manage state and side effects, which were previously only possible in class components.
How does React optimize rendering?

React optimizes rendering through virtual DOM, reconciliation, and batching of updates. Only the parts of the DOM that need to be updated are re-rendered.
What is server-side rendering (SSR) in React?

SSR is the process of rendering React components on the server side and sending the fully rendered HTML to the client. It improves initial load performance and SEO.
What is code splitting in React?

Code splitting is the process of splitting your code into multiple bundles to reduce the size of the initial JavaScript file loaded by the browser. React supports this with React.lazy() and Suspense.
What is React Suspense?

React Suspense is a mechanism that allows components to "wait" for something before rendering, such as data loading or code splitting, and it can display fallback UI until the data or component is ready.
What are React hooks like useLayoutEffect and how are they different from useEffect?

useLayoutEffect is similar to useEffect, but it runs synchronously after all DOM mutations. It is useful for measuring or manipulating DOM elements before the browser repaints.
What is React Fiber?

React Fiber is a complete rewrite of the React core algorithm. It improves React's ability to handle complex UI updates with better performance, async rendering, and prioritization of updates.
What are React Portals?

Portals provide a way to render children into a DOM node that exists outside the hierarchy of the parent component.
What are the best practices for optimizing React application performance?

Use memoization (React.memo, useMemo, useCallback), optimize state management, minimize unnecessary re-renders, lazy load components, and use virtualized lists for large datasets.
How does React handle forms?

React handles forms by using controlled components, where form data is stored in the component’s state and updated through event handlers. You can also use uncontrolled components with refs for simple forms.
What is React's Strict Mode?

Strict Mode is a tool for identifying potential problems in the application. It activates additional checks and warnings for its descendants, helping developers detect unsafe lifecycles, deprecated APIs, and more.
What is the difference between componentWillMount() and getDerivedStateFromProps()?

componentWillMount() is a deprecated lifecycle method, while getDerivedStateFromProps() is a static method that allows state updates based on props changes before rendering.
What is JSX transpiling and how does it work?

JSX is transformed into regular JavaScript function calls, typically by Babel. For example, <div>Hello</div> is transpiled into React.createElement('div', null, 'Hello').
How does React handle error boundaries?

Error boundaries are React components that catch JavaScript errors anywhere in their child component tree and log those errors, preventing the UI from breaking.
