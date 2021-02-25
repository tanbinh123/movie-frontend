import React from "react";
import '../styles/Lane.css';
import Cardwrapper from './Cardwrapper'

function LaneDisney(arrayDisney) {
  return (
    <>
      <h3>Disney movies</h3>
      <div>
        <Cardwrapper array={arrayDisney.arrayDisney} />
      </div>
    </>
  );
};
export default LaneDisney;