import React from "react";

function Part3({ name, descr }) {
  return (
    <div>
      <h4> {name} </h4>
      <p>{descr.substr(1, 100)} ...</p>
    </div>
  );
}

export default Part3;
