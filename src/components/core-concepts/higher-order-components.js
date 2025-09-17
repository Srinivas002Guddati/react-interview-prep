/*
What is a HOC?
A Higher-Order Component is a function that:
- Takes a component as input
- Returns a new component with enhanced behavior or props

*/

//Example: Add a static prop using HOC

//Define the HOC
const withCompanyName = (WrappedComponent) => {
    return function EnhancedComponent(props){
        return <WrappedComponent { ...props } company="Microsoft copilot" />
    };
}

export default withCompanyName;

//Create a simple component


export function Profile({name, company}){
    return (
        <div>
            <h2>{name}</h2>
            <p>Works at: {company}</p>
        </div>
    );
}

