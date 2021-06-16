import React from 'react';
import {useState} from 'react';

class AddStudent extends React.Component{
    constructor(props){
        super(props);
        
    }
  

    handleSubmit(){
        let add = document.getElementById("student").value;
        console.log(add)

    }
    

    render(){
        return(
            <div>
                <h1> New Student Form: </h1>
                <label>Enter Student Name:</label>
                <br></br>
                <label>Add Student:</label>
                <input id="student" type="text"></input>
                <br></br>
                
                
                <button onClick={this.handleSubmit}>Add Student</button>
               
            </div>
        )
    }
}

export default AddStudent;