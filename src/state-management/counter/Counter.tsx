import { useReducer } from "react";
interface Action {
  type: "INCREMENT" | "RESET";
}

const counterReducer = (state: number, action: Action): number => {
  if (action.type === "INCREMENT") return state + 1;
  if (action.type === "RESET") return 0;

  return state;
};

const Counter = () => {
  // First argument is our reducer function
  // Second argument is our initial state
  // Returns array with two  ellements. current state and function for triggering changes dispatch
  const [value, dispatch] = useReducer(counterReducer, 0);

  return (
    <div>
      Counter ({value})
      <button
        onClick={() => dispatch({ type: "INCREMENT" })}
        className="btn btn-primary mx-1"
      >
        Increment
      </button>
      <button
        onClick={() => dispatch({ type: "RESET" })}
        className="btn btn-primary mx-1"
      >
        Reset
      </button>
    </div>
  );
};

export default Counter;
