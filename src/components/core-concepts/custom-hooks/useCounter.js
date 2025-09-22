
import React, { useState } from "react";


//Custom for UseCounter

function UseCounter(initialValue = 0) {

    const [ count, setCount ] = useState(initialValue);

    const increment = () => setCount(c => c+1);
    const decrement = () => setCount(c => c-1);
    const reset = () => setCount(initialValue);

    return[count, increment, decrement, reset];

};

//Usage of UseCounter hook

function CounterComponent (){
    const [count, increment, decrement, reset] = UseCounter(0);

    return(
        <div>
            <h2>Count: {count} </h2>
            <button onClick={increment}>Increment</button>
            <button onClick={decrement}>Decrement</button>
            <button onClick={reset}>Reset</button>
        </div>
    );
}

export default CounterComponent;
