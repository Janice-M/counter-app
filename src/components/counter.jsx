import React, { Component } from 'react';



class Counter extends Component {
    state={
        count: 1
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
        return count === 0 ? 'zero':count;
    }
}
 
export default Counter;