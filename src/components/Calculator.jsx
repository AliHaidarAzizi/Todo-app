import { useState } from "react"


function Calculator() {
    
    const [result, setResult] = useState("")

    const handleClick = event => setResult(result.concat(event.target.id)) 

    const clear = () => setResult("")
    const deleteEl = () => setResult(result.slice(0, -1));
    const calculate = () => {
        try{
        setResult(eval(result).toString())
        } catch (error) {
        setResult("Error")
        }

    }

    return (

        <div className="flex flex-col w-[500px] text-center bg-white p-5 rounded-lg gap-2">
            <h1 className=" mb-2 text-lg font-bold">Calculator</h1>
            <div className="calculator">
                <input type="text" className=" text-lg bg-slate-200 text-blue-700 p-2 rounded-md py-4 w-full text-right" value={result} disabled />
                
                <div className="buttons grid grid-cols-4 mt-4 gap-1 items-center justify-center ">
                      <button className="operator bg-slate-400 ease-in-out duration-200 hover:bg-slate-600 rounded-md p-4" onClick={clear}>AC</button>
                      <button className="operator bg-slate-400 ease-in-out duration-200 hover:bg-slate-600 rounded-md p-4" onClick={deleteEl}>DEL</button>

                      <button id="." className="operator bg-slate-400 ease-in-out duration-200 hover:bg-slate-600 p-4 rounded-md" onClick={handleClick}>.</button>
                      <button id="/" className="operator bg-slate-400 ease-in-out duration-200 hover:bg-slate-600 p-4 rounded-md" onClick={handleClick}>/</button>

                      <button id="7" className="number bg-slate-400 ease-in-out duration-200 hover:bg-slate-600 p-4 rounded-md" onClick={handleClick}>7</button>
                      <button id="8" className="number bg-slate-400 ease-in-out duration-200 hover:bg-slate-600 p-4 rounded-md" onClick={handleClick}>8</button>
                      <button id="9" className="number bg-slate-400 ease-in-out duration-200 hover:bg-slate-600 p-4 rounded-md" onClick={handleClick}>9</button>

                      <button id="*" className="operator bg-slate-400 ease-in-out duration-200 hover:bg-slate-600 p-4 rounded-md" onClick={handleClick}>X</button>

                      <button id="4" className="number bg-slate-400 ease-in-out duration-200 hover:bg-slate-600 p-4 rounded-md" onClick={handleClick}>4</button>
                      <button id="5" className="number bg-slate-400 ease-in-out duration-200 hover:bg-slate-600 p-4 rounded-md" onClick={handleClick}>5</button>
                      <button id="6" className="number bg-slate-400 ease-in-out duration-200 hover:bg-slate-600 p-4 rounded-md" onClick={handleClick}>6</button>

                      <button id="-" className="operator bg-slate-400 ease-in-out duration-200 hover:bg-slate-600 p-4 rounded-md" onClick={handleClick}>-</button>
                    
                      <button id="1" className="number bg-slate-400 ease-in-out duration-200 hover:bg-slate-600 p-4 rounded-md" onClick={handleClick}>1</button>
                      <button id="2" className="number bg-slate-400 ease-in-out duration-200 hover:bg-slate-600 p-4 rounded-md" onClick={handleClick}>2</button>
                      <button id="3" className="number bg-slate-400 ease-in-out duration-200 hover:bg-slate-600 p-4 rounded-md" onClick={handleClick}>3</button>

                      <button id="+" className="operator bg-slate-400 ease-in-out duration-200 hover:bg-slate-600 p-4 rounded-md" onClick={handleClick}>+</button>

                      <button id="00" className="number bg-slate-400 ease-in-out duration-200 hover:bg-slate-600 p-4 rounded-md" onClick={handleClick}>00</button>
                      <button id="0" className="number bg-slate-400 ease-in-out duration-200 hover:bg-slate-600 p-4 rounded-md" onClick={handleClick}>0</button>

                      <button id="=" className="operator col-span-2 bg-slate-400 ease-in-out duration-200 hover:bg-slate-600 p-4 rounded-md" onClick={calculate}>=</button>


                    
                </div>

            </div>
        </div>
    )
}

export default Calculator;

