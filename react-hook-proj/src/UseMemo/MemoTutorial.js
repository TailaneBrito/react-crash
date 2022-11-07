import React, { useState, useEffect, useMemo } from "react";
import axios from "axios";

function MemoTutorial() {
  //improve performance
  const [data, setData] = useState(null);
  const [toggle, setToggle] = useState(false);

  useEffect(() => {
    axios
      .get("https://jsonplaceholder.typicode.com/comments")
      .then((response) => {
        setData(response.data);
      });
  }, []);

  const findLongestName = (comments) => {
    if (!comments) return null;

    let longestName = "";
    for (let i = 0; i < comments.length; i++) {
      let currentName = comments[i].name;
      if (currentName.length > longestName.length) {
        longestName = currentName;
      }
    }

    console.log("This was computed");

    return longestName;
  };
  

  //1st arg > function, 2nd arg > array
  //recompute the value returned from findlongestName when data changes
  const getLongestName = useMemo(() => findLongestName(data), [data])

  return (
    <div>
    MemoTutorial
    
    {/* <div>{findLongestName(data)}</div> */}
    <div>{getLongestName}</div>
    <button onClick={() => setToggle(!toggle)}>Toggle</button>
    {toggle && <h1>toggle</h1>}
    </div>
  )
}

export default MemoTutorial;
