import React, { useState } from 'react';

const UseTimer = (initialTime=40) => {
   const [time,setTime]= useState(initialTime)
   const decrement=()=>{
    setTime(time-1)
   }
   const reset=()=>{
    setTime(initialTime)
   }
    return [time ,decrement,reset];
}

export default UseTimer;
