import React, { Component } from "react";
import { Link } from "react-router-dom";

import store, { SAVE_VALUES, CANCEL } from "../../ducks/store";
import Axios from "axios";

class Wizard extends Component {
  constructor() {
    super();
    const reduxState = store.getState();
    this.state = {
      mortgage: reduxState.mortgage,
      rent: reduxState.rent
    };
    this.handleChange = this.handleChange.bind(this);
  }
  componentDidMount() {
    store.subscribe(() => {
      const reduxState = store.getState();
      this.setState({
        mortgage: reduxState.mortgage,
        rent: reduxState.rent
      });
    });
  }

  handleChange(e) {
    const { value, prop } = e.target;
    this.setState({ [prop]: value });
  }
  storeUpdate = () => {
    const { mortgage, rent } = this.state;
    store.dispatch({
      type: SAVE_VALUES,
      payload: {
        mortgage,
        rent
      }
    });
  };

  addHouse() {
    const submit = store.getState();
    Axios.post("/api/houses", { ...submit, ...this.state })
      .then(() => {
        store.dispatch({ type: CANCEL });
        this.prop.history.push("/");
      })
      .catch(error => console.log(error));
  }

  render() {
    const { mortgage, rent } = this.state;
    return (
      <div className="wizbox">
        <div className="wizheader" />
        <div className="wizinput">
          <p>mortgage</p>
          <input value={mortgage} onChange={this.handleChange} type="number" />
          <p>rent</p>
          <input value={rent} onChange={this.handleChange} type="number" />
        </div>
        <Link to="/wizard/step2">
          <button onClick={this.storeUpdate}>Previous</button>
        </Link>

        <button onClick={this.addHouse}>Complete</button>
      </div>
    );
  }
}

export default Wizard;
