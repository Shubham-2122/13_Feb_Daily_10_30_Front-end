import React, { useState } from 'react'

function Funcobje() {

    const [data, setdata] = useState({
        name: "inyat",
        count: 0,
        isImage: true
    })

    // console.log(data)

    return (
        <div>
            <h1>hello name {data.name}</h1>
            <button onClick={() => setdata({ ...data, name: "Shubham" })}>Chnage name</button>
            <button onClick={() => setdata({ ...data, name: "uttam" })}>Chnage name2</button>

            <h1>hello count : {data.count}</h1>
            <button onClick={() => setdata({ ...data, count: data.count + 1 })}>Increment</button>
            <button onClick={() => setdata({ ...data, count: data.count - 1 })}>Dencrement</button>
            <button onClick={() => setdata({ ...data, count: 0 })}>Zero</button>
        </div>
    )
}

export default Funcobje
