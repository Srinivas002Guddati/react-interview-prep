

/*
useCallback is a React hook that lets you memoize a function, so it doesn’t get recreated on every render unless its dependencies change. This is especially useful when you’re passing functions to child components that rely on reference equality to avoid unnecessary re-renders.
*/

//Example

import React, { useCallback, useState } from "react";

const Button = React.memo(({ onClick, text }) => {
  console.log(`${text} rendered`);
  return <button onClick={onClick}>{text}</button>;
});

const UseCallbackDemo = () => {
  const [count1, setCount1] = useState(0);
  const [count2, setCount2] = useState(0);

  const handleClick1 = useCallback(() => {
    setCount1(prev => prev + 1);
  }, []);

  const handleClick2 = useCallback(() => {
    setCount2(prev => prev + 1);
  }, []);

  return (
    <div>
      <h2>With useCallback:</h2>
      <p>Count 1: {count1}</p>
      <p>Count 2: {count2}</p>
      <Button onClick={handleClick1} text="Button 1" />
      <Button onClick={handleClick2} text="Button 2" />
    </div>
  );
};

export default UseCallbackDemo;