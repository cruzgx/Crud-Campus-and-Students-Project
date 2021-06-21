import React from 'react';
import {useState} from 'react';
import Axios from 'axios'
class AddStudent extends React.Component{
    constructor(props){
        super(props);
        //STATE HERE
        this.state = {
            studentFirstName: props.studentFirstName,
            studentLastName: props.studentLastName,
            studentEmail: props.studentEmail,
            studentImgURL: props.studentImgURL,
            studentGPA: props.studentGPA
        }
        this.handleSubmit = this.handleSubmit.bind(this)
        this.handleChange = this.handleChange.bind(this);
    }
    handleChange(e){
        this.setState({[e.target.name]: e.target.value});
    
    }


    async handleSubmit(){
        //TODO: VALIDATE DATA BEOFRE PASSING IT IN
        console.log('ive been clicked')
        let fName = document.getElementById('addStudent-firstName').value
        let lName = document.getElementById('addStudent-lastName').value
        let email = document.getElementById('addStudent-email').value
        let imgURL = document.getElementById('addStudent-imgURL').value
        let GPA = document.getElementById('addStudent-GPA').value
        await this.setState({studentFirstName: fName})
        await this.setState({studentLastName: lName})
        await this.setState({studentEmail: email})
        await this.setState({studentImgURL: imgURL})
        await this.setState({studentGPA: GPA})

        let values = this.state;
        console.log(values);

        (async () => {
            //console.log(values);
            const rawResponse = await fetch('/addStudents', {
              method: 'POST',
              headers: {
                'Accept': 'application/json',
                 'Content-type': 'application/json'
              },
              body: JSON.stringify(values)
            });
            const content = await rawResponse.json();
    
            console.log(content);
          })();
    

          alert('Sucess, Added student to database')


        //DATA CAN NOW BE PASSED TO DATABASE FROM HERE.
        // Axios.post('http://localhost:3001/create', {
        //     studentFirstName: this.state.studentFirstName,
        //     studentLastName: this.state.studentLastName,
        //     studentEmail: this.state.studentEmail,
        //     studentImgURL: this.state.studentImgURL,
        //     studentGPA: this.state.studentGPA
        // }).then(() => {
        //     console.log('sucess')
        // })
    }
    render(){
        return(
            <div>
                <h1> New Student Form: </h1>
                <div className='editStudent-inputs'>
                    <label>Enter students first name</label>
                    <input id='addStudent-firstName' onChange={this.handleChange}/> <br></br>
                    <label>Enter students last name</label>
                    <input id='addStudent-lastName' onChange={this.handleChange}/><br></br>
                    <label>Enter your email </label>
                    <input id='addStudent-email' onChange={this.handleChange}/> <br></br>
                    <label>Enter img url</label>
                    <input id='addStudent-imgURL' onChange={this.handleChange}/><br></br>
                    <label>Enter GPA</label>
                    <input id='addStudent-GPA' onChange={this.handleChange}/> <br></br>
                    <button onClick={this.handleSubmit}>Submit</button>
                </div>
            </div>
        )
    }
}
export default AddStudent;