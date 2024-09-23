import Todo from "./Todo"

const TodoList = ({todos,deleteTodo,completeTodo}) => {
    return <>
            <h2>Todo list</h2>
            <ul>
                {
                 todos.map((todo,i) => <Todo data={todo} index={i} completeTodo={completeTodo} deleteTodo={deleteTodo}/>)
                }
            </ul>
           </>
}

export default TodoList