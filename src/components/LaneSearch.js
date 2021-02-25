import React from "react";
import '../styles/Lane.css';
import Cardwrapper2 from './Cardwrapper2'

function LaneSearch(searchResult) {
  return (
    <>
      <h3>Search</h3>
      <div>
        <Cardwrapper2 array={searchResult.searchResult} />
      </div>
    </>
  );
};
export default LaneSearch;