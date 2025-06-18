import React from 'react'

function Border() {
    return (
        <div>
            <h1 className='border-2 border-amber-500 rounded-2xl'>Borde data</h1>
            <h1 className='border-4 border-red-500 border-dotted rounded-4xl'>Borde data</h1>
            <h1 className='border-8 border-green-500 border-dashed'>Borde data</h1>
            <h1 className='border-2 border-blue-500 border-double'>Borde data</h1>

            <h1 className='outline-1 outline-dashed'>Outline data</h1>
            <h1 className='outline-2 outline-dotted outline-emerald-700'>Outline data</h1>
            {/* <h1 className='outline-4'>Outline data</h1> */}
            {/* <h1 className='outline-8'>Outline data</h1> */}
        </div>
    )
}

export default Border
