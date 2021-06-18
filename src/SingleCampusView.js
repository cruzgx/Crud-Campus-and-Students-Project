import React from 'react';

class SingleCampusView extends React.Component{
    constructor(props){
        super(props);
    }





    render(){
        return(
            <div>
                <h1>Single Campus View:</h1>
                
                <form action="./EditCampus">
          <input id="add-campus" value="Edit Campuses" type="submit" />
        </form>
            </div>
        )
    }
}
export default SingleCampusView;