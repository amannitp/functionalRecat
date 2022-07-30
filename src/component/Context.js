import React,{useState,useContext} from 'react'

const contex=React.createContext(null)
function Context() {
  const [fName,setFName]=useState('Tony')
  const [lName,setlName]=useState('Starc')
  return (

     <contex.Provider value={{fName,lName}}>
            <h3>this is parent Component</h3>
             <ChildA/>
      </contex.Provider>
  )
}

function ChildA(){
  return(
    <div>
      <h3>this is Child A</h3>
      <ChildB/>
    </div>
  )
}
function ChildB(){
  return(
    <div>
      <h3>this is Child B</h3>
      <ChildC/>
    </div>
  )
}
function ChildC(){
    const {fName,lName}=useContext(contex)
  return(
    <div>
      <h3>this is Child C</h3>
      <h1> this is component c {fName} {lName}</h1>
    </div>
  )
}

export default Context