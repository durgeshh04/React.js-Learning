// React useContext Hook: 

import React, { createContext, useState, useContext, useEffect } from "react";

export const UserContext = createContext();

export const UserProvider = ({ children }) => {
  const [theme, setTheme] = useState("light");

  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === "light" ? "dark" : "light"));
  };


  return (
    <UserContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </UserContext.Provider>
  );
};
