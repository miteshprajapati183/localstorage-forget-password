import React, { Component } from 'react'

class Task3 extends Component {
    constructor(props) {
        super(props);
        this.state = { 
        }
    }
hand(){
   var old=this.state.old;
   var passN=this.state.new;
   var confirm=this.state.confirm;
   console.log(old);
   console.log(passN);
    console.log(confirm);

    var pass=localStorage.getItem("password");

    if(pass==old && passN==confirm){
        localStorage.removeItem("password");
        localStorage.setItem("password",passN);
        localStorage.setItem("password",confirm);
        alert("your password is save");

        window.location.pathname="/Task2"
    }
    else{
        alert("your password change wrong");
    }

}

    

    render() {
        return (
           <>
           <h1>change password</h1>
           old password:<input type='password' name="old" onChange={(e)=>this.setState({old:e.target.value})}/><br></br>
           New password:<input type='password'name="new" onChange={(e)=>this.setState({new:e.target.value})} /><br></br>
           confirm password:<input type='password'name="confirm" onChange={(e)=>this.setState({confirm:e.target.value})} /><br></br>
           <button onClick={this.hand.bind(this)}>change password</button>
           
           </> 
        );
    }
}

export default Task3;