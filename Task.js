import React from 'react';

class Task extends React.Component {
    constructor(props) {
        super(props);
        this.state = {  };
    }

    setData(){
var a=this.state.txt1;
var b=this.state.txt2;
var c=this.state.txt3;
var d=this.state.txt4;
localStorage.setItem("username",a,b,c,d)
localStorage.setItem("emaild",b)
localStorage.setItem("password",c)
localStorage.setItem("mobileNo",d)
this.setState({msg:"data is"+a+b+c+d});
window.location.pathname='/Task2';
    }
    getData(){
     var u=localStorage.getItem("username",)
     var e=localStorage.getItem("emaild",)
     var p=localStorage.getItem("password",)
     var m=localStorage.getItem("mobileNo",)
        this.setState({msg:"data is get"+u+e+p+m});
    }
   
    render() {
        return (
            <>
            
            {this.state.msg}<br></br>
            
            <div style={{background:"#37B5B6", border:"2px groove red",textAlign:"justify",}}>
            <h1 style={{backgroundColor:"yellow",border:"2px solid red",color:"blue",textAlign:"center"}}>SignUp page</h1><br></br>
            Name:<input type='text' placeholder='Name' onChange={(e)=>this.setState({txt1:e.target.value})} /><br></br>
            email:<input type='text'placeholder='Email' onChange={(e)=>this.setState({txt2:e.target.value})}/><br></br>
            password:<input type='password'placeholder='Password' onChange={(e)=>this.setState({txt3:e.target.value})}/><br></br>
            mobile:<input type='text'placeholder='Mobile No' onChange={(e)=>this.setState({txt4:e.target.value})}/><br></br>
            <input type='submit' value='submit' onClick={this.setData.bind(this)} />
            </div>
            </>
        );
    }
}

export default Task;