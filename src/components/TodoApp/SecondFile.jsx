import React, { memo, useContext } from "react";
import ThirdFile from "./ThirdFile";
// import { context } from "./FirstFile";

function SecondFile() {
  return (
    <div>
      <ThirdFile />
    </div>
  );
}

export default memo(SecondFile);
