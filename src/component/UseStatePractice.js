// import React ,{useState}from 'react'

// function UseStatePractice() {
//     const [age,setAge]=useState(19)
    

//     let handleAge=()=>{
//         setAge(age+1)
//     }
//   return (
//     <div>
//         <h1> i am {age} year old</h1>

//         <button onClick={handleAge}>Change Age</button>
//     </div>
//   )
// }

// export default UseStatePractice

//2
import React ,{useState}from 'react'

function UseStatePractice() {
    const [age,setAge]=useState(19)
    const [sibling,checkSibling]=useState(1)
    

    let handleAge=()=>{
        setAge(age+1)
    }
  return (
    <div>
        <h1> i am {age} year old</h1>
        <p> i have {sibling} sibling</p>
        <button onClick={handleAge}>Change Age</button>
        <button onClick={()=>checkSibling(sibling+1)}>setSibling</button>
    </div>
  )
}

export default UseStatePractice