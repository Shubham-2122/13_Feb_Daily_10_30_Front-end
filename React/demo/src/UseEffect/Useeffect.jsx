// useEffect :- function side effect
// useEffect :- function , depedn []
// useEffect :- api call live Reacr effect fetch and axios
//  useState :- combinetion :- array 
// useEffect(()=>{ functin api },[opaitonal])

import React, { useEffect, useState } from 'react'

function Useeffect() {
  
    const [name,setname] = useState("Het patel")

    // emty data
    // useEffect(()=>{
    //     console.log("outside Effect..!")
    //     return(()=>{
    //         console.log("inside effect")
    //     })
    // })

    // empty array without state
    // useEffect(()=>{
    //     console.log("outside Effect..!")
    //      return(()=>{
    //         console.log("inside effect")
    //        })
    // },[])

    // deped array state pass
    useEffect(()=>{
         console.log("outside Effect..!")
         return(()=>{
            console.log("inside effect")
            })
    },[name])

    return (
    <div>
        <h1>Hello This use Effect call</h1>

        <h1>hello name :- {name}</h1>
        <button onClick={()=>setname("shubham")}>Chnage name</button>
    </div>
  )
}

export default Useeffect
