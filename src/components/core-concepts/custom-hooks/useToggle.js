

/*
A custom hook is a JavaScript function that starts with use and internally uses one or more built-in React hooks (useState, useEffect, etc.) to encapsulate reusable logic.

*/

//Example: useToggle Hook

import React, { useState } from "react";

function useToggle(initialValue = false) {
    const [state, setState ] = useState(initialValue);
    const toggle = () => setState(prev => !prev);
    return [state, toggle];
};

//Use of UseToggle hook

function ToggleButton(){
    const [isOn, toggle] = useToggle();

    return (
        <button onClick={toggle}>
            {isOn ? "ON": "OFF"}
        </button>
    )
}

export default ToggleButton;