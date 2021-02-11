import React from "react";
import '../styles/Lane.css';
import Cardwrapper from './Cardwrapper'

function Lane90s(array90) {

  console.log(array90)

  return (
    <>
      <h3>90's movies</h3>
      <div>
        <Cardwrapper array={array90.array90} />
      </div>
    </>
  );
};
export default Lane90s;