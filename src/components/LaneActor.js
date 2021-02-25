import React from "react";
import '../styles/Lane.css';
import Cardwrapper from './Cardwrapper'

function LaneActor(arrayJohnnydepp) {
  return (
    <>
      <h3>Johnny Depp's movies</h3>
      <div>
        <Cardwrapper array={arrayJohnnydepp.arrayJohnnydepp} />
      </div>
    </>
  );
};
export default LaneActor;