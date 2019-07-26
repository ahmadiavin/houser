import React, { Component } from "react";

function House (props) {
  const {name, address, city, state, zip} = props.house
  return (
    <div className="housebox">
      <h2>House</h2>
      <div className="house-results">
          <p> Property Name: {name} </p>
          <p>Address: {address}</p>
          <p>City: {city}</p>
          <p>State: {state}</p>
          <p>Zip: {zip}</p>
      </div>
      <button>Delete</button>
    </div>
  );
}

export default House;
