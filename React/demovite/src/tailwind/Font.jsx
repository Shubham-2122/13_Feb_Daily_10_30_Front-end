import React from 'react'

function Font() {
  return (
    <div>
      <h1>hello this Font Property</h1>

      <h1 className='font-sans text-red-400 text-2xl'>Hello</h1>
      <h1 className='font-serif text-yellow-500 text-3xl'>Hello</h1>
      <h1 className='font-mono italic underline decoration-dotted decoration-1 decoration-amber-600 text-blue-400 text-4xl text-start'>Hello</h1>
      <h1 className='text-5xl font-extrabold overline uppercase text-green-500 text-center'>Hello</h1>
      <h1 className='text-6xl text-end text-fuchsia-500'>Hello</h1>
      <h1 className='text-7xl line-through decoration-2 decoration-double  text-blue-700'>Hello</h1>
    </div>
  )
}

export default Font
