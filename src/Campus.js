import React from "react";
import { useState } from "react";
import AddCampus from "./AddCampus";
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
    image:"https://upload.wikimedia.org/wikipedia/commons/c/c3/Baruch_College_CUNY_logo.jpg",
      
    description: "One of the best CUNY colleges",
  }


];

class Campus extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div id="campus-page">
        <h1 id="all-campus">All Campuses</h1>
        
        <form action="./AddCampus">
          <input id="add-campus" value="Add Campuses" type="submit" />
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
      </div>
    );
  }
}

export default Campus;

