import React, {useEffect} from "react";
import axios from 'axios';
import '../styles/Lane.css';
import Cardwrapper from './Cardwrapper'

const title = [];
const logo = [];

function Lane80s() {

  useEffect(() => {
    const fetchData = async () => {
      const response = await axios(
        'http://192.168.2.9:8080/movies/discover/80s',
      );
        for (let i = 0; i < 40; i++) {
          let a = i + 1
        logo.push(logo["logo" + a] =  response.data[i].backdrop_path)
        title.push(title["title" + a] =  response.data[i].title)
        }
    };
    fetchData();
  }, []);
  
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