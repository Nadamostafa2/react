import React, { useState } from 'react';

const Search = ({searchWord}) => {
    const [word,setWord]=useState("")
    const handleChange=(e)=>{
        setWord(e.target.value)
        searchWord(e.target.value)
    }
    return (
        <div>
            <input type="text" placeholder="Search..." value={word} onChange={handleChange}/>
        </div>
    );
}

export default Search;
