import React, { Component } from 'react'


class Task4 extends React.Component {
    constructor(props) {
        super(props);
        this.state = {  };
    }
    welcome(){
        window.location.pathname="/task";
        localStorage.clear();
    }
    render() {
        return (
           <>
          <h1>UserName : {localStorage.getItem("username")}</h1>
           <h1>welcome to Website</h1>
           <button onClick={this.welcome.bind(this)}>logout</button>

           </> 
        );
    }
}

export default Task4;