import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { addTodo } from './todoSlice'

function Addtodo() {

    const [form,setform] = useState("")

    const dispatch = useDispatch()

    const getsubmit=(e)=>{
        e.preventDefault();

        dispatch(addTodo(form))

        setform("")
    }


  return (
    <div>
      <form action="">
        <input type="text" value={form} onChange={(e)=>setform(e.target.value)}  placeholder='Enter your name' name="" id="" />
        <button onClick={getsubmit}>Addtodo</button>
      </form>
    </div>
  )
}

export default Addtodo
