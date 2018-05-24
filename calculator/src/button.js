import React, { Component } from 'react';

class Button extends Component {
    constructor(props){
        super(props);
        this.hello = this.hello().bind(this);
        this.state = {
            name:'0'
        }
    }

    hello(num){
        this.setState({name:num})
    }
    render() {
        return (
           <button onClick={this.hello(1)}>{this.state.name}</button>
        );
    }
}

export default Button;