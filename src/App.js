import React, { useState } from 'react'
import ReactPlayer from 'react-player'
import { VscTriangleRight } from 'react-icons/vsc';
import { AiOutlineInfoCircle } from 'react-icons/ai';
import { AiOutlinePlus } from 'react-icons/ai';
import { BiDislike } from 'react-icons/bi';
import { BiLike } from 'react-icons/bi';
import './App.css';
import Info from './components/info.js'

require('dotenv').config()

async function CreateRandomNumber() {
  const a = ['102', '201', '303', '401', '501', '602', '103', '204', '305', '406', '507', '608'];
  const randomNum = a[Math.floor(a.length * Math.random())];
  console.log(randomNum)
  return randomNum;
}
CreateRandomNumber();

async function Api() {
  const api = {
    "key": process.env.REACT_APP_API,
  }
  console.log(api.key)
  return api.key;
}
Api();

function App() {
  const [on, setOn] = useState(false);
  console.log(on)
  const [logo, setLogo] = useState("");
  const [overview, setOverview] = useState("");
  const [youtube, setYoutube] = useState("");
  const [bgimage, setBgimage] = useState("");
  const backdrop = `https://image.tmdb.org/t/p/w1280/${bgimage}`
  const youtubebackground = `https://www.youtube.com/watch?v=${youtube}`

  async function fetchMoviesJSON() {
    const response = await fetch('https://api.themoviedb.org/3/movie/406?api_key=33ea3e5328d23c13d33ed05add4783b7');
    const movies = await response.json();
    return movies;
  }
  fetchMoviesJSON().then(response => {
    setBgimage(response.backdrop_path)
    setOverview(response.overview);
  });

  async function fetchVideoJSON() {
    const response = await fetch('https://api.themoviedb.org/3/movie/406/videos?api_key=33ea3e5328d23c13d33ed05add4783b7&language=en-US');
    const movies = await response.json();
    return movies;
  }
  fetchVideoJSON().then(movie => {
    setYoutube(movie.results[1].key);
  });

  async function fetchLogoJSON() {
    const response = await fetch('http://webservice.fanart.tv/v3/movies/406?api_key=d74996a4a3d05c07a61abb08608a5974&client_key=52c813aa7b8c8b3bb87f4797532a2f8c');
    const movies = await response.json();
    return movies;
  }
  fetchLogoJSON().then(result => {
    setLogo(result.hdmovielogo[0].url);
  });
  const toggleTrueFalse = () => setOn(!on);
  return (
    <div className="App">
      <div className="react-player">
        <ReactPlayer
        url={youtubebackground}
        playing={true}
        loop={true} 
        controls={true}
        width='cover'
        height="900px"
        muted
        playIcon={<button className='play-button'><VscTriangleRight className='play-button-icon' />Afspelen</button>}
        light={backdrop}
        config={{ youtube: { playerVars: { modestbranding: 1 } } }}
      />
      </div>
      <img className="movie-logo" src={logo} alt="logo" />
      <p className="movie-overview">{overview}</p>
      <div className="buttons">
      {/* <button className='play-button'><VscTriangleRight className='play-button-icon' />Afspelen</button> */}
      <button className='info-button' onClick={toggleTrueFalse}><AiOutlineInfoCircle className='info-button-icon' />Meer informatie</button>
      <button className='add-button' ><AiOutlinePlus /></button>
      <button className='dislike-button' ><BiDislike /></button>
      <button className='like-button'><BiLike /></button>
      </div>
      <div>{on ? <Info /> : null}</div>
    </div>
    
  );
}
export default App;
