import { useState } from "react";
function TodoInput(props){
    const {hadleAddTodo}=props
    const [inputValue,setInputValue]=useState('')

    return(
        <div className="input-container">
            <input value={inputValue} onChange={(e)=>{
                setInputValue(e.target.value)

            }} placeholder="Add task" />
            <button onClick={()=>{ 
                if(!inputValue){return}
                hadleAddTodo(inputValue)
                setInputValue('')
            }}>
            <i className="fa-solid fa-plus"></i>
            </button>

        </div>   
    )

}
export default TodoInput;