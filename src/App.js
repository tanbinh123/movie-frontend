import './App.css';
import React from 'react'
import ReactPlayer from 'react-player'
// import bg from './images/jumani.webp'
require('dotenv').config()
const api = {
  "key": process.env.REACT_APP_API,
}
// http://192.168.2.9:3000/topics
fetch(`https://api.themoviedb.org/3/movie/550?api_key=${api.key}`)

  .then(response => response.json())
  .then(json => {
    console.log(json)
    console.log(json.backdrop_path)
    console.log(json.original_title)
    console.log(json.overview)
    console.log(json.genres[0].name)
    console.log(json.runtime)
  })

// https://api.themoviedb.org/3/movie/550/videos?api_key=3754c9307adf71f6f0b05eba28de0b3c&language=en-US
// https://www.youtube.com/watch?v=6JnN1DmbqoU
function App() {
  return (
    <div className="App">
      <ReactPlayer
        url='https://www.youtube.com/watch?v=6JnN1DmbqoU'
        playing='true'
        width='cover'
        playIcon={<button className='play-button'>Afspelen</button>}
        height='700px'
        light='https://image.tmdb.org/t/p/w1280/52AfXWuXCHn3UjD17rBruA9f5qb.jpg'
         />
         <p className='movietitle'>FightClub</p>
         <button className='info-button'>Meer informatie</button>
      {/* <img src='https://image.tmdb.org/t/p/w1280/52AfXWuXCHn3UjD17rBruA9f5qb.jpg' alt='img' className='background' /> */}
    </div>
  );
}
export default App;
