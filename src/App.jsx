import { useState, useEffect } from 'react'
import Calculator from './components/Calculator'
import Counter from './components/Counter'
import TodoComponent from './components/TodoComponent'
import Modal from './components/Modal'
import Form from './components/Form'

function App() {
  const [name, setName] = useState('World')
  const [show, setShow] = useState(false)

  const OnSubmitProps1 =(event) => {
    event.preventDefault();
    const newValue = event.target.userName.value

    
    setName(newValue)
  }
  console.log("render")
  useEffect(()=> {
    console.log("Name has Changed!")
    setShow(true)
  },[name])
    

  return (
    <>
    <div className=' dark:bg-slate-800 min-h-screen flex flex-col items-center justify-center font-sans gap-3 p-4'> 
      <h1 className=' text-white text-5xl mb-2'>Hello {name} 
      </h1>
      <Form 
            onSubmitProps={OnSubmitProps1}
            />
      {
      show?<div className='flex gap-3 items-center justify-center flex-wrap'>
          
          <div className='flex flex-col gap-3 flex-wrap justify-center'>
            <TodoComponent />
            <Counter />
          </div>
          
          <Calculator />

      </div>
      :null} 
    </div>
    </>
    
  )

}

// }

export default App
