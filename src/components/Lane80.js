import React from "react";
import axios from 'axios';
import '../styles/Lane.css';
import Cardwrapper from './Cardwrapper'

const title = [];
const logo = [];

function Lane80s(array80) {

  const fetchData = async () => {
    const response = await axios(
      'http://192.168.2.9:8080/movies/discover/80s',
    );
    // console.log(response.data)
    for (let i = 0; i < 40; i++) {
      logo.push(logo[i] = response.data[i].backdrop_path)
      title.push(title[i] = response.data[i].title)
    }
  };
  fetchData();
  // console.log(array80)
  // console.log(array80.array80[0])
  // console.log(array80.array80[0].backdrop_path)
  return (
    <>
      <h3>80's movies</h3>
      <div>
        <Cardwrapper logo={logo} title={title} />
      </div>
    </>
  );
};
export default Lane80s;