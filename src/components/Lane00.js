import React from "react";
import '../styles/Lane.css';
import Cardwrapper from './Cardwrapper'

function Lane80s(array00) {

  return (
    <>
      <h3>00's movies</h3>
      <div>
        <Cardwrapper array={array00.array00} />
      </div>
    </>
  );
};
export default Lane80s;