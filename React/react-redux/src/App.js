import React from 'react'
import Count from './features/Counter/Count'
import TodoList from './features/Todo/TodoList'
import Addtodo from './features/Todo/Addtodo'

function App() {
  return (
    <div>
      <h1>Hello this react + redux App</h1>
      {/* <Count /> */}
      <Addtodo />
      <TodoList />
    </div>
  )
}

export default App
