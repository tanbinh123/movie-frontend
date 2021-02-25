import React from "react";
import '../styles/Lane.css';
import Cardwrapper from './Cardwrapper'

function LaneFantasy(arrayFantasy) {
  return (
    <>
      <h3>Fantasy movies</h3>
      <div>
        <Cardwrapper array={arrayFantasy.arrayFantasy} />
      </div>
    </>
  );
};
export default LaneFantasy;