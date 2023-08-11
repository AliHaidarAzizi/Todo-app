// import { useState } from 'react'
import Calculator from './components/Calculator'
import Counter from './components/Counter'
import TodoComponent from './components/TodoComponent'

function App() {


  return (
    <div className='bg-gray-300 min-h-screen flex flex-col items-center justify-center font-sans gap-3'>
      <TodoComponent />
      <Counter />
      <Calculator />

    </div>
  )


}

export default App
