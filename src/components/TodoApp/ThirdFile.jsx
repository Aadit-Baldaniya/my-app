import React, { useContext } from "react";
import { PropsData } from "./FirstFile";

function ThirdFile() {
  const value = useContext(PropsData);
  console.log(value);
  return (
    <div>
      <h2 style={{ padding: "10px", margin: "0px" }}>Todo List</h2>
    </div>
  );
}

export default ThirdFile;
