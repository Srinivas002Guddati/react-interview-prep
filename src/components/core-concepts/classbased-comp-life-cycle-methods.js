import React from 'react';
import ReactDOM from 'react-dom';

class Test extends React.Component {
    constructor(props){
        super(props);
        this.state = { hello: 'world!'}
    }

    componentDidMount(){
        console.log("componentDidMount");
    }

    changeState(){
        this.setState({ hello: 'How are you!'})
    }

    render(){
        return(
            <div>
                <h1>
                    Hello { this.state.hello}
                </h1>
                <h2>
                    <a onClick={this.changeState.bind(this)}> Press Here!</a>
                </h2>
            </div>
        )
    }

    shouldComponentUpdate(nextProps, nextState){
        console.log('shouldComponentUpdate()');
        return true;
    }
    componentDidUpdate(){
        console.log("componentDidUpdate");
    }

}

// const roo = ReactDOM.createRoot(
//     document.getElementById('root')
// );
// root.render(<Test />);

export default Test;