import Header from "./components/Header";
import Tabs from "./components/Tabs";
import TodoInput from "./components/TodoInput";
import TodoList from "./components/TodoList";


function App() {
  const todos=[
    {input:'Wash dishes',complete:true},
    {input:'Go for walk',complete:false}
  ]

  return (
   <>
    <Header todos={todos}/>
    <Tabs todos={todos}/>
    <TodoList todos={todos}/>
    <TodoInput />
   </>
  )
}

export default App
