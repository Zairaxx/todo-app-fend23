const Todo = (props) => {

    return <li key={props.index}>
                <h3 className={props.data.completed && "completed"}>{props.data.title}
                    <button onClick={() => { props.deleteTodo(props.index)}}>X</button>
                    <button onClick={() => { props.completeTodo(props.index)}}>Complete</button>
                </h3>
                {!props.data.completed && <p>{props.data.desc}</p>}
            </li>
}

export default Todo