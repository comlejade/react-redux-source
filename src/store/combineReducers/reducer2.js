export const INCREMENT2 = "increment2";

export const DECREMENT2 = "decrement2";

function reducer(state = { count: 0 }, action) {
  switch (action.type) {
    case INCREMENT2:
      return { count: state.count + 1 };
    case DECREMENT2:
      return { count: state.count - 1 };
    default:
      return state;
  }
}

export default reducer;
