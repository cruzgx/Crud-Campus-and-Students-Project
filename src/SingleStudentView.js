import React, {Component} from 'react'

//This page should have the nav bar on top of it.

class SingleStudentView extends Component{
    constructor(props){
        super(props)

        //state can be added here if nessary
        this.state = {
            studentImage: "https://t4.ftcdn.net/jpg/00/64/67/63/360_F_64676383_LdbmhiNM6Ypzb3FM4PPuFP9rHe7ri8Ju.jpg"
        }
        //rember to bind functions here
    }

    render(){
       return(
       <div>
           <p>An image of the student goes here [from props]</p>
           <b>Student Name (From Props passed on from database)</b>   
           <p>GPA: (From props passed on from database)</p>  
           <br></br>
           <br></br>
           <button>edit</button><button>delete</button>
            <p>This (is/is not) regesitered to a campus <br></br>
                (use a prop for this)
            </p>
            <p>DISPLAY CAMPUS NAME</p>
            <p>Campus Selector</p>
            <button>Change button</button>
       </div>)
    }
}

export default SingleStudentView