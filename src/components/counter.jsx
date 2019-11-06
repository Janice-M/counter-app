import React, { Component } from 'react';



class Counter extends Component {
    state={
        count: 0
    };
    render() { 
        return (

        <React.Fragment >
                <h1 class='text-center'>  Grey's Shop</h1>
                <br/>
                <br/>

                <span> {this.formartCount()}</span>
                <button>Increment</button>

        </React.Fragment>
        );
    }

    formatCount (){
        const {count} = this.state;
        return count === 0 ?<h1>Zero</h1> :count;
    }
}
 
export default Counter;