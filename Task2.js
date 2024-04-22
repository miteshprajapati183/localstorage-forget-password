import React from 'react';

class Task2 extends React.Component {
    constructor(props) {
        super(props);
        this.state = {};
    }


    handclick = () => {
        // set item
        var a = this.state.text1;
        this.setState({ msg: "data is saved" + a });

        var b = this.state.text2; 
        this.setState({ msg1: "password save" + b });

        //get item
        var userEmail = localStorage.getItem("emaild");
        var userPass = localStorage.getItem("password");
        console.log(userEmail);
        console.log(userPass);
        console.log(this.state.text1);
        console.log(this.state.text2);
        if ( userEmail===a && userPass ===  b) {
            alert("success");
            window.location.pathname = "/Task4";

        }
        else {
            alert("check your email your password");
        }
        localStorage.setItem("login", a);
        localStorage.setItem("password", b);
    }
    password() {
        window.location.pathname ="/task3";
    }
    render() {
        return (
            <>
                {this.state.msg}<br></br>
                {this.state.msg1}
                <div style={{ background: "#525CEB" }}>

                    <h1 style={{ background: "#3D3B40", border: "2px solid black" }}>Login</h1>
                    Email:<input type='email' placeholder='Email' onChange={(e) => this.setState({ text1: e.target.value })} required /><br></br>
                    password:<input type='password' placeholder='Password' onChange={(e) => this.setState({ text2: e.target.value })} required /><br></br>
                    <button onClick={this.handclick.bind(this)}>submit</button>
                    <button onClick={this.password.bind(this)}>change passowrd</button>
                </div>
            </>
        );
    }
}

export default Task2;