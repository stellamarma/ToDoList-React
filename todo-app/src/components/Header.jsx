function Header(props){
    const { todos}=props

    return(
        <header>
            <h1 className="text-gradient">You have {todos.length} open {todos.length > 0 ? 'tasks' : 'task'}</h1>
        </header>
    )


}
export default Header;