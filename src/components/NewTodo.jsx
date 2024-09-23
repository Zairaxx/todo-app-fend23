const NewTodo = ({addTodo}) => {
    return <>
        <input type="text" placeholder='Titel' id="title"/>
        <input type="text"placeholder='Beskrivning' id="desc"/>
        <button onClick={addTodo}>Add</button>
    </>
}

export default NewTodo