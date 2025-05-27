// State :- varibale
// state :- we can change/modify.
// state :- use we can same component
// class and function
// class :- constro :- this.state define
// how to change :- inbuilt this.setstate :- value change use  funtion
// class as object inner as arry / object


import React, { Component } from 'react'
import Image from './Image';

class ClassState extends Component {
    constructor() {
        super();
        this.state = {
            name: "Uttam patel",
            count: 0,
            isimage: true
        }
    }

    incrementby2=()=>{
        this.setState({
            count : this.state.count + 2
        })
    }

    render() {
        console.log(this.state)
        return (
            <div>
                <h1>hello this class in State</h1>
                {/* use state this.state.objectname */}
                <h1>Hello name :- {this.state.name}</h1>
                <button onClick={() => this.setState({ name: "inyat" })}>Change name</button>
                <button onClick={() => this.setState({ name: "Pintu" })}>Chnage name2</button>

                <h1>Hello count :- {this.state.count}</h1>

                <button onClick={() => this.setState({ count: this.state.count + 1 })}>increment</button>
                <button onClick={() => this.setState({ count: this.state.count - 1 })}>decrment</button>
                <button onClick={() => this.setState({ count: 0 })}>Zero</button>
                <button onClick={this.incrementby2}>Incmrent by 2</button>

                <br /> <br /> <br />
                <button onClick={() => this.setState({ isimage: false })}>Hide</button>
                <button onClick={() => this.setState({ isimage: true })}>Show</button>

                <button onClick={() => this.setState({ isimage: !this.state.isimage })}>Toggle</button>

                {
                    (this.state.isimage) ? <Image /> : false
                }


            </div>
        )
    }
}

export default ClassState
