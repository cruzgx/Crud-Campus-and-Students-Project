import React from "react";
import { useState } from "react";
import AddCampus from "./AddCampus";
import axios from "axios";
// import LehmanImage from "./images/lehman-img.png";

const CAMPUSES = [
  {
    name: "Lehman College",
    location: "Bronx, NY",
    image:
      "https://images.credly.com/images/ddf15e7e-6c22-423d-be46-232bfe337603/blob.png",

    description: "A very affordable college",
  },

  {
    name: "Hunter College",
    location: "NY, NY",
    image:
      "https://d32ogoqmya1dw8.cloudfront.net/images/liberalarts/capstones/hunter/1454363445.v7.jpg",
    description: "A good college",
  },

  {
    name: "Baruch College",
    location: "NY, NY",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/c/c3/Baruch_College_CUNY_logo.jpg",

    description: "One of the best CUNY colleges",
  },
];

class Campus extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      posts: [],
    };
  }

  displayData = (e) => {
    e.preventDefault();
    axios
      .get("/getCampus")
      .then((response) => {
        this.setState({
          posts: response.data.rows,
        });
        console.log(this.state.posts);
      })
      .catch(() => {
        alert("Error");
      });
  };

  // deleteData = (e, id) => {
  //   e.preventDefault();
  //   axios.delete(`/deleteCampus/${id}`).then((response) => {
  //     this.setState({
  //       posts: response.data.rows,
  //     });
  //     this.state.posts.filter((val) => {
  //       return val.id != id;
  //     });
  //   });
  // };

  render() {
    let display = [];
    display = this.state.posts.map((val, key) => {
      return (
        <div id="campus-card">
        <h3>{val.id}</h3>
          <h3>Campus Name: {val.campusName}</h3>
          <h3>Location: {val.campusLocation}</h3>
          <h3>Image: {val.campusUrl}</h3>
          <h3>Description: {val.campusDescription}</h3>
          {/* <button onClick={this.deleteData }>Delete</button> */}
        </div>
      );
    });

    return (
      <div id="campus-page">
        <h1 id="all-campus">All Campuses</h1>

        <form action="./AddCampus">
          <input id="add-campus" value="Add Campuses" type="submit" />
        </form>

        <form action="./SingleCampusView">
          <input id="add-campus" value="View Single Campus" type="submit" />
        </form>

        {CAMPUSES.map((val, index) => (
          <div id="campus-card">
            <div key={index}>
              <img className="college-img" src={val.image}></img>
              <h3>Name: {val.name}</h3>
              <h3> Location: {val.location}</h3>

              <h3> Description: {val.description}</h3>
            </div>
          </div>
        ))}
        <button onClick={this.displayData}>Display data</button>
        <div>{display}</div>
      </div>
    );
  }
}

export default Campus;
