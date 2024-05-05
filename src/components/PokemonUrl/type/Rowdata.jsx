import React from "react";
import Tag from "../../tag/Tag";

function Rowdata(props) {
  const { pokemonn } = props;
  console.log("pokemon", pokemonn);
  return (
    <div>
      <div>
        <p>
          {pokemonn.types.map((value, index) => {
            return <Tag key={index} type={value.type.name} />;
          })}
        </p>
      </div>
    </div>
  );
}

export default Rowdata;
