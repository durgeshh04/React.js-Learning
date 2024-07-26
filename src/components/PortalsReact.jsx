import React from "react";
import ReactDOM from "react-dom";

const PortalsReact = () => {
  return ReactDOM.createPortal(
    <h2>
      This is my new root Element to the Component. This is "portal-root"
    </h2>,
    document.getElementById('portal-root')
  );
};

export default PortalsReact;
