import React, { useState, useEffect } from "react";
import ReactPlayer from 'react-player'
import "./info.css";
import { VscTriangleRight } from 'react-icons/vsc';
import { AiOutlinePlus } from 'react-icons/ai';
import { BiDislike } from 'react-icons/bi';
import { BiLike } from 'react-icons/bi';
import { AiOutlineCloseCircle } from 'react-icons/ai';

function Info({ title, logo, youtube, overview, backdrop, toggleTrueFalse }) {

  const [bgColorLike, setBgColorLike] = useState(false)
  const [bgColorDisLike, setBgColorDisLike] = useState(false)

  // useEffect(() => {
  //   document.body.style.overflow = 'hidden';
  //   return () => document.body.style.overflow = '';
  // }, []);

  const youtubebackground = `https://www.youtube.com/watch?v=${youtube}`

  return (
      <div className="popup-container">
        <div className="popup">
          <div className="reactplayer">
            <ReactPlayer
              light={backdrop}
              url={youtubebackground}
              playing={true}
              controls={false}
              width="cover"
              height="500px"
              playIcon={<button className='info-play-button'><VscTriangleRight className='play-button-icon' />Afspelen</button>}
            />
            <AiOutlineCloseCircle onClick={toggleTrueFalse} className='close-button' />
            <img className="info-movie-logo" src={logo} alt="logo" />
            <button className='add-button' ><AiOutlinePlus /></button>
            <button onClick={() => setBgColorLike((bgColorLike) => !bgColorLike)} className={`like-button ${bgColorLike ? "green": ""}`}><BiLike /></button>
            <button onClick={() => setBgColorDisLike((bgColorDisLike) => !bgColorDisLike)} className={`dislike-button ${bgColorDisLike ? "red" : ""}`}><BiDislike /></button>
            <div className="infoMovie">
              <div className="movieExcerpt">
                <p className="movie-title">Over {title} </p>
                <p className="movie-overview">{overview}</p>
              </div>
              <div className="infoDetails">
                <p className="extraInfo">Genre: <span>Dramafilm</span></p>
                <p className="extraInfo">Naam regisseur: <span>Todd Phillips</span></p>
                <p className="extraInfo">Duur:<span>122 min</span></p>
              </div>
            </div>
          </div>
        </div>
      </div>
  );
};
export default Info;