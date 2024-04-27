import { DECREMENT, INCREMENT } from "..";

function increment() {
  return { type: INCREMENT };
}

function decrement() {
  return { type: DECREMENT };
}

let actionCreators = { increment, decrement };

export default actionCreators;
