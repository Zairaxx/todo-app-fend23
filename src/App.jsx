import { useState } from 'react'
import TodoList from './components/TodoList';
import './App.css'
import NewTodo from './components/NewTodo';

function App() {
  let [todos,setTodos] = useState([
    {
    title:"Todo #1",
    desc:"En beskrivning",
    completed: false
  },
  {
    title:"Todo #2",
    desc:"En beskrivning",
    completed: false
  },
  {
    title:"Todo #3",
    desc:"En beskrivning",
    completed: false
  },{
    title:"Todo #4",
    desc:"En beskrivning",
    completed: true
  },
  {
    title:"Todo #5",
    desc:"En beskrivning",
    completed: true
  }
  ]);

  let addTodo = () => {
    let todoTitle = document.querySelector("#title").value;
    let todoDesc = document.querySelector("#desc").value;
    let newTodo = {
      title: todoTitle,
      desc: todoDesc,
      completed:false
    }
    let updatedTodos = [newTodo, ...todos]
    setTodos(updatedTodos)
  }

  let deleteTodo = (index) => {
    //Ta bort todo ur arrayen, och ersätt statet med ny array
    let updatedTodos = todos.filter((todo,i) => i !== index)
    
    setTodos(updatedTodos);
  }

  let completeTodo = (index) => {
    //Ändra en property i vald todo, och updatera state.

    todos[index].completed = false;

    let updatedTodos = [...todos];
    updatedTodos[index].completed = true;
    setTodos(updatedTodos)
  }

  return (
    <>
      <NewTodo addTodo={addTodo}/>
      <h1>Todo-application</h1>
      <TodoList todos={todos} deleteTodo={deleteTodo} completeTodo={completeTodo}/>
    </>
  )
}

export default App
