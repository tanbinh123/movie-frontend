import React from "react";
import '../styles/Lane.css';
import Cardwrapper2 from './Cardwrapper2'
import Footer from '../components/Footer'

function LaneSearch({searchResult}) {
  return (
    <>
      <div className="title">Search</div> 
      <div>
        <Cardwrapper2 array={searchResult} />
        <Footer />
      </div>
    </>
  );
};
export default LaneSearch;