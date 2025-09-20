
/*
A Pure Component is a type of React component that only re-renders if the props or state it receives change. React provides React.PureComponent, which is a base class that automatically performs a shallow comparison of props and state to determine if a re-render is necessary.
*/

import React from 'react';

export default class ReactPureComp extends React.PureComponent {
    render(){
        return <h1>Welcome to React Tutorials</h1>
    }
}