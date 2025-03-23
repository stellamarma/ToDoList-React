import { useState } from "react";
import Header from "./components/Header";
import Tabs from "./components/Tabs";
import TodoInput from "./components/TodoInput";
import TodoList from "./components/TodoList";


function App() {
  // const todos=[
  //   {input:'Wash dishes',complete:true},
  //   {input:'Go for walk',complete:false}
  // ]
  const [todos,setTodo]=useState([])

  function hadleAddTodo(newTodo){
    const newTodoList = [...todos,{input:newTodo,complete:false}]
    setTodo(newTodoList)
  }
  function hadleEditTodo(){
    
  }
  function hadleDeleteTodo(){
    
  }
  return (
   <>
    <Header todos={todos}/>
    <Tabs todos={todos}/>
    <TodoList todos={todos}/>
    <TodoInput hadleAddTodo={hadleAddTodo}/>
   </>
  )
}

export default App
