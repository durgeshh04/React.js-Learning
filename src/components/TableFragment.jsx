// Practice of Fragment in React

import React from "react";
import ColumnFragment from "./ColumnFragment";

const TableFragment = () => {
  return (
    <React.Fragment>
      <table>
        <tbody>
          <tr>
            <ColumnFragment />
          </tr>
        </tbody>
      </table>
    </React.Fragment>
  );
};

export default TableFragment;
