import { useState,useEffect } from "react";
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

  const [selectedTab,setSelectedTab]=useState('Open')

  function hadleAddTodo(newTodo){
    const newTodoList = [...todos,{input:newTodo,complete:false}]
    setTodo(newTodoList)
  }
  function handleCompleteTodo(index) {
    let newTodoList = [...todos]
    let completedTodo = todos[index]
    completedTodo['complete'] = true
    newTodoList[index] = completedTodo
    setTodo(newTodoList)
}

  function handleDeleteTodo(index){
    let newTodoList=todos.filter((val,valIndex)=>{
      return valIndex !==index
    })
    setTodo(newTodoList)
  }
  useEffect(()=>{},[])
  return (
   <>
    <Header todos={todos}/>
    <Tabs selectedTab={selectedTab} 
    setSelectedTab={setSelectedTab} 
    todos={todos}/>
    <TodoList handleCompleteTodo={handleCompleteTodo} handleDeleteTodo={handleDeleteTodo} selectedTab={selectedTab} todos={todos}/>
    <TodoInput hadleAddTodo={hadleAddTodo}/>
   </>
  )
}

export default App
