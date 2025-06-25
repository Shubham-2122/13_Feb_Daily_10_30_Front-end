import React from 'react'
import AHeader from '../Acoman/AHeader'
import ANavs from '../Acoman/ANavs'

function Dashboard() {
  return (
    <div>
      <AHeader />
      <ANavs title="Admin Dashboard" name="Dashboard" />
      <h1 className='text-center'>Hello Admin Dashboard</h1>
    </div>
  )
}

export default Dashboard
