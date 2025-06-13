// useReducer :- comana logic / complex state manage 
// useState :- name,setname counting
// const [name,dispatch] = useReducer(reducer,initialstate)

import React, { useReducer } from 'react'
import Headers from '../layout/Comana/Headers';

let initialstate = 0

export const reducer=(state,action)=>{
    switch (action) {
        case 'increment':
            return state + 1;
            break;
        case 'decrement':
            return state - 1;
            break;
        default:
            return initialstate
            break;
    }
}


function Usered() {

    const [count,dispatch] = useReducer(reducer,initialstate)

    console.log(count)

    return (
    <div>
      <Headers />

      <h1>hello this Usereducer hooks</h1>
      <h1>Hello count : {count}</h1>
      <button onClick={()=>dispatch('increment')}>increment</button>
      <button onClick={()=>dispatch('decrement')}>decrement</button>
    </div>
  )
}

export default Usered
