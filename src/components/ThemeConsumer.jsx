import React, { useContext } from "react";
import { UserContext } from "./UserContext";

const ThemeConsumer = () => {
  const { theme, toggleTheme } = useContext(UserContext);
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          border: "2px solid black",
          width: "100%",
          background: theme === "light" ? "#fff" : "#000",
          color: theme === "light" ? "#000" : "#fff",
          padding: "10px",
          marginBottom: "10px",
        }}
      >
        <p>Current theme: {theme}</p>
      </div>
      <div>
        <button onClick={toggleTheme}>Toggle Theme</button>
      </div>
    </div>
  );
};

export default ThemeConsumer;
