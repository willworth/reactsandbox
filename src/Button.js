import React, { Component } from 'react';

class Button extends Component {
            //    OLD WAY
    //   constructor(props){
    //       super(props);
    //       this.state = { counter : 0 };
    //   }
    state = { counter: 0 };

    handleClick = () => {
        // this is comp instance
        this.setState({
            counter: this.state.counter + 1
        })
    };




    render() {
        return (
            <button onClick={this.handleClick}>
                {this.state.counter}
            </button>
        );
    }
}

export default Button;


