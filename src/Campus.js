import React from 'react';
import {useState} from 'react';
import AddCampus from './AddCampus';

class Campus extends React.Component{
    constructor(props){
        super(props);
        
    }


    render(){
        return(
            <div>
                <h1>All Campuses</h1>
                <p>There are no campuses registered in the database.</p>
                <form action="./AddCampus">
                <input value="Add Campuses"type="submit"/>

                </form>
               
            </div>
        )
    }
}

export default Campus;

