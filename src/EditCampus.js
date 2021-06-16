import React from 'react';

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

    // editButton= () =>{
    //     let edit = document.getElementById('edit');
    //     edit.contentEditable = true;
    // }

    // submitButton = () =>{
    //     let add = document.getElementById('edit').value;
    //     console.log(add)

    // }

    // campusChange= (e) =>{
    //     this.setState({
    //         value:e.target.value
    //     })
        
    // }

    // handleSubmit =(e)=>{
    //     const input = e.target.getElementByTagName('input')
    //     e.preventDefault();
    //     this.setState({
    //         campusName:input.campusName.value,
    //         campusLocation:input.campusLocation.value,
    //         campusImg:input.campusImg.value,
    //         campusDescrip:input.campusDescrip.value

    //     })

    // }


    handleCampusChange(e){
        e.preventDefault();
        let userInput = document.getElementById('campusName').value;
        let location = document.getElementById('campusLoc').value;
        let url = document.getElementById('campusImg').value;
        let description = document.getElementById('campusDescript').value;
        // this.setState({campusName: userInput})
        console.log(userInput, location,url,description);

    
    }



    render(){
        return(
            <div>
                <h1>Edit Campus</h1>
                <form >
                    <label >Campus Name:</label>
                        <input id="campusName" type="text" name="campusName" />
                       
                        
                        
                    <label>Campus Location:</label>
                        <input 
                        id="campusLoc"
                        type="text"
                        name="campusLocation"
                        />

                        
                    <label>Campus URL:</label>
                    <input 
                    id="campusImg"
                    type="text"
                    name="campusImg"
                    />
                    
                    <label>Campus Description:</label>
                        <input 
                        id="campusDescript"
                        type="text"
                        name="campusDescript"
                        ></input>
                        
                        <button onClick= {this.handleCampusChange}>Submit</button>

                </form>
                
                
            </div>
        )
    }

}

export default EditCampus;