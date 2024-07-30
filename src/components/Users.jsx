// import React from 'react';

import { useCallback, useContext, useEffect, useMemo, useState } from "react";
import User from "./User";
import {v4 as uuid} from "uuid"
import AddUser from "./AddUser";
import RecipeReviewCard from "./MUICard";
import axios from "axios";
import SimpleBackdrop from "./Spinner";
import UseTimer from "../hooks/UseTimer";
import { usersContext } from "../contexts/usersContextProvider";
import { useLoaderData } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { usersAction } from "../redux/store/slices/usersSlice";
const Users = () => {
    const usersArr=useSelector(state=>state.users.users)
    const {incAge,counter} =useContext(usersContext)
    const dispatch=useDispatch()
    // const usersArr=useLoaderData()
    // console.log(x)
    const [time,dec,reset]=UseTimer(50)
    // console.log(x);
    // useCallback(()=>{},[])

const adults=useMemo(()=>usersArr?.filter(user=>{
    console.log("heavy operation");
     return user.age>18}).length,[usersArr])
 
useEffect(()=>{
    dispatch(usersAction())
},[])

    
    
    console.log("ay7aga");

    // console.log(usersArr);

// useEffect(()=>{},[x,y])
//componentDidMount & componentDidUpdate
// useEffect (()=>{
//     console.log("hello");
// })

// componentDidMount
// useEffect (()=>{
//     console.log("hello");
// },[])

// componentDidMount & componentDidUpdate (counter)
// useEffect (()=>{
//     console.log("hello");
// },[counter])

//componentDidMount & componentWillUnMount
// useEffect(()=>{
// console.log("Mount");
//     return ()=>{
// console.log("willUnMount");
//     }
// },[])

// componentDidMount & cleanUp
// useEffect(()=>{
//     console.log("Mount");

//         return ()=>{
//     console.log("CleanUp");
//         }
//     })


// useEffect(()=>{
//     console.log("Mount");

//         return ()=>{
//     console.log("CleanUp");
//         }
//     },[counter])

// return null
if (!usersArr) return <SimpleBackdrop></SimpleBackdrop>
    return (
        <div>
            Time:{time} <button onClick={dec}>decrement</button>
            <button onClick={reset}>Reset</button>
            <br></br>
            Adults:{adults}
            <br></br>
            counter :{counter}
            
            <h1>Users</h1>
            {usersArr?.map((u)=>{return <User key={u.id} id={u.id} name={u.name} age={u.age} incrementFunc={incAge}>
                {/* <button>done</button>
                <button>done</button>
                <button>done</button>
                <button>done</button> */}
            </User>
            //  <RecipeReviewCard key={u.id} id={u.id} name={u.name} age={u.age} incrementFunc={incAge} ></RecipeReviewCard>
            // 
        })}
            {/* {usersArr.map((u)=>{return <User userr={u}></User>})} */}
            {/* {usersArr.map((u )=>{return <User key={uuid()} {...u}></User>})} */}

            
        </div>
    );
}

export default Users;
