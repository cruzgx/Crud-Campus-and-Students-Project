import React from 'react'
import {Component} from 'react'
import './styling/indivStudent.css'

class IndividualStudent extends Component {
    constructor(props){
        super(props)

        /*
        this.state = {
            studentFirstName: props.studentFirstName,
            studentLastName: props.studentLastName,
            studentEmail: props.studentEmail,
            studentImgURL: props.studentImgURL,
            studentGPA: props.studentGPA
        }
        */

        //bind functions here.
    }


    render(){
        return(
            <div class='indivStudent-component'>
                <img src={this.props.studentImgURL} width="200" height="200" /><br></br>
                <b>{this.props.studentFirstName} {this.props.studentLastName}</b>                
                <p>{this.props.studentEmail}</p>
                <p>GPA: {this.props.studentGPA}</p>
            </div>
        )
    }
}

export default IndividualStudent;