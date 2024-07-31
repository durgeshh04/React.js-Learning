import React from "react";
import ComponentC from "./ComponentC";

export const UserContext = React.createContext();
export const ChannelContext = React.createContext();
const UseContextHook = () => {
  return (
    <div>
      <UserContext.Provider value={"Durgesh"}>
        <ChannelContext.Provider value={"Eagle"}>
          <ComponentC />
        </ChannelContext.Provider>
      </UserContext.Provider>
    </div>
  );
};

export default UseContextHook;
