import { useEffect, useState } from "react"

let Component = () => {
    let [count,setCount] = useState(0);
    
    useEffect(() => {
        console.log("Mounting..");
        //Unmounting
        return () => { console.log("Unmounting. Goodbye!")}
    },[])

    useEffect(() => {
        if(count !== 0){
            console.log("Updating count..")
        }
    },[count])


    return(
    <>
        <h2>I'm alive! Count: {count}</h2>
        <button onClick={()=> {setCount(count+1)}}>+</button>
        
    </>)
}

export default Component