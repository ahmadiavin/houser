import React, { Component } from "react";
import { Link } from "react-router-dom";

import store, { SAVE_VALUES } from "../../ducks/store";

class Wizard extends Component {
  constructor() {
    super();
    const reduxState = store.getState();
    this.state = {
      image: reduxState.image
    };
    this.handleChange = this.handleChange.bind(this);
  }
  componentDidMount() {
    store.subscribe(() => {
      const reduxState = store.getState();
      this.setState({
        image: reduxState.image
      });
    });
  }

  handleChange(e) {
    const { value, prop } = e.target;
    this.setState({ [prop]: value });
  }
  storeUpdate = () => {
    const { image } = this.state;
    store.dispatch({
      type: SAVE_VALUES,
      payload: {
        image
      }
    });
  };

  render() {
    const { image } = this.state;
    return (
      <div className="wizbox">
        <div className="wizheader" />
        <div className="wizinput">
          <p>image</p>
          <input value={image} onChange={this.handleChange} />
        </div>
        <Link to="/wizard/step1">
          <button onClick={this.storeUpdate}>Previous</button>
        </Link>
        ||
        <Link to="/wizard/step3">
          <button onClick={this.storeUpdate}>Next</button>
        </Link>
      </div>
    );
  }
}

export default Wizard;
