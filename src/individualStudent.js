import React from 'react'
import {Component} from 'react'

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
            <div>
                <p>I return student data</p>
                <p>{this.props.studentFirstName}</p>
                <p>{this.props.studentLastName}</p>
                <p>{this.props.studentEmail}</p>
                <p>{this.props.studentImgURL}</p>
                <p>{this.props.studentGPA}</p>
            </div>
        )
    }
}

export default IndividualStudent;