

//Example - Injecting Dynamic Styles

import React, { useState, useInsertionEffect } from "react";

function UseInsertionEffectDemo (){
    const [ color, setColor] = useState("green");
    const styleTag = `
        .dynamic-text {
            color: ${color};
            transition: color 0.3s ease;
        }
    `;

    useInsertionEffect(()=>{
        const styleEl = document.createElement('style');
        styleEl.innerHTML = styleTag;
        document.head.appendChild(styleEl);

        return ()=>{
            document.head.removeChild(styleEl);
        }
    }, [color]);

    return (
        <div className="dynamic-text">
            <h2>Hello, Srinivas</h2>
            <button onClick={()=>setColor('red')} >Change color</button>
        </div>
    )
}

export default UseInsertionEffectDemo;