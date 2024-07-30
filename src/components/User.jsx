import Types from "prop-types"
import { memo } from "react";
import classes from "../styles/User.module.css"
import { Link } from "react-router-dom";
const User= (props)=> {
// console.log(props);
const {id, name ,age, children ,incrementFunc}=props

const handleClick=()=>{
    // age++;
    incrementFunc(id)
}
return <div style={{backgroundColor:"violet" ,margin:"10px" ,padding:"10px "}}>
    {/* <h1>hiii</h1> */}
    <div>Id :{id}</div>
    <div>Name : {name}</div>
    {/* <div>Age : {age?age:18}</div> */}
    {/* <div>Age : {age || 20}</div> */}
    {age&&<div>Age : {age}</div>}
    <button onClick={handleClick} className={classes.btn1}> inc Age</button>
    {/* <div>{children}</div> */}
    <Link to={`/users/${id}`}>
    <button > see More...</button>
    </Link>




</div>
}
User.propTypes = {
    id: Types.number.isRequired,
    name:Types.string.isRequired,
    age:Types.number
}
// User.defaultProps={
//     age:30

// }
export default memo(User);

