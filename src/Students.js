import React from 'react';

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
            </div>
        )
    }
}

export default Students;