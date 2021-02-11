import React from "react";
import '../styles/Lane.css';
import Cardwrapper from './Cardwrapper'

function LaneThriller(arrayThriller) {

  return (
    <>
      <h3>Thriller movies</h3>
      <div>
        <Cardwrapper array={arrayThriller.arrayThriller} />
      </div>
    </>
  );
};
export default LaneThriller;