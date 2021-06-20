import React from 'react';
import './styling/Navbar.css';
import './styling/SingleStudentView.css'

class Navbar extends React.Component{




    render(){
        return(
    <div id="nav-bar">
    <Link to ="/">Home</Link>
    <Link to ="/Campus">Campus</Link>
    <Link to ="/Students">Students</Link>
    </div>
        )

    }
}