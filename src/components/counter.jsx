import React, { Component } from 'react';



class Counter extends Component {
    state={
        count:0
    };
    render() { 
        return (

        <React.Fragment >
                <h1 class='text-center'>  Grey's Shop</h1>
                <br/>
                <br/>

                <span> {this.state.count}</span>
                <button>Increment</button>

        </React.Fragment>
        );
    }

    formatCount (){
        return this.state.count === 0 ? 'zero':this.state.count;
    }
}
 
export default Counter;