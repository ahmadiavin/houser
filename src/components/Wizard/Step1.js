import React, { Component } from "react";
import { Link } from "react-router-dom";

import store, {SAVE_VALUES } from '../../ducks/store'

class Wizard extends Component {
  constructor() {
    super();
    const reduxState = store.getState()
    this.state = {
        ...reduxState
    
    };
    this.handleChange = this.handleChange.bind(this);
    
  }
  componentDidMount(){
      store.subscribe(() => {
          this.setState({
              ...store.getState()
          })
      })
  }

  handleChange(e) {
      const {value, name} = e.target
     this.setState({[name]:value})
  }

  storeUpdate = () => {
      const {name, address, city, state, zip} = this.state
      store.dispatch({
          type: SAVE_VALUES, payload: {
              name,
              address,
              city,
              state,
              zip
          }
      })
  }

  
  render() {
      const { name, state, address, city, zip} = this.state
    return (
      <div className="wizbox">
    
        <div className="wizinput">
            <p>Name</p>
            <div>
          <input name='name' value={name} onChange={ this.handleChange} type='text'/>
          </div>
          <p>Address</p>
          <input name='address' value={address} onChange={ this.handleChange} type='text'/>
          <p>City</p>
          <input name='city' value={city} onChange={ this.handleChange} type='text'/>
          <p>State</p>
          <input  name='state' value={state} onChange={ this.handleChange} type='text'/>
          <p>Zip</p>
          <input name='zip' value={zip} onChange={ this.handleChange} type='number' />
        </div>
        <div>
            <Link to ='/wizard/step2'>
            <button onClick={this.storeUpdate}>Next </button>
            </Link>
        </div>
      </div>
    );
  }
}

export default Wizard;
