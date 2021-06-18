import React from 'react';
import './styling/EditCampus.css';

class EditCampus extends React.Component{
    constructor(props){
        super(props);
        this.state={
            campusName: '',
            campusLocation:'',
            campusImg:'',
            campusDescrip:''
            
        }
        this.handleCampusChange = this.handleCampusChange.bind(this);
    }



    handleCampusChange(e){
        e.preventDefault();
        let cm =document.getElementById('campusName').value
        if( cm === ''){
            alert("Please add campus name！")
            return 
        }
        

        //checks if last name is empty
        let loc = document.getElementById('campusLoc').value
        if( loc === ''){
            alert("Please add the address!")
            return
        }
        

     
        //checks to see if user put in valid URL
        let url = document.getElementById('campusImg').value
        if(!this.isValidUrl(url)){
            alert("Invalid url input. Please input a valid url")
            return 
        }
        

        let description = document.getElementById('campusDescript').value
        if( description == ''){
            alert("Cannot leave empty!")
        }
        

       console.log(cm, loc, url, description)


        this.setState({campusName: document.getElementById('campusName').value})
        this.setState({campusLocation: document.getElementById('campusLoc').value})
        this.setState({campusImg: document.getElementById('campusImg').value})
        this.setState({campusDescrip: document.getElementById('campusDescript').value})
        
        this.setState({isInputValid: true})

        // let userInput = document.getElementById('campusName').value;
        // let location = document.getElementById('campusLoc').value;
        // let url = document.getElementById('campusImg').value;
        // let description = document.getElementById('campusDescript').value;
        // // this.setState({campusName: userInput})
         
        
    
    }

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
            <div id="campus-header">
                <h1>Edit Campus:</h1>
                <p>Add any College/University</p>
                <form id="edit-campus">
                    <label >Campus Name:</label>
                    <br></br>
                        <input id="campusName" 
                        type="text" 
                        name="campusName" 
                        className="campus-input"

                        />
                       <br></br>
                        
                        
                    <label>Campus Location:</label>
                    <br></br>
                        <input 
                        id="campusLoc"
                        type="text"
                        name="campusLocation"
                        className="campus-input"
                        />
                        <br></br>
                        
                    <label>Campus URL:</label>
                    <br></br>
                    <input 
                    id="campusImg"
                    type="text"
                    name="campusImg"
                    className="campus-input"
                    />
                    <br></br>
                    
                    <label>Campus Description:</label>
                    <br></br>
                        <input 
                        id="campusDescript"
                        type="text"
                        name="campusDescript"
                        className="campus-input"
                        ></input>
                        <br></br>
                        
                        <button id="submitbutton-campus" onClick= {this.handleCampusChange}>Submit</button>

                </form>
                
                
            </div>
        )
    }

}

export default EditCampus;