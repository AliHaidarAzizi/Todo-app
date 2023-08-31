import { useState, useEffect } from 'react'
import Calculator from './components/Calculator'
import Counter from './components/Counter'
import TodoComponent from './components/TodoComponent'
import Modal from './components/Modal'
import Form from './components/Form'
import Weather from './components/weather'

function App() {
  const [name, setName] = useState('')
  const [show, setShow] = useState(false)

  const OnSubmitProps1 =(event) => {
    event.preventDefault();
    const newValue = event.target.userName.value

    
    setName(newValue)
  }
  useEffect(()=> {

    name?setShow(true):null
  },[name])

  


    

  return (
    <>
    <div className=' dark:bg-slate-800 min-h-screen flex flex-col items-center justify-center font-sans gap-3 p-4'> 
      <h1 className=' text-white text-5xl mb-2'>Hello {name} 
      </h1>
      {
        show? null : <Form 
              onSubmitProps={OnSubmitProps1}

      />}
      {
      show?<div className='flex gap-3 items-center justify-center flex-wrap '>
              <Weather />
              {/* <div className='flex flex-col gap-3 flex-wrap justify-center'>
                <TodoComponent />
                <Counter />
              </div>
              
              <Calculator /> */}

          </div>
      :null} 
    </div>
    </>
    
  )

}

// }

export default App
