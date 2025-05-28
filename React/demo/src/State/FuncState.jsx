// State :- varibale
// state :- we can change/modify.
// state :- use we can same component
// Hooks :- it's resuse , :- useState
// import {useState} from react
// const [name,setname] = useState("kdsjrk");
// hook define Function React v 16.8
// useState is a React Hook that lets you add a state variable to your component.


import React, { useState } from 'react'
import Image from './Image';

function FuncState() {

    // define,method
    const [name, setname] = useState("uttam");
    const [count, setcount] = useState(0);
    const [isimage, setisiamge] = useState(true)

    console.log(name)

    const incrementby2=()=>{
        setcount(count+2)
    }

    return (
        <div>
            <h1>hello THis state in function</h1>
            <h1>hello name :- {name}</h1>

            <button onClick={() => setname("Pintu")}>Chnage name</button>
            <button onClick={() => setname("Shubham ")}>CHnage name2</button>
            <h1>Hello count :- {count}</h1>

            <button onClick={() => setcount(count + 1)}>Increment</button>
            <button onClick={incrementby2}>Incmrent by 2</button>
            <button onClick={() => setcount(count - 1)}>Decrement</button>
            <button onClick={() => setcount(0)}> Zero</button>

            <br /> <br /> <br />
            <button onClick={() => setisiamge(false)}>Hide</button>
            <button onClick={() => setisiamge(true)}>Show</button>
            <button onClick={() => setisiamge(!isimage)}>Toggle</button>

            {
                (isimage) ? <Image /> : false
            }

        </div>
    )
}

export default FuncState
