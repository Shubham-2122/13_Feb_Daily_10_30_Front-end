// useRef :- dom real manuplation chnage kar 
//  re-reding stop data 
// useRef is a React Hook that lets you reference a value that’s not needed for rendering.

import React, { useRef } from 'react'
import Headers from '../layout/Comana/Headers'

function Useref() {

    const refelemt = useRef()
    const refdata = useRef()

    const getdata = () => {
        refelemt.current.focus();
        refelemt.current.style.background = "red";
        refelemt.current.style.color = "blue";
    }

    return (
        <div>
            <Headers />

            <h1>hello Use ref</h1>

            <input type="text" ref={refelemt} className='mx-5' placeholder='Enter your name' />
            <input type="text" ref={refdata} className='mx-5' placeholder='Enter your ' />
            <button onClick={getdata}>Check it</button>

        </div>
    )
}

export default Useref
