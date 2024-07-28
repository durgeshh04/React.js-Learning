// Reder as props -> Children as a function

import React, { useState, useEffect, Children } from "react";

const ChildrenPattern = ({children}) => {
  const [position, setPosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const updatePosition = (e) => {
        setPosition({x:e.clientX, y:e.clientY})
    };

    window.addEventListener('mousemove', updatePosition)

    return()=>{
        window.removeEventListener('mousemove', updatePosition)
    }
  }, []);
  return children(position);
};

export default ChildrenPattern;
