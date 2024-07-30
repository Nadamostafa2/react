import React from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

const NavBar = () => {
    const lang=useSelector(state=>state.language.language)
    const counter=useSelector(state=>state.counter.counter)
    return (
        <div style={{display:"flex" ,justifyContent:"space-around",backgroundColor:"yellowgreen" ,padding:"20px"}}>
            {lang} , {counter}
            <Link to='/'>Home</Link>
            <Link to='/about'>About</Link>
            <Link to='/users'>Users</Link>
            <Link to='/users/add'>AddUser</Link>

        </div>
    );
}

export default NavBar;
