
/*
Lazy loading is a technique where components are loaded only when needed, rather than at the initial page load. In React, React.lazy() enables this by allowing you to dynamically import components.
Definition: Lazy loading is the process of deferring the loading of a component until it is required, improving performance and reducing initial bundle size.


Suspense
Suspense is a React component that lets you handle the loading state of lazy-loaded components. It shows a fallback UI (like a spinner or message) while the component is being fetched.
Definition: Suspense is a React feature used to display a fallback UI while waiting for a lazy-loaded component or asynchronous data to load.

*/

import React from 'react';
import UseMemoDemo from '../useMemo/useMemo';
import UseCallbackDemo from '../useCallback/useCallback';

const About = () =>{
    return(
        <>
        <h2>About Page</h2>
        <UseMemoDemo />
        <UseCallbackDemo />
        </>
    )
}

export default About;
