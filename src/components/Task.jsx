
import axios from "axios";
import { Component, PureComponent } from "react";

class Task extends PureComponent{
    constructor(){
        super()
        this.state={task:null}
        console.log("constructor");
    }
    //syntax sugar
    // state={taskeName:"React"}
    componentDidMount(){
        console.log("componentDidMount");
axios.get("https://jsonplaceholder.typicode.com/todos/1").then(res=>this.setState({task:res.data}))   
       

        // fetch("https://jsonplaceholder.typicode.com/todos/1")
        // .then((res)=>res.json()).then((data)=>this.setState({task:data}))
    }
    componentWillUnmount(){
        console.log("componentWillUnmount");
    }
    // shouldComponentUpdate(){
    //     console.log("shouldComponentUpdate");
    //     return true;
    // }
    componentDidUpdate(){
        console.log('componentDidUpdate')
    }
    render(){
        const func=(e)=>{
            //   this.state.task.completed=true
            // this.setState({task:{...this.state.task,completed:true}})
            this.setState((oldState)=>({task:{...oldState.task,completed:true}}))
            
              console.log(this.state.task.completed); ///
        }
        console.log("render");
        if (!this.state.task) return <div>Loading ....... </div>
        return <div style={{fontSize:"40pt"}}>Task {this.state.task.title} ,{this.state.task.completed?"Done":"inprogress"}
        <button onClick={func} >marked as done</button>

<img src="./1.jpg"></img>

        {/* onclick="func()" */}
         {/* {this.props.test} */}
         </div>
    }
    
}
export default Task;