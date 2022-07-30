import React,{useState} from 'react'

function Todo() {
    const [task,setTask]=useState('')
    const [taskArray,setTaskArray]=useState([])
    
    let handleTask=(task)=>{
           setTaskArray([...taskArray,task])
           setTask("")
    }
  return (
    <div>
        <input type='text'  onChange={(e)=>setTask(e.target.value)} />
        <button onClick={()=>handleTask(task)}>Add task</button>
        <ul>
            {
                taskArray.map((task)=>{
                    return <li>{task}</li>
                })
            }
        </ul>
    </div>
  )
}

export default Todo