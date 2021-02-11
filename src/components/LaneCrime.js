import React from "react";
import '../styles/Lane.css';
import Cardwrapper from './Cardwrapper'

function LaneCrime(arrayCrime) {

  return (
    <>
      <h3>Crime movies</h3>
      <div>
        <Cardwrapper array={arrayCrime.arrayCrime} />
      </div>
    </>
  );
};
export default LaneCrime;