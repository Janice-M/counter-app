import React, { Component } from 'react';



class Counter extends Component {
    state = {
        count: 0,
        tags: ['tag1', 'tag2', 'tag3']
    };

    

    render() {
        return (

            <div >
                <h1 className='text-center'>  Grey's Shop</h1>
                <p className='text-center'>To obtain one must lose something of equal value, that is alchemy's first rule </p>
                <br />
                <br />
                <br />
                <p>this is a fullmetal alchemist</p> 

                <span className= {this.getBadgeClasses()}> {this.formatCount()}</span>
                <button className="btn btn-secondary btn-sm">increment button</button>

                <ul>
                {this.state.tags.map (tags => <li key= {tags}>{tags}</li>)}

                </ul>
            </div>
        );
    }

    getBadgeClasses()  {
        let classes = "badge m-2 badge-";
        classes += (this.state.count === 0) ? "warning" : "primary";
        return classes;
    }

    formatCount() {
        const { count } = this.state;
        return count === 0 ? 'Zero' : count;
    }
}

export default Counter;