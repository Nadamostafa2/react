import React, { useContext, useEffect, useRef, useState } from 'react';
import classes from "../styles/AddUser.module.css"
import { useNavigate } from 'react-router-dom';
import { usersContext } from '../contexts/usersContextProvider';
import { useTranslation } from 'react-i18next';
import { useDispatch, useSelector } from 'react-redux';
import { changeLanguagee } from '../redux/store/slices/language';
import { changeCounter } from '../redux/store/slices/counter';
const AddUser = () => {
    const {addUser,disabled}=useContext(usersContext)
    // const  =props
    const [user,setUser]= useState({name:"" ,age:""})
    const pointer=useRef()
    const navigate=useNavigate()
    const {t,i18n}=useTranslation()
    const lang=useSelector(state=>state.language.language)
    const dispatch=useDispatch()
    // console.log(x)
    
    const handleSubmit=(event)=>{
        event.preventDefault();
        addUser(user)
setUser({name:"" ,age:""})
navigate("/users")
console.log(pointer);
dispatch(changeCounter(1))

    }
    useEffect(()=>{
        pointer.current.focus()
    },[])
    const handleChangeName=(event)=>{
setUser((oldUser)=>({...oldUser,name:event.target.value}))

        // setUser({...user,name:event.target.value})
        // console.log(event.target.value);
    }
    const handleChangeAge=(event)=>{
setUser((oldUser)=>({...oldUser,age:event.target.value}))
    }
   const handleChange=(event)=>{
    console.log(event.target.name);
    setUser((oldUser)=>({...oldUser, [event.target.name]:event.target.value}))

   }


    return (

        <div dir={`${lang==="en"?"ltr":"rtl"}`} style={{width:"80%" ,margin:"0 auto"}}>
            {lang}
           {i18n.language==="en"&& <button onClick={()=>{i18n.changeLanguage("ar")
            dispatch(changeLanguagee("ar"))
           }}>Ar</button>}
           {i18n.language==="ar"&& <button onClick={()=>{i18n.changeLanguage("en")
            dispatch(changeLanguagee("en"))
           }}>En</button>}
           
            <h1>{t("Add User")}</h1>
            <form onSubmit={handleSubmit}>
                <label>{t("Name")} : </label>
                <input ref={pointer} name='name' value={user.name} onChange={handleChange}></input>
                <br></br>
                <label>{t("Age")} : </label>
                <input name='age' value={user.age} onChange={handleChange}></input>
                <br></br>
                <input className={classes.btn1} disabled={disabled} type='submit' value={t("Submit")}></input>
            </form>
        </div>
    );
}

export default AddUser;
