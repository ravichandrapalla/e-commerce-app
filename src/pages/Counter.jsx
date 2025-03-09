import React, { useReducer } from "react";

let initialState = {
  count: 0,
};
const countReducer = (state, action) => {
  switch (action.type) {
    case "INCREMENT":
      return { count: state.count + action.payload };
    case "DECREMENT":
      return { count: state.count - 1 };
    default:
      return state;
  }
};

export default function Counter() {
  const [state, dispatch] = useReducer(countReducer, initialState);

  return (
    <div>
      <p>Counter: {state.count}</p>
      <button onClick={() => dispatch({ type: "INCREMENT", payload: 30 })}>
        Increment
      </button>
      <button onClick={() => dispatch({ type: "DECREMENT" })}>
        Decerement
      </button>
    </div>
  );
}
