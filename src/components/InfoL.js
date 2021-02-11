import React, { useState, useRef } from "react";
import ReactPlayer from 'react-player'
import '../styles/Info.css';
import { VscTriangleRight } from 'react-icons/vsc';
import { AiOutlinePlus } from 'react-icons/ai';
import { BiDislike } from 'react-icons/bi';
import { BiLike } from 'react-icons/bi';
import { AiOutlineCloseCircle } from 'react-icons/ai';
import screenfull from 'screenfull'

function Info({ item, toggleTrueFalse }) {
  const [bgColorLike, setBgColorLike] = useState(false)
  const [bgColorDisLike, setBgColorDisLike] = useState(false)
  const [wait, setWait] = useState(item.backdrop_path)
  
  const logName = () => {
    setWait("")
  }
  setTimeout(logName, 1500)

  const player = useRef(null);

  const handleClickFullscreen = () => {
    if (screenfull.isEnabled) {
      screenfull.request(player.current.wrapper);
    }
  }
  const youtubebackground = `https://www.youtube.com/watch?v=${item.trailer}`
  return (
      <div className="popup-container">
        <div className="popup">
        <div className="click-left" onClick={toggleTrueFalse} />
        <div className="click-right" onClick={toggleTrueFalse} />
        <div className="reactplayer">
            <ReactPlayer
              ref={player}
              light={wait}
              url={youtubebackground}
              playing={true}
              controls={false}
              loop={true}
              width="cover"
              height="500px"
              // playIcon={<button className='info-play-button' onClick={handleClickFullscreen}><VscTriangleRight className='play-button-icon' />Afspelen</button>}
              playIcon={<div></div>}
              mute
            />
            <AiOutlineCloseCircle onClick={toggleTrueFalse} className='close-button' />
            <div className="movie-logo-container">
            <img className="info-movie-logo" src={item.movie_logos.movielogos[0].url_hd} alt="" onError="display='none'"/>
            <button className='info-play-button' onClick={handleClickFullscreen}><VscTriangleRight className='play-button-icon' />Play</button>
            <button className='add-button' ><AiOutlinePlus /></button>
            <button onClick={() => setBgColorLike((bgColorLike) => !bgColorLike)} className={`like-button ${bgColorLike ? "green": ""}`}><BiLike /></button>
            <button onClick={() => setBgColorDisLike((bgColorDisLike) => !bgColorDisLike)} className={`dislike-button ${bgColorDisLike ? "red" : ""}`}><BiDislike /></button>
            </div>
            <div>
              <div className="movieExcerpt">
                <p className="movie-title">About {item.title} </p>
                <p className="movie-overview">{item.overview}</p>
              </div>
              <div className="infoDetails">
                <p className="extraInfo">Genres: <span>{item.genres[0].name}, {item.genres[1].name}</span></p>
                <p className="extraInfo">Director: <span>{item.director}</span></p>
                <p className="extraInfo">Runtime: <span>{item.runtime}min</span></p>
              </div>
            </div>
          </div>
        </div>
        </div>
  );
};
export default Info;