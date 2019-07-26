import React, { Component } from "react";
import { Link } from "react-router-dom";
import House from '../House/House';
import axios from "axios";

class Dashboard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      houses: []
    };
    // this.getHouses = this.getHouses.bind(this);
  }
  componentDidMount() {
    axios.get("/api/houses").then(res => {
        
        this.setState({
          houses: res.data
        });
      })
  }


  render() {
    
    return (
      <div className="dashbox">
        <div className="dashheader">
         
          <Link to="/wizard">
            <button>Add New Property</button>
          </Link>
        </div>
        <div className="housemap">
          <h3>House Listings</h3>
          {this.state.houses.map(element => {
        return <House house={element} key={element.id} />;
      })}
        </div>
      </div>
    );
  }
}

export default Dashboard;
