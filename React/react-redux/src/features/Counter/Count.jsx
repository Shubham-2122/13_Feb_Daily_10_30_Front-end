import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { decrement, increment, zero } from './countSlice'

function Count() {
  // store name.inist

    const count = useSelector((state)=>state.count.value)

    console.log(count)

    const dispatch = useDispatch()

  return (
    <div>
      <h1>Hello count</h1>
      <h1>Count :- {count}</h1>
      <button onClick={()=>dispatch(increment())}>Increment</button>
      <button onClick={()=>dispatch(decrement())}>decrement</button>
      <button onClick={()=>dispatch(zero())}>Zero</button>
    </div>
  )
}

export default Count
