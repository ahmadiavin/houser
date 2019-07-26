import { createStore } from "redux";

const initialState = {
  name: "",
  address: "",
  city: "",
  state: "",
  zip: 0,
  image: "",
  mortgage: 0,
  rent: 0
};

export const SAVE_VALUES = "SAVE_VALUES";
export const CANCEL = "CANCEL";

function reducer(state = initialState, action) {
  const { type, payload } = action;
  switch (type) {
    case SAVE_VALUES:
      return {
        ...state,
        ...payload
      };
    case CANCEL:
      return { ...initialState };

    default:
      return state;
  }
}

export default createStore(reducer);
