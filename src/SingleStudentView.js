import React, {Component} from 'react'
import './styling/SingleStudentView.css'

//This page should have the nav bar on top of it.

class SingleStudentView extends Component{
    constructor(props){
        super(props)

        //state can be added here if nessary
        this.state = {
            studentImage: props.studentImage,
            studentName: props.studentName,
            gpa: props.gpa,
            isRegisteredAtACampus: props.isRegisteredAtACampus,
            studentCampusAffiliation: props.studentCampusAffiliation
        }
        //rember to bind functions here
    }

    render(){
       return(
       <div className='singlle-student-view-container'>
           {this.state.studentImage == null ? <img src="https://t4.ftcdn.net/jpg/00/64/67/63/360_F_64676383_LdbmhiNM6Ypzb3FM4PPuFP9rHe7ri8Ju.jpg" className='single-student-image'/> 
           : <img src={this.state.studentImage} className='single-student-image' />}

           {this.state.studentImage == null ? <b className="single-student-view-studentName">(STUDENT NAME)</b>
           : <b className="single-student-view-studentName">{this.state.studentName}</b>}  

           {this.state.gpa == null ? <p className='ssview-gpa'>(GPA = unknown)</p> : <p className='ssview-gpa'>{this.state.gpa}</p>} 

           <br></br>
           <button className='ssview-editbuttons' id='ssview-deletebutton'>delete</button><button className='ssview-editbuttons' id='ssview-editbutton'>edit</button>

            {this.state.isRegisteredAtACampus == null ? <p className='ssview-isRegistered'>This student is not registered to a campus</p>
            : <p className='ssview-isRegistered'>This student isn't registered to a campus</p>}

            {/* Should check if campusaffiliation is the value
            we would pass for [NOT AFFILIATED TO ANY CAMPUS] */}
            {this.state.studentCampusAffiliation == null ? <p className='ssview-ssview-affiliation'>Not affiliated with any campus.</p>
            : <p className='ssview-ssview-affiliation'>{this.studentCampusAffiliation}</p>}

            <p>Campus Selector</p>
            <label>Select campus</label>
            <form>
                {/* implement me */}
            </form>

            <button>Change button</button>
       </div>)
    }
}

export default SingleStudentView
