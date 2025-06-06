import React, { createContext, useState } from 'react'
import ChaildD from './ChaildD'
import ChaildB from './ChaildB'

export const data = createContext()

function ChaildA() {
    const [name,setname] = useState("Manav")
    const [count,setcount] = useState(0)

    return (
    <div>
      <h1>Hello this Chaild A</h1>

      {/* usecontext */}
      {/* 1) create context 
      2) provider 
      3) usecontext */}

      <data.Provider value={{name,setname,count,setcount}} >
        <ChaildD />
        <ChaildB />
      </data.Provider>

    </div>
  )
}

export default ChaildA
