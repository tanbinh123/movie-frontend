import React from "react";
import '../styles/Lane.css';
import Cardwrapper from './Cardwrapper'

function Lane80s(array80) {

  return (
    <>
      <h3>80's movies</h3>
      <div>
        <Cardwrapper array={array80.array80} />
      </div>
    </>
  );
};
export default Lane80s;