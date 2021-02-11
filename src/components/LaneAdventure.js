import React from "react";
import '../styles/Lane.css';
import Cardwrapper from './Cardwrapper'

function LaneAdventure(arrayAdventure) {

  return (
    <>
      <h3>Adventure movies</h3>
      <div>
        <Cardwrapper array={arrayAdventure.arrayAdventure} />
      </div>
    </>
  );
};
export default LaneAdventure;