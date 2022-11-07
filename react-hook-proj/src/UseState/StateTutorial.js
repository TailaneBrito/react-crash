import React, { useState } from "react";

const StateTutorial = () => {
  //   let counter = 0;
  const [counter, setCounter] = useState(0);
  const [inputValue, setInputValue] = useState("");

  const increment = () => {
    // counter = counter + 1;
    setCounter(counter + 1);
    console.log(counter);
  };

  let onChange = (event) => {
    const newValue = event.target.value;
    setInputValue(newValue);
  };

  return (
    <div>
      <span>{counter}</span>
      <button onClick={increment}>Increment</button>
      <br />
      <input
        placeholder="entering something... "
        onChange={onChange}
      />
      {inputValue}
    </div>
  );
};

export default StateTutorial;
