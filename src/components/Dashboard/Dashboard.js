import React, { Component } from "react";
import { Link } from "react-router-dom";
import House from "../House/House";
import axios from "axios";

class Dashboard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      houses: []
    };
    this.getHouses = this.getHouses.bind(this);
  }
  componentDidMount() {
    this.getHouses();
  }

  getHouses() {
    axios.get("/api/houses").then(res => {
      // console.log(res.data, "house data?")
      this.setState({
        houses: res.data
      });
    });
  }
  deleteHouse(id) {
    axios.delete(`/api/houses/${id}`).then(res => this.getHouses());
  }

  render() {
    const house = this.state.houses.map(house => (
      <House key={house.id} house={house} delete={this.deleteHouse} />
    ));
    return (
      <div className="dashbox">
        <div className="dashheader">
          <Link to="/wizard/step1">
            <button>Add New Property</button>
          </Link>
        </div>
        <div className="housemap">
          <h2>House Listings</h2>
          {house}
        </div>
      </div>
    );
  }
}

export default Dashboard;
