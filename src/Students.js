import React from 'react';
import {Link} from 'react-router-dom'

class Students extends React.Component{
    constructor(props){
        super(props);
    }


    render(){
        return(
            <div>
                <h1>All Students</h1>
                <p>There are no students registered in the database</p>
                <form action="./AddStudent">
                <input value="Add Student"type="submit"/>

                </form>
                <Link to='/singleStudentView'>
                    <button>Click here to go to single student page</button>
                </Link>
            </div>
        )
    }
}

export default Students;