import TodoCart from "./TodoCart";

function TodoList(props){
    const {todos}=props
    const tab='All'
    const filterTodoList= tab==='All'?
    todos : 
    tab==='Completed'?
        todos.filter(val=>val.complete):
        todos.filter(val=>!val.complete)

    return(
        <>
            {filterTodoList.map((todo,todoIndex)=>{
                return(
                    <TodoCart 
                    key={todoIndex} 
                    todo={todo}/>
                )
            })}
        </>   
    )


}
export default TodoList;