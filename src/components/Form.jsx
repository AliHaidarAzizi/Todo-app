import { useState, useEffect } from "react";

function Form({onSubmitProps}) {

    useEffect(()=> {


    }, [])

    return(
        <>
        <div className="text-white">
            <h2>Basic Information</h2>
            <form  className="flex flex-col " onSubmit={onSubmitProps} action="">
                <input type="text" name="userName" className="text-black"  placeholder="Fill in your Name" 
                />
                {/* <input type="number" name="userAge" className="text-black" placeholder="Fill in your Age" /> */}
                <button type="submit">Send
                </button>

            </form>
        </div>
        
    
        </>
        )
        
}

export default Form;
