// Conditional Redering

import React, { useState } from "react";

const ConditionalRendering = () => {
  const [loggedIn, setLoggedIn] = useState(false);

  const handleLogin = () => {
    setLoggedIn(true);
  };

  return (
    <div>
      {/* if-else rendering */}
      {/* {(() => {
        if (loggedIn) {
          return <div>Welcome Durgesh</div>;
        } else {
          return <div>Welcome Guest</div>;
        }
      })()}
      <div style={{ marginTop: "15px" }}>
        <button onClick={handleLogin}>Login</button>
      </div> */}

      {/* Element Varibles Rendering */}
      {/* {(() => {
        let message
        if (loggedIn) {
            message = <div>Welcome Durgesh</div>;
        } else {
            message = <div>Welcome Guest</div>;
        }
        return <div>{message}</div>
      })()}
      <div style={{ marginTop: "15px" }}>
        <button onClick={handleLogin}>Login</button>
      </div> */}

      {/* Ternary Operator Rendering*/}
      {/* {loggedIn ? <div>Welcome Durgesh</div> : <div>Welcome Guest</div>}
      <div style={{ marginTop: "15px" }}>
        <button onClick={handleLogin}>Login</button>
      </div> */}

      {/* Short Circuit Operator Rendering */}
      {loggedIn && <div>Welcome Durgesh</div> || <div>Welcome Guest</div>}
      <div style={{ marginTop: "15px" }}>
        <button onClick={handleLogin}>Login</button>
      </div>
    </div>
  );
};

export default ConditionalRendering;
