import { useState } from "react";
import Button from "./Button";

function Counter() {
    const [count, setCount] = useState(0);

    function handleAddCount() {
        setCount(count + 1);
    }

    function handleMinusCount() {
        setCount(count - 1);
    }

    return(
        <div className=" flex flex-col w-[500px] text-center bg-white p-5 rounded-lg gap-2">
            <h1 className="my-3 mb-5 text-5xl font-bold"
            >{ count }</h1>
            <div className="flex flex-row justify-evenly">
            <Button onClick={handleAddCount}>+1</Button>
            <Button onClick={handleMinusCount}>-1</Button>
            </div>
            
        </div>
    )
}

export default Counter;