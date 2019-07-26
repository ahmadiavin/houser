import React, { Component } from "react";

function House (props) {
  const {id, name, address, city, state, zip, image} = props.house
  return (
    <div className="housebox">
      <br></br>
      <h2>Homes</h2>
      <div className="house-results">
          <img src={image} alt="a house"></img>
          <p> Property Name: {name} </p>
          <p>Address: {address}</p>
          <p>City: {city}</p>
          <p>State: {state}</p>
          <p>Zip: {zip}</p>
      </div>
      <button onClick={() => props.delete(id)}>Delete</button>
    </div>
  );
}

export default House;
