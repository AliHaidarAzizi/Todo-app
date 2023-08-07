
function Button(props) {
    
    
    return(
        
            <button
                className=" bg-purple-600 p-4 cursor-pointer rounded-lg w-32 text-lg  font-bold hover:bg-purple-200  ease-in-out duration-200 "

                {...props}
            >
                {props.children}
            </button>
    )
}

export default Button;