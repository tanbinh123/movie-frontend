import React from "react";
import '../styles/Lane.css';
import Cardwrapper from './Cardwrapper'

function LaneAction(arrayAction) {
  return (
    <>
      <h3>Action movies</h3>
      <div>
        <Cardwrapper array={arrayAction.arrayAction} />
      </div>
    </>
  );
};
export default LaneAction;