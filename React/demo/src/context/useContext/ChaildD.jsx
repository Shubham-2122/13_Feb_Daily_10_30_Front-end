import React, { useContext } from 'react'
import { data } from './ChaildA'

function ChaildD() {

    const {name,setname} = useContext(data)
    
  return (
    <div>
      <h1>Hello this Chaild D</h1>
      <h1>hello name :- {name}</h1>
      <button onClick={()=>setname("het patel")}>Chnage name</button>
    </div>
  )
}

export default ChaildD
