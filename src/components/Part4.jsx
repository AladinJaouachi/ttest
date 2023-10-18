import React from "react";

const Part4 = ({ lien }) => {
  return (
    <div>
      <button>
        <a href={lien} target="_blank" >
          Read more
        </a>
      </button>
      <button>
        <a href={lien} target="_blank" >
          buy
        </a>
      </button>
    </div>
  );
};

export default Part4;
