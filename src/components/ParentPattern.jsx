import React from "react";
import ChildrenPattern from "./ChildrenPattern";

const ParentPattern = () => {
  return (
    <div>
      <ChildrenPattern>
        {({ x, y }) => (
          <div>
            <h1>Move your mouse around!</h1>
            <p>
              Current Position of Mouse is ({x}, {y})
            </p>
          </div>
        )}
      </ChildrenPattern>
    </div>
  );
};

export default ParentPattern;