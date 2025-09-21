import React, { useRef, useState, useLayoutEffect } from 'react';


// UseLayouEffect: is a React Hook that lets you run synchronous side effects after the DOM has been mutated but before the browser paints the screen

//Scenario: Measure DOM elements width before paint

function LayoutEffectDemo(){
    const [ width, setWidth ] = useState(0)
    const boxRef = useRef(null);

    useLayoutEffect(()=>{
        if(boxRef.current){
            const boxWidth = boxRef.current.getBoundingClientRect().width;
            setWidth(boxWidth);
        }
    }, []);


    return(
        <div>
            <div 
            ref={boxRef}
            style={{width: "50%", height:'100px', backgroundColor: 'lightblue'}}
            >
                Resize me!
            </div>
            <p>Measured width: {width}px</p>
            
        </div>
    )

}

export default LayoutEffectDemo;