import React,{useState,useEffect} from 'react'

function Ue() {
    const [count,setCount]=useState(0)
    const [name,changeName]=useState('aman')

    // useEffect(()=>{
    //     document.title=`count is ${count}`
    // })

    // useEffect(()=>{
    //     document.title=`count is ${count}` 

    // },[])// dependancy array

    useEffect(()=>{
        document.title=`count is ${count} ${name}`
    },[count,name])
  return (
    <div>
        <h1>count is : {count}</h1>
        <button onClick={()=>setCount(count+1)}>Increment</button>
        <button onClick={()=>setCount(count-1)}>decrement</button>
        <button onClick={()=>changeName('aniket')}>changeName</button>
        
    </div>
  )
}

export default Ue