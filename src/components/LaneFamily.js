import React from "react";
import '../styles/Lane.css';
import Cardwrapper from './Cardwrapper'

function LaneFamily(arrayFamily) {
  return (
    <>
      <h3>Family movies</h3>
      <div>
        <Cardwrapper array={arrayFamily.arrayFamily} />
      </div>
    </>
  );
};
export default LaneFamily;