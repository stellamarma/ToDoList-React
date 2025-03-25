import TodoCart from "./TodoCart";

function TodoList(props){
    const {todos,selectedTab}=props
    
    const filterTodoList= selectedTab==='All'?
    todos : 
    selectedTab==='Completed'?
        todos.filter(val=>val.complete):
        todos.filter(val=>!val.complete)

    return(
        <>
            {filterTodoList.map((todo,todoIndex)=>{
                return(
                    <TodoCart 
                    key={todoIndex} 
                    todoIndex={todos.findIndex(val=>val.input==todo.input)}
                    {...props}
                    todo={todo}/>
                )
            })}
        </>   
    )


}
export default TodoList;