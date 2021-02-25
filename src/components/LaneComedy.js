import React from "react";
import '../styles/Lane.css';
import Cardwrapper from './Cardwrapper'

function LaneComedy(arrayComedy) {
  return (
    <>
      <h3>Comedy movies</h3>
      <div>
        <Cardwrapper array={arrayComedy.arrayComedy} />
      </div>
    </>
  );
};
export default LaneComedy;