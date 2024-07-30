import React, { useState } from 'react';
import Search from './search';
import Students from './Students';

const Root = () => {
    const [students,setStds]=useState([
        {id:1,name:"Ahmed"},
        {id:2,name:"Yossef"},
        {id:3,name:"Mohamed"},
        {id:4,name:"Fatma"},
        {id:5,name:"Abdo"},
        {id:6,name:"Omar"},


    ])
    const [filteredData,setFilteredData]=useState(students)
    const searchWord=(word)=>{
       setFilteredData( students.filter(std=>std.name.toLowerCase().includes(word.toLowerCase())))

    }
        return (
        <div style={{width:"80%" ,margin:"10px auto"}}>
           
            <Search searchWord={searchWord}></Search>
            <Students stds={filteredData}></Students>
        </div>
    );
}

export default Root;
