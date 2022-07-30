import React,{useState} from 'react'

function Demo(){
    const [count,setCounter]=useState(0)
    const [input,setInput]=useState("")
    return (
        <div>
            <h1> count is : {count}</h1>
            <input type= "text" onChange={(e)=>setInput(e.target.value)}  />
            <button onClick={()=>setCounter(count+1)}>+</button>
            <button onClick={()=>setCounter(count-1)}>-</button>
            <h1>{input}</h1>
        </div>
    )
}
export default Demo