import React, {Component} from 'react'
import './styling/EditStudent.css'
import Axios from 'axios'


/*TODO: THIS SITE MUST Include a redirect to SINGLE STUDENT VIEW
AND this site should be have to link to it from the ALL STUDENTS PAGE
*/

class EditStudent extends Component {
    constructor(props){
        super(props)

        //state can be added here
        this.state = {
            firstName: "",
            lastName: "",
            email: "",
            url: "",
            gpa: -1,
            id: -1,
            isInputValid: false
        }
        this.handleButtonSubmit = this.handleButtonSubmit.bind(this)
    }

    handleButtonSubmit(){
        
        //checks if first name is empty
        if(document.getElementById('firstNameInput').value === ''){
            alert("Cannot input a empty name for first name")
            return
        }

        //checks if last name is empty
        if(document.getElementById('lastNameInput').value === ''){
            alert("Cannot input a empty name for last name")
            return
        }

         //checks if user email is NOT a valid user email
        const EMAIL_AUTHENTICATOR = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;
        if(!document.getElementById('emailInput').value.match(EMAIL_AUTHENTICATOR)){
            alert("Please input a valid email")
            return
        }
     
        //checks to see if user put in valid URL
        // if(!this.isValidUrl(document.getElementById('urlInput').value)){
        //     alert("Invalid url input. Please input a valid url")
        //     return
        // }

        //cheks to see if GPA is Valid
        const userGPA = document.getElementById('gpaInput').value
        if(userGPA === '' || userGPA < 0 || userGPA > 4.0){
            alert("Invalid input. GPA must be from 0.0-4.0")
            return;
        }

        //we can now safely pass on the valid data 
        this.setState({firstName: document.getElementById('firstNameInput').value})
        this.setState({lastName: document.getElementById('lastNameInput').value})
        this.setState({email: document.getElementById('emailInput').value})
        this.setState({url: document.getElementById('urlInput').value})
        this.setState({gpa: document.getElementById('gpaInput').value})
        this.setState({id: document.getElementById('editStudent-id').value})
        this.setState({isInputValid: true})

        
        //TODO: Edit database in backend.
        //.put is for updates 
        /*
        Axios.put('http://localhost:5000/updateStudentInfo', {
            firstname: this.state.firstname,
            lastname: this.state.lastname,
            email: this.state.email,
            url: this.state.url,
            gpa: this.state.gpa,
            id: 
        })
        */
        let values = this.state

            
            fetch('http://localhost:5000/updateStudentInfo', {
              method: 'PUT',
              headers: {
                'Accept': 'application/json',
                 'Content-type': 'application/json'
              },
              body: JSON.stringify(values)
            });
            
    
            

        alert("Sucessfully Submitted Form")
        


        //Here we edit the student data.
        
    }

    //Used to authenticate if is a string is a valid string.
    isValidUrl(str){
        var pattern = new RegExp('^(https?:\\/\\/)?'+ // protocol
        '((([a-z\\d]([a-z\\d-]*[a-z\\d])*)\\.)+[a-z]{2,}|'+ // domain name
        '((\\d{1,3}\\.){3}\\d{1,3}))'+ // OR ip (v4) address
        '(\\:\\d+)?(\\/[-a-z\\d%_.~+]*)*'+ // port and path
        '(\\?[;&a-z\\d%_.~+=-]*)?'+ // query string
        '(\\#[-a-z\\d_]*)?$','i'); // fragment locator
        return !!pattern.test(str);
    }

    render(){
        return(
            <div className='test-me'>
                <h1 className='edit-student-heading'>Edit Student Information</h1>
                <p className='edit-student-blurb'>Are you a former student or faculty who needs to 
                    our records? You can do so here.
                </p>


                <br></br>
                <div id='edit-student-form'>
                    <form id='edit-student-form-wrapper'>
                        <label>First Name:</label>
                        <input id="firstNameInput" className='editStudent-inputs'></input> <br></br>

                        <label>Last Name:</label>
                        <input id='lastNameInput' className='editStudent-inputs'></input> <br></br>

                        <label>Email:</label>
                        <input id='emailInput' className='editStudent-inputs'></input> <br></br>

                        <label>Update your image (URL):</label>
                        <input id='urlInput' className='editStudent-inputs'></input><br></br>

                        <label>Enter you GPA (0.0 to 4.0)</label>
                        <input type='number' min='0.0' max='4.0' step='.1' id='gpaInput' className='editStudent-inputs'></input>

                        <label>Enter your id number</label>
                        <input id='editStudent-id' type='number'></input>
                    </form>
                    <br></br>
                    <br></br>

                    <button id='editStudent-submit-button' onClick={this.handleButtonSubmit}>Submitt</button>
                    <small></small>
                </div>

            </div>
        )
    }
}

export default EditStudent