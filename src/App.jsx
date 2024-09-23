import { useEffect, useState } from 'react'
import Activity from './Activity'
import './App.css'
function App() {
  let [activity,setActivity] = useState(null)
  
  let getActivity = async () => {
    let response = await fetch("https://bored.api.lewagon.com/api/activity/");
      let json = await response.json();
      console.log(json);
      setActivity(json)
  }

  useEffect(() => {
    let fetchData = async () => {
      let response = await fetch("https://bored.api.lewagon.com/api/activity/");
      let json = await response.json();
      console.log(json);
      setActivity(json)
    }

    fetchData()
  },[])

  return (
    <>
  <h1>Activity app <button onClick={getActivity}>New Activity</button></h1>
  <Activity data={activity}
  />
    </>
  )
}

export default App
