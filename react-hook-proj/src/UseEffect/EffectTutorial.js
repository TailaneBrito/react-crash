import React, { useEffect, useState } from "react";
import axios from "axios";

function EffectTutorial() {
  const [data, setData] = useState("");
  const [count, setCount] = useState(0);

  useEffect(() => {
    //called all the time a state is changed.
    axios
      .get("https://jsonplaceholder.typicode.com/comments")
      .then((response) => {
        setData(response.data[0].email);
        console.log("API WAS Called");
      });
  }, []); //now the state is called once with the empty array

  //solve problems such as:


  return (
    <div>
      EffectTutorial
      <div>{data}</div>
      <h1>{count}</h1>
      <button onClick={() => setCount(count +1)}>Click</button>
    </div>
  );
}

export default EffectTutorial;
