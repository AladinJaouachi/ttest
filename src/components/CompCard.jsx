import React from "react";
import Part2 from "./Part2";
import Part3 from "./Part3";
import Part4 from "./Part4";

function CompCard({ DataFile }) {
  return (
    <>
      {DataFile.map((comptr, index) => {
        return (
          <div key={index} className="Comp">
            <Part2 imag={comptr.imag} />
            <Part3 name={comptr.name} descr={comptr.descr} />
            <Part4 lien={comptr.lien} />
          </div>
        );
      })}
    </>
  );
}

export default CompCard;
