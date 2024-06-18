import React from "react";
import loadind from "./loading.gif.gif";

const Spinner = () => {
  return (
    <div className="text-center">
      <img className="my-3" src={loadind} alt={loadind} />
    </div>
  );
};
export default Spinner;
