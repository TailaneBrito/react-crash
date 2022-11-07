import React, { useRef, useEffect, useLayoutEffect } from "react";

function LayoutEffectTutorial() {
    const inputRef = useRef(null)

  useLayoutEffect(() => { 
    //called before the useEffect, 
    //reacts call useLayoutEffect
    //use it in case you want to change the layout before printing to the user
    // it is UI based function.
    console.log("useLayoutEffect");
    console.log(inputRef.current.value);
  }, []);

  useEffect(() => {
    inputRef.current.value = "HELLO"
    console.log("useEffect");
  }, []);
  
  return <div>
    LayoutEffectTutorial
    <br />
    <input ref={inputRef} value="TAI"/>
    </div>;
}

export default LayoutEffectTutorial;
