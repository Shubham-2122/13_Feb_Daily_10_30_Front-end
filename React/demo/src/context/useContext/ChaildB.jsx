import React, { useContext } from 'react'
import { data } from './ChaildA'

function ChaildB() {

    const {count,setcount} = useContext(data)

  return (
    <div>
      <h1>Hello this Chaild B</h1>

      <h1>hello this count : {count}</h1>
      <button onClick={()=>setcount(count+1)}>incremnt</button>
    </div>
  )
}

export default ChaildB
