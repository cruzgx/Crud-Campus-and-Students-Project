import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import Campus from './Campus';
import Home from './Home';
import Students from './Students'
import {BrowserRouter, Route, Link, Switch} from 'react-router-dom';
import AddCampus from './AddCampus';
import AddStudent from './AddStudent';
import EditCampus from './EditCampus';
import EditStudent from './EditStudent';
import SingleStudentView from './SingleStudentView';
import SingleCampusView from './SingleCampusView';
import './styling/Navbar.css';
// import reportWebVitals from './reportWebVitals';

ReactDOM.render(
  <BrowserRouter>
  <div >
  <div id="nav-bar">
  
    <Link to ="/" className="links">Home</Link>
    <Link to ="/Campus" className="links">Campus</Link>
    <Link to ="/Students" className="links">Students</Link>
    </div>

  
  <Switch>
    <Route exact path="/" component={Home}></Route>
    <Route path="/Campus" component={Campus}></Route>
    <Route path="/Students" component={Students}/>
    <Route path="/AddCampus" component={AddCampus}/>
    <Route path="/AddStudent" component={AddStudent} />
    <Route path="/EditCampus" component={EditCampus}/>
    <Route path='/EditStudent' component={EditStudent} />
    <Route path='/SingleCampusView' component={SingleCampusView}/>

    <Route path='/singleStudentView' component={SingleStudentView} />
    </Switch>
    </div>
    </BrowserRouter>,
    
  document.getElementById('root')
);

// // If you want to start measuring performance in your app, pass a function
// // to log results (for example: reportWebVitals(console.log))
// // or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();
