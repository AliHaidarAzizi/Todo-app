import { useState } from 'react'
import Calculator from './components/Calculator'
import Counter from './components/Counter'
import TodoComponent from './components/TodoComponent'
import Modal from './components/Modal'
import Form from './components/Form'

function App() {
  const [name, setName] = useState('World')

  const OnSubmitProps1 =(event) => {
    event.preventDefault();
    const newValue = event.target.userName.value

    
    setName(newValue)
  }
    

  return (
    <>
    <div className=' dark:bg-slate-800 min-h-screen flex flex-col items-center justify-center font-sans gap-3 p-4'> 
      <h1 className=' text-white text-5xl mb-2'>Hello {name} 
      </h1>
      <div className='flex gap-3 items-center justify-center flex-wrap'>
          <Form 
            onSubmitProps={OnSubmitProps1}
            />
          <div className='flex flex-col gap-3 flex-wrap justify-center'>
            <TodoComponent />
            <Counter />
          </div>
          
          <Calculator />

      </div>
        
    </div>
    </>
    
  )

}

// }

export default App
