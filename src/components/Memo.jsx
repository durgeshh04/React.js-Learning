// Practicing memo in react.js

import React, { memo } from "react";

const Memo = memo(function Memo({ name }) {
  return (
    <div>
      {console.log("Memo.jsx")}
      {name}
    </div>
  );
})

export default Memo;
