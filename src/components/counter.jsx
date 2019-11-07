import React, { Component } from 'react';



class Counter extends Component {
    state={
        count: 0
        imageUrl: 'https://images.unsplash.com/photo-1453856908826-6bbeda0f8490?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=933&q=80'
    };
    render() { 
        return (

        <React.Fragment >
                <h1 class='text-center'>  Grey's Shop</h1>
                <br/>
                <br/>
                <img src= { this.state.imageUrl } alt=""/>
                <span> {this.formatCount()}</span>
                <button>Increment</button>

        </React.Fragment>
        );
    }

    formatCount (){
        const {count} = this.state;
        return count === 0 ? 'Zero' :count;
    }
}
 
export default Counter;