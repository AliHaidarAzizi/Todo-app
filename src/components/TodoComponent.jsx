
import { useState } from "react";

function TodoComponent() {
    const [todo, setTodo] = useState("");
    const [todoList, setTodoList] = useState([]);

    const handleForm = (event) => {
    event.preventDefault();

    setTodoList([...todoList, {todoName:todo}]);
    setTodo("");
    };

    const deleteTodo = (deleteValue) => {
        const index = todoList.findIndex((val) => 
        val.todoName === deleteValue);

        if (index !== -1) {
            const restTodoList = [...todoList];
            restTodoList.splice(index, 1);
            setTodoList(restTodoList)

        }
    // const restTodoList = [...todoList.filter((val) => {
    //   return val.todoName !== deleteValue;
    // })]


    };
    return(
    
            <div className='w-[500px] text-center bg-white dark:bg-gray-500 p-5 rounded-2xl'>
                <h1 className='text-4xl font-bold mb-8 dark:text-white'>To Do List</h1>
                <form onSubmit={handleForm}>
                <input className=' border-2 border-gray-200 shadow-sm w-full p-2 placeholder:text-gray-500 rounded-2xl text-center mb-5' 
                
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
                        className=' bg-gray-200 flex mb-2 justify-between text-gray pt-1 pb-2 rounded-2xl text-lg px-5'>
                            {singleTodo.todoName}{" "}
                            <span onClick={() => deleteTodo(singleTodo.todoName)} 
                            className='text-red-600 cursor-pointer'>x</span>
                            
                        </li>
                        )})}
                    </ul>
                </div>
            </div>
        
    )
}

export default TodoComponent;