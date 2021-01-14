import React, {useState}  from 'react'
import ReactPlayer from 'react-player'
import { VscTriangleRight } from 'react-icons/vsc';
import { AiOutlineInfoCircle } from 'react-icons/ai';
import './App.css';

require('dotenv').config()

const a = ['100', '200', '300', '400', '500', '600'];
const randomNum = a[Math.floor(a.length * Math.random())];

function App() {

const [logo, setLogo] = useState("");
const [overview, setOverview] = useState("");
const [youtube, setYoutube] = useState("");
const [bgimage, setBgimage] = useState("");
const backdrop = `https://image.tmdb.org/t/p/w1280/${bgimage}`
const youtubebackground = `https://www.youtube.com/watch?v=${youtube}`
const api = {
  "key": process.env.REACT_APP_API,
}

fetch(`https://api.themoviedb.org/3/movie/${randomNum}?api_key=${api.key}`)
  .then(response => response.json())
  .then(response => {
    setBgimage(response.poster_path)
    setOverview(response.overview);
  })
fetch(`https://api.themoviedb.org/3/movie/${randomNum}/videos?api_key=${api.key}&language=en-US`)
  .then(response => response.json())
  .then(movie => {
    setYoutube(movie.results[0].key);
  })
  
fetch(`http://webservice.fanart.tv/v3/movies/${randomNum}?api_key=d74996a4a3d05c07a61abb08608a5974&client_key=52c813aa7b8c8b3bb87f4797532a2f8c`)
  .then(response => response.json())
  .then(result => {
    setLogo(result.hdmovielogo[0].url);
  })

  return (
    <div className="App">
      <ReactPlayer
        url={youtubebackground}
        playing='true'
        width='cover'
        playIcon={<button className='play-button'><VscTriangleRight className='play-button-icon' />Afspelen</button>}
        height='700px'
        light={backdrop}
         />
         <img className="movie-logo" src={logo} alt="logo" width="500px"/>
         <p className="movie-overview">{overview}</p>
         <button className='info-button'><AiOutlineInfoCircle className='info-button-icon' />Meer informatie</button>
      {/* <img src='https://image.tmdb.org/t/p/w1280/52AfXWuXCHn3UjD17rBruA9f5qb.jpg' alt='img' className='background' /> */}
    </div>
  );
}
export default App;
