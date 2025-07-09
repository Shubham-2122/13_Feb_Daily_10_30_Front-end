import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Create from './Compont/Create'
import Navabar from './Compont/Navabar'
import Editprofile from './Compont/Editprofile'
import Read from './Compont/Read'

function App() {
  return (
    <BrowserRouter>
    <div>
      <Navabar />
        <Routes>
          <Route path='/' element={<Read />} />
          <Route path='/new' element={<Create />} />
          <Route path='/edit/:id' element={<Editprofile />} />
        </Routes>
    </div>
    </BrowserRouter>
  )
}

export default App
