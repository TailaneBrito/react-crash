import React, { useState, useCallback } from "react";
import Child from "./Child";

function CallBackTutorial() {
  //very similar to memo (store value that is memorized and returned by a function)
  //callback (value is not stored, instead it is the whole function)

  const [toggle, setToggle] = useState(false);
  const [data, setData] = useState("Yo, pls sub to the channel");

  const returnComment = useCallback(
    (name) => {
        return data + name;
    }, [data]
  );

  return (
  <div>
    CallBackTutorial
    <Child returnComment={returnComment}/>

    <button onClick={() => {
        setToggle(!toggle);
    }}>Toggle</button>
    {toggle && <h1>Toggle</h1>}
    </div>);
}

export default CallBackTutorial;
