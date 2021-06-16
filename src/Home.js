import React from 'react';
import {Link} from 'react-router-dom'
import './Home.css'

class Home extends React.Component{
    constructor(props){
        super(props);

        //state can be added here

    }

    //methods go here
    render(){
        return(
            <div className='header'>
                <div className='front-text'>
                    <h1 className='page-heading'>Public Campus Search Tool</h1>
                    <p>Our site provides all your school data needs from campuses to students</p>
                </div>
                <section className='site-info'>
                <h2>Campuses</h2>              
                <p>Click here to see a listing of all campuses</p>
                <Link to='/Campus'>
                    <button type='button'>Go</button>
                </Link>
  
                <p>Click below to be redirected to a single campus view</p>
                <Link to='/Campus'>
                    <button>Single Campus View </button>
                </Link>
       

                <h2>Students</h2>
                <p>Our database holds a record of many students across the <br></br>
                    United States. Below you'll find resources to help acess the <br></br>
                    best schools and student performance
                </p>

                <br></br>
                <p>Take a look at our directory of all of the students in our <br></br>
                in our database here</p>
                <Link to='/Students'>
                    <button>Full Student directory</button>
                </Link>
                <p>Interested in looking into where a prospective student is currently
                    enrolled at? Take a look at our individual student profiles page below.
                </p>
                <Link to= '/Students'> 
                <button>Individual Student Profiles</button>
                </Link>
                </section>
                
                <p>About us</p>
                <p>Contanct</p>
                <small>Company Name Example. All Rights Reserved</small>

            </div>
        )
    }


}

export default Home;