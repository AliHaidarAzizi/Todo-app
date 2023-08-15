import { useState, useEffect } from "react";

function Form({onSubmitProps}) {

    useEffect(()=> {


    }, [])

    return(
        <>
        <div className="text-white">
            <h2>Basic Information</h2>
            <form  className="flex flex-col " onSubmit={onSubmitProps} action="">
                <input type="text" name="userName" className="text-black rounded-sm"  placeholder="Fill in your Name" 
                />
                {/* <input type="number" name="userAge" className="text-black" placeholder="Fill in your Age" /> */}
                <button type="submit" className="mt-2 bg-slate-300 text-slate-800 rounded-sm hover:bg-slate-900 hover:text-white ease-in-out duration-300">Send
                </button>

            </form>
        </div>
        
    
        </>
        )
        
}

export default Form;
