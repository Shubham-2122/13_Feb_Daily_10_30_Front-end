import React from 'react'

function D({name,setname}) {
  return (
    <div>
       <h1>Hello this D component</h1>

       <h1>Hello D compone Name :- {name}</h1>
       <button onClick={()=>setname("Manav")}>Chnage name</button>
       
    </div>
  )
}

export default D
