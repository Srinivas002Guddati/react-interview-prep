
/*
React.memo() is a higher-order component provided by React that recollects the rendered output of a functional component. That component is similar to `shouldComponentUpdate()` in class components but for functional components. When you wrap a functional component with `React.memo()`, React will only re-render the component if its props have changed.

*/

//Syntax:

//const MemoizedComponent = React.memo(FunctionalComponent);

import React, {PureComponent} from "react";

const MyComponent = ({ data }) =>{
    console.log("rendering?")
    return <div>{data}</div>
};

const MomoizedComponent = React.memo(MyComponent);

const ParentComponent = ()=>{
    const [value, setValue] = React.useState(0);

    return(
        <div>
            <button onClick={()=>setValue(value+1)}>Increment</button>
            <MomoizedComponent data={value} />

        </div>
    )
};

//export default ParentComponent;

/*
PureComponent:
PureComponent is a base-class component provided by React that implements a shallow comparison of props and states to determine if a component should re-render.that is particularly useful for class components to optimize performance.
*/

//Example: 

class  ExampleComponent extends PureComponent {
    constructor(props){
        super(props);
        this.state = {
            count:0
        }
    }
    handleClick = () =>{
        this.setState(prev =>({
            count: prev.count + 1
        }))
    }

    render(){
        console.log('Render called');
        return(
            <div>
                <h1> Count: {this.state.count} </h1>
                <button onClick={this.handleClick}>Increment</button>
            </div>
        )
    }
}
export default ExampleComponent;
