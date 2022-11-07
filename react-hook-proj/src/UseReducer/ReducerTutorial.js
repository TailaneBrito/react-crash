// import React, {useState} from 'react'
import React, { useReducer } from "react";

const reducer = (state, action) => {
  //state of the components
  //action is the method using the state

  switch (action.type) {
    case "INCREMENT":
      return { count: state.count + 1, showText: state.showText };
    case "toggleShowText":
      return { count: state.count, showText: !state.showText };
    default:
      return state;
  }
};

function ReducerTutorial() {
  //   const [count, setCount] = useState(0);
  //   const [showText, setShowText] = useState(true);

  const [state, dispatch] = useReducer(reducer, { count: 0, showText: true });

  return (
    <>
      <div>ReducerTutorial</div>
      <h1>{state.count}</h1>
      <button
        onClick={() => {
          dispatch({ type: "INCREMENT" });
          dispatch({ type: "toggleShowText" });
        }}
      >
        Click Here
      </button>
      <span>
        {state.showText} <span>This is a text</span>
      </span>
    </>
    // <>
    // <div>ReducerTutorial</div>
    // <h1>{count}</h1>
    // <button onClick={
    //     () => {setCount(count + 1);
    //     setShowText(!showText)}
    //     }>Click Here
    // </button>
    // </>
  );
}

export default ReducerTutorial;
