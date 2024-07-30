import axios from "axios"
import { createContext, useCallback, useEffect, useState } from "react"
import {v4 as uuid} from 'uuid'

export const usersContext=createContext()
const UsersContextProvider=({children})=>{
    const [usersArr,setUsers]= useState(null
       
    )
    // [
    //     { id: uuid(), name: "Ahmed" ,age:20 },
    //     { id: uuid(), name: "Mohamed",age :22 },
    //     { id: uuid(), name: "Ali" ,age :32},
    //     { id: uuid(), name: "Esraa" ,age :30},
    //     { id: uuid(), name: "Mariam" ,age :12},
    
    
    // ]
        const [counter,setCounter]=useState(0)
        const [disabled,setDisabled]=useState(false)
    const addUser=(userData)=>{
      setCounter((oldCounter)=>oldCounter+1)
      console.log(counter);
      if (counter>=3)
          setDisabled(true)
      console.log(userData);
      // usersArr.push(userData)
      setUsers([...usersArr,{...userData,id:uuid(),age:+userData.age}])
  }
  
  const incAge=useCallback((userId)=>{
    setUsers((oldUsers)=>oldUsers.map((u)=>u.id===userId?{...u,age:u.age+1}:{...u}))
  },[])
  
  useEffect(()=>{
    axios.get("https://jsonplaceholder.typicode.com/users").then(res=>setUsers(res.data))
  },[])
  
  return <usersContext.Provider value={{usersArr,incAge,addUser,counter,disabled}}>
{children}
  </usersContext.Provider>

}
export default UsersContextProvider;