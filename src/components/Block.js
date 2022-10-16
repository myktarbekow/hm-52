import React from "react";

function Block({ block, id }) {
  console.log(id, "return");
  return (
    <div className="main" style={{ background: block }}>
      <div> {block}</div>
    </div>
  );
}

export default Block;
