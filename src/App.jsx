import { useState } from 'react'

function App() {
  const [todo, setTodo] = useState("");
  const [todoList, setTodoList] = useState([]);

  const handleForm = (event) => {
   event.preventDefault();

   setTodoList([...todoList, {todoName:todo}]);
   setTodo("");
  };

  const deleteTodo = (deleteValue) => {
    const restTodoList = [...todoList.filter((val) => {
      return val.todoName !== deleteValue;
    })]

    setTodoList(restTodoList);

  };
  return (
    <div className='bg-gray-300 w-full h-screen flex items-center'>
      <div className='w-[500px] mx-auto text-center bg-white p-5 rounded-2xl'>
        <h1 className='text-5xl font-bold mb-8'>Things to Do</h1>
        <form onSubmit={handleForm}>
          <input className=' border-2 border-black w-full p-2 placeholder:text-gray-500 rounded-2xl text-center mb-5' 
          
          type="text" 
          
          placeholder='Add item'
          value={todo}
          onChange={(event) => setTodo(event.target.value)}

          />
          <button type="submit" className='bg-red-600 text-white py-2 px-8 rounded-lg mb-8' >Add</button>
        </form>
        <div className="todo-show-area">
          <ul>
            {todoList.map((singleTodo, index) => {

              return (
              <li key={index} 
              className='bg-black flex mb-2 justify-between text-white py-2 rounded-2xl text-2xl px-5'>
                {singleTodo.todoName}{" "}
                <span onClick={() => deleteTodo(singleTodo.todoName)} 
                className='text-red-600 cursor-pointer'>x</span>
                
              </li>
              );
            })};
          </ul>
        </div>

      </div>
    </div>
  )
}

export default App
