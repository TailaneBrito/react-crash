import React, { useState, createContext } from "react";
import Login from "./Login";
import User from "./User";

//it is a collection of states (info) that can be
//accessed throught all the app.
export const AppContext = createContext(null);

function ContextTutorial() {
  const [username, setUsername] = useState("");
  return (
    <>
      <div>ContextTutorial</div>
      <AppContext.Provider value={{ username, setUsername }}>
        <Login />
        <User />
      </AppContext.Provider>

      {/* <Login setUsername={setUsername} /> */}
      {/* <User username={username} /> */}
    </>
  );
}

export default ContextTutorial;
