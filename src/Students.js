import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import axios from 'axios'
import IndividualStudent from './individualStudent';
//import e from 'express';
//import { response } from 'express';
//import { response } from 'express';

class Students extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            myResults: []
        }

    }

    handleGetStudentsRequest = (e) => {
        //e.preventDefault();
        axios
        .get("http://localhost:5000/getStudents")
        .then((response) => {

            //console.log(response.data)
            let myArr = response.data.rows
            console.log(myArr)
            this.setState({ myResults : myArr })
            // console.log(this.state.myResults)            

        })
        .catch((err) => {
            console.log(err)
        })
    }


    //console.log(myArr)

    // TODO: IMPLEMENT THE CREATION OF A COMPONENT FOR EACH STUDENT IN DB


    //let dataFromDB = myArr.rows.map((myArr) => {return <IndividualStudent studentFirstName={myArr.firstname}  studentLastName = {myArr.lastname} 
    //studentEmail={myArr.email} studentImgURL={myArr.image} studentGPA={myArr.gpa}/>})



render(){
     let items = [];
     items = this.state.myResults.map((element) => (
        
         <IndividualStudent studentFirstName={element.firstname} studentLastName={element.lastname} studentEmail={element.email} studentImgURL={element.image} studentGPA= {element.gpa}/>
    
    ));

    console.log(items)

    return (
        <div>
            <h1>All Students</h1>
            <button onClick={this.handleGetStudentsRequest}>Show students</button>
            
            <form action="./AddStudent">
                <input value="Add Student" type="submit" />

            </form>
            {items}
            <Link to='/singleStudentView'>
                <button>Click here to go to single student page</button>
            </Link>
        </div>
    )
}
}

export default Students;