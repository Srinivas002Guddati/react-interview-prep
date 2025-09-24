
/*
 useMemo is a React hook that memoizes the result of a computation, so it only recalculates when its dependencies change. It's perfect for avoiding expensive recalculations during re-renders.
*/
/*
 useMemo is a React hook that memoizes the result of a computation, so it only recalculates when its dependencies change. It's perfect for avoiding expensive recalculations during re-renders.
*/

//Example:

import React, { useState, useMemo} from 'react';

function UseMemoDemo(){
    const [count, setCount] = useState(0);
    //Expensive computation simulated
    const doubleCount = useMemo(()=>{
        console.log("calculating double...");
        return count * 2;
    }, [count]);

    return(
        <div>
            <p>Double: {doubleCount}</p>
            <button onClick={()=>setCount(count+1)}>Increment</button>
        </div>
    )
};

export default UseMemoDemo;