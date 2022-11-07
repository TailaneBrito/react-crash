import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { changeColor } from "./../features/theme";

function ChangeColor() {
  const [color, setColor] = useState("");
  const dispatch = useDispatch();

  return (
    <div>
      <input
        type="text"
        onChange={(event) => setColor(event.target.value)}
      ></input>
      <button
        onClick={() => {
          dispatch(changeColor(color));
        }}
      >
        changeColor
      </button>
    </div>
  );
}

export default ChangeColor;
