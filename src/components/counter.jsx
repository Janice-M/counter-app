import React, { Component } from 'react';



class Counter extends Component {
    state = {
        count: 0
    };

    

    render() {
        return (

            <div >
                <h1 className='text-center'>  Grey's Shop</h1>
                <br />
                <br />

                <span className="badge badge-primary m-"> 2{this.formatCount()}</span>
                <button className="btn btn-secondary btn-sm">Increment</button>

            </div>
        );
    }

    formatCount() {
        const { count } = this.state;
        return count === 0 ? 'Zero' : count;
    }
}

export default Counter;