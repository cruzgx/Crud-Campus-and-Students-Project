import React, {Component} from 'react'

//TESTING: Will add EditStudent to navbar to see output
//will be removed after finishing testing out this page.

//TODO: Include a redirect to single student view

class EditStudent extends Component {
    constructor(props){
        super(props)

        //state can be added here
        this.state = {
            firstName: "",
            lastName: "",
            email: "",
            gpa: -1,
            isInputValid: false
        }
        this.handleButtonSubmit = this.handleButtonSubmit.bind(this)
    }

    handleButtonSubmit(){
        
        //checks if first name is empty
        if(document.getElementById('firstNameInput').value == ''){
            alert("Cannot input a empty name for first name")
            return
        }

        //checks if last name is empty
        if(document.getElementById('lastNameInput').value == ''){
            alert("Cannot input a empty name for last name")
            return
        }

         //checks if user email is NOT a valid user email
        const EMAIL_AUTHENTICATOR = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;
        if(!document.getElementById('emailInput').value.match(EMAIL_AUTHENTICATOR)){
            alert("Please input a valid email")
            return
        }
     
        //checks to see if user put in valid link
        if(!this.isValidUrl(document.getElementById('urlInput').value)){
            alert("Invalid url input. Please input a valid url")
            return
        }

        //cheks to see if GPA is Valid
        //check if email is valid here

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
            <div>
                <h1>Edit Student</h1>
                <p>Are you a former student or faculty who needs to 
                    our records? You can do so here.
                </p>

                <p>Remove when done: <br></br>
                    Student first name can't be blank <br></br>
                    Last name can't be blank <br></br>
                    email must be valid and can't be null <br></br>
                    imageURL - must have a default value <br></br>
                    GPA must be between 0.0 and 4.0 <br></br>                   
                </p>
                <br></br>
                <label>First Name:</label>
                <input id="firstNameInput"></input> <br></br>
            
                <label>Last Name:</label>
                <input id='lastNameInput'></input> <br></br>

                <label>Email:</label>
                <input id='emailInput'></input> <br></br>

                <label>Update your image (URL):</label>
                <input id='urlInput'></input><br></br>

                <label>Enter you GPA (0.0 to 4.0)</label>
                <input type='number' min='0.0' max='4.0' step='.1' id='gpaInput'></input>
                <br></br>
                <br></br>

                <button onClick={this.handleButtonSubmit}>Submitt</button>                
            </div>
        )
    }
}

export default EditStudent