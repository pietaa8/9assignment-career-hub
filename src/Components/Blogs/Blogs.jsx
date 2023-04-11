import React from 'react';

const Blogs = () => {
    return (
        <div>
            <h1 className='text-lg font-semibold  mt-10'>When should I use context API?</h1>
            <p>Context is primarily used when some data needs to be accessible by many components at different nesting levels. Apply it sparingly because it makes component reuse more difficult. If I only want to avoid passing some props through many levels, component composition is often a simpler solution than context.</p>
            <h1 className='text-lg font-semibold  mt-10'> What is a custom hook?</h1>
            <p>Both components and Hooks are functions, so this works for them too! A custom Hook is a JavaScript function whose name starts with ” use ” and that may call other Hooks.</p>
            <h1 className='text-lg font-semibold  mt-10'>What is useRef?</h1>
            <p>useRef(initialValue) is a built-in React hook that accepts one argument as the initial value and returns a reference (aka ref). A reference is an object having a special property current .</p>
            <h1 className='text-lg font-semibold  mt-10'>What is useMemo?</h1>
            <p>useMemo() is a function that returns a memoized value of a passed in resource-intensive function. It is very useful in optimizing the performance of a React component by eliminating repeating heavy computations.</p>
        </div>
    );
};

export default Blogs;