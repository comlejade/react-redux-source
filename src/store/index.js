import { createStore } from "../redux";
export const INCREMENT = "increment";

export const DECREMENT = "decrement";

let initialState = { count: 0 };

function reducer(state, action) {
  switch (action.type) {
    case INCREMENT:
      return { count: state.count + 1 };
    case DECREMENT:
      return { count: state.count - 1 };
    default:
      return state;
  }
}

const store = createStore(reducer, initialState);

export default store;
