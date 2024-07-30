import React, { useContext, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { usersContext } from '../contexts/usersContextProvider';

const UserDetails = () => {
    const {userId}=useParams()
    const {usersArr}=useContext(usersContext)
    const [user,setUser]=useState()
    useEffect(()=>{
    setUser(usersArr.find(u=>u.id===+userId))
    },[])
    // console.log(x);
    return (
        <div>
            <h1>UserDetails of {userId}</h1>
            {user&&<h1>{user.name}</h1>}
        </div>
    );
}

export default UserDetails;
