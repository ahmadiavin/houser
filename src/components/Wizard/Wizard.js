import React, { Component } from "react";
import { Link } from "react-router-dom";

class Wizard extends Component {
  constructor() {
    super();
    this.state = {
      name: "",
      address: "",
      city: "",
      state: "",
      zip: 0
    };
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(prop, value) {
     this.setState({[prop]:value})
  }

  render() {
    return (
      <div className="wizbox">
        <div className="wizheader">
          <h2>Add New Listing</h2>

          <Link to="/">
            <button>Cancel</button>
          </Link>
        </div>
        <div className="wizinput">
            <p>Name</p>
          <input value={this.state.name} onChange={e => this.handleChange('name', e.target.value)}/>
          <p>Address</p>
          <input value={this.state.address} onChange={e => this.handleChange('address', e.target.value)}/>
          <p>City</p>
          <input value={this.state.city} onChange={e => this.handleChange( 'city', e.target.value)}/>
          <p>State</p>
          <input value={this.state.state} onChange={e => this.handleChange('state', e.target.value)}/>
          <p>Zip</p>
          <input value={this.state.zip} onChange={e => this.handleChange('zip', e.target.value)}/>
        </div>
      </div>
    );
  }
}

export default Wizard;
