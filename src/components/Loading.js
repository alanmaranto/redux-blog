import React from "react";
import './Loading.css';

const Spinner = () => {
  return (
    <div className="center">
      <div className="lds-ellipsis">
        <div></div>
        <div></div>
        <div></div>
        <div></div>
      </div>
    </div>
  );
};

export default Spinner;
