import React from 'react';
import {useState} from 'react';

class Campus extends React.Component{
    constructor(props){
        super(props);
        
    }
  

    handleSubmit(){
        let add = document.getElementById("campusName").value;
        console.log(add)

    }
    

    render(){
        return(
            <div>
                <h1>Campuses</h1>
                <label>Enter campuses:</label>
                <br></br>
                <label>Add a campus:</label>
                <input id="campusName" type="text"></input>
                <br></br>
                
                
                <button onClick={this.handleSubmit}>Add Campus</button>
               
            </div>
        )
    }
}

export default Campus;

