// propsDrealing
import React,{useState} from 'react'

function Parent() {
  const [fName,setFName]=useState('Tony')
  const [lName,setlName]=useState('Starc')
  return (
    <div>
      <h3>this is parent Component</h3>
      <ChildA fNameA={fName} lNameA={lName}/>
    </div>
  )
}

function ChildA({fNameA,lNameA}){
  return(
    <div>
      <h3>this is Child A</h3>
      <h1>this is component A {fNameA}{lNameA}</h1>
      <ChildB fNameB={fNameA} lNameB={lNameA}/>
    </div>
  )
}
function ChildB({fNameB,lNameB}){
  return(
    <div>
      <h3>this is Child B</h3>
      <h1>this is component B {fNameB} {lNameB}</h1>
      <ChildC fNameC={fNameB} lNameC={lNameB}/>
    </div>
  )
}
function ChildC({fNameC,lNameC}){
  return(
    <div>
      <h3>this is Child C</h3>
      <h1> this is compinent c {fNameC} {lNameC}</h1>
    </div>
  )
}

export default Parent