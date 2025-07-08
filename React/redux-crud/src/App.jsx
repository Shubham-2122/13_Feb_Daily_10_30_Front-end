import React from 'react'
import Read from './Compont/Read'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Create from './Compont/Create'
import Navabar from './Compont/Navabar'

function App() {
  return (
    <BrowserRouter>
    <div>
      <Navabar />
        <Routes>
          <Route path='/' element={<Read />} />
          <Route path='/new' element={<Create />} />
        </Routes>
    </div>
    </BrowserRouter>
  )
}

export default App
