import { useState } from 'react'
import './App.css'
import Component from './Component'
function App() {

  let [show,setShow] = useState(false)

  return (
    <>
    <h1>React Component Lifecycle</h1>
    <button onClick={() => {setShow(!show)}}>Toggle Show</button>
    {show && <Component/>}


    </>
  )
}

export default App
