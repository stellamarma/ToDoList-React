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
    handleSaveDate(newTodoList)
  }
  function handleCompleteTodo(index) {
    let newTodoList = [...todos]
    let completedTodo = todos[index]
    completedTodo['complete'] = true
    newTodoList[index] = completedTodo
    setTodo(newTodoList)
    handleSaveDate(newTodoList)
}

  function handleDeleteTodo(index){
    let newTodoList=todos.filter((val,valIndex)=>{
      return valIndex !==index
    })
    setTodo(newTodoList)
  }
  function handleSaveDate(currTodos){
    localStorage.setItem('todo-app',JSON.stringify({todos:currTodos}))
  }
  useEffect(()=>{
    if(!localStorage || !localStorage.getItem('todo-app')){return}
    let db=JSON.parse(localStorage.getItem('todo-app'))
    setTodo(db.todos)
  },[])
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
