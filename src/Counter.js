import { useState, useEffect } from "react";
import store from "./store";
import { bindActionCreators } from "./redux";
import { actionCreators } from "./store/actionCreators";

let actions = bindActionCreators(actionCreators, store.dispatch);

console.log(actions);

function Counter() {
  const [number, setNumber] = useState(0);

  useEffect(() => {
    let unsubscrible = store.subscribe(() => {
      setNumber(store.getState().count);
      return () => {
        unsubscrible();
      };
    });
  }, []);

  return (
    <div>
      <div>{number}</div>
      <button onClick={actions.increment}>+</button>
      <button onClick={actions.decrement}>-</button>
    </div>
  );
}

export default Counter;
