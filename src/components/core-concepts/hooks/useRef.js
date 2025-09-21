

//Example - Accessing DOM elements

//Focus an input field when a button is clicked


import React, { useEffect, useRef, useState } from "react";


function UseRefDemo (){

    const inputRef = useRef(null);

    const handleClick = ()=>{
        inputRef.current.focus();
    };

    return(
        <div>
            <input ref={inputRef} type="text" placeholder="Type here..." />
            <button onClick={handleClick}>Focus Input</button>
        </div>
    )
};

export default UseRefDemo;

//Example - Tracking the previous value of a counter

export const CounterRef = () =>{
    const [ count, setCount] = useState(0);

    const prevCount = useRef();

    useEffect(()=>{
        prevCount.current = count;
    }, [count]);

    return (
        <div>
            <p>Current: { count} </p>
            <p>Previous: { prevCount.current} </p>
            <button onClick={()=>setCount(count +1 )}>Increment</button>
        </div>
    )
}


export const TimerRefDemo = ()=>{

    const [seconds, setSeconds] = useState(0);
    const timerRef = useRef(null);

    const startTimer = ()=>{
        if(!timerRef.current){
            timerRef.current = setInterval(()=>{
                setSeconds(prev => prev+1);
            }, 1000)
        }
    }

    const stopTimer = ()=>{
        clearInterval(timerRef.current);
        timerRef.current = null;
    }


    return(
        <div>
            <p>Seconds: {seconds} </p>
            <button onClick={startTimer}>Start</button>
            <button onClick={stopTimer}>Stop</button>
        </div>
    )
};
