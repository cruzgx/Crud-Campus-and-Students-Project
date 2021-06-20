import React from "react";
import "./styling/EditCampus.css";
import axios from "axios";

class EditCampus extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      campusName: "",
      campusLocation: "",
      campusImg: "",
      campusDescript: "",
      posts: [],
    };
    this.handleCampusChange = this.handleCampusChange.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(e) {
    this.setState({ [e.target.name]: e.target.value });
  }

  handleCampusChange(e) {
    e.preventDefault();
    let cm = document.getElementById("campusName").value;
    if (cm === "") {
      alert("Please add campus name！");
      return;
    }

    //checks if last name is empty
    let loc = document.getElementById("campusLoc").value;
    if (loc === "") {
      alert("Please add the address!");
      return;
    }

    //checks to see if user put in valid URL
    let url = document.getElementById("campusImg").value;
    if (!this.isValidUrl(url)) {
      alert("Invalid url input. Please input a valid url");
      return;
    }

    let description = document.getElementById("campusDescript").value;
    if (description == "") {
      alert("Cannot leave empty!");
    }

    console.log(cm, loc, url, description);

    this.setState({ campusName: document.getElementById("campusName").value });
    this.setState({
      campusLocation: document.getElementById("campusLoc").value,
    });
    this.setState({ campusImg: document.getElementById("campusImg").value });
    this.setState({
      campusDescript: document.getElementById("campusDescript").value,
    });

    this.setState({ isInputValid: true });

    let values = this.state;
    console.log(values);

    // fetch('/campusEdit', {
    //    method: 'POST',
    //    body: JSON.stringify(values),
    //    header: {
    //        'content-Type': 'application/json'
    //    }
    // }).then(res => res.json())
    // .then(data => console.log(data))
    // .catch(err => console.log(err));

    (async () => {
      //console.log(values);
      const rawResponse = await fetch("/campusEdit", {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-type": "application/json",
        },
        body: JSON.stringify(values),
      });
      const content = await rawResponse.json();

      console.log(content);
    })();

    alert("campus has been submitted");
  }


  // componentDidUpdate(){
  //   this.displayData();
  // }
  displayData = (e) => {
    e.preventDefault();
    axios
      .get("/getCampus")
      .then((response) => {
       this.setState({ 
           posts : response.data.rows
          })
        console.log("Data received");
      })
      .catch(() => {
        alert("Error");
      });
  };

  isValidUrl(str) {
    var pattern = new RegExp(
      "^(https?:\\/\\/)?" + // protocol
        "((([a-z\\d]([a-z\\d-]*[a-z\\d])*)\\.)+[a-z]{2,}|" + // domain name
        "((\\d{1,3}\\.){3}\\d{1,3}))" + // OR ip (v4) address
        "(\\:\\d+)?(\\/[-a-z\\d%_.~+]*)*" + // port and path
        "(\\?[;&a-z\\d%_.~+=-]*)?" + // query string
        "(\\#[-a-z\\d_]*)?$",
      "i"
    ); // fragment locator
    return !!pattern.test(str);
  }

  render() {
    let display = [];
    display= this.state.posts.map((val,key) =>{
      return <div>
      <h3>{val.campusName}</h3>
      <h3>{val.campusLocation}</h3>
      <h3>{val.campusUrl}</h3>
      <h3>{val.campusDescription}</h3>
      
      </div>
    })



    return (
      <div id="campus-header">
        <h1>Edit Campus:</h1>
        <p>Add any College/University</p>
        <form id="edit-campus">
          <label>Campus Name:</label>
          <br></br>
          <input
            id="campusName"
            type="text"
            name="campusName"
            className="campus-input"
            value={this.state.campusName}
            onChange={this.handleChange}
          />
          <br></br>

          <label>Campus Location:</label>
          <br></br>
          <input
            id="campusLoc"
            type="text"
            name="campusLocation"
            className="campus-input"
            value={this.state.campusLocation}
            onChange={this.handleChange}
          />
          <br></br>

          <label>Campus URL:</label>
          <br></br>
          <input
            id="campusImg"
            type="text"
            name="campusImg"
            className="campus-input"
            value={this.state.campusImg}
            onChange={this.handleChange}
          />
          <br></br>

          <label>Campus Description:</label>
          <br></br>
          <input
            id="campusDescript"
            type="text"
            name="campusDescript"
            className="campus-input"
            value={this.state.campusDescript}
            onChange={this.handleChange}
          ></input>
          <br></br>

          <button id="submitbutton-campus" onClick={this.handleCampusChange}>
            Submit
          </button>
          <br></br>
          <button onClick={this.displayData} action="./Campus">show data</button>
          {/* <form action="./Campus">
          <input id="" value="View Campuses" type="submit" /> */}
          {display}
        {/* </form> */}
          
        </form>
      </div>
    );
  }
}

export default EditCampus;
