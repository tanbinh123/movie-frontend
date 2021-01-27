import React from "react";
import ReactPlayer from 'react-player'
import "./info.css";
import { VscTriangleRight } from 'react-icons/vsc';
import { AiOutlinePlus } from 'react-icons/ai';
import { BiDislike } from 'react-icons/bi';
import { BiLike } from 'react-icons/bi';
import { AiOutlineCloseCircle } from 'react-icons/ai';
import '../App.css';

function Lane({youtube, overview, backdrop, toggleTrueFalse} ) {
  const youtubebackground = `https://www.youtube.com/watch?v=${youtube}`
  return (
    <>
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
      <button className='add-button' ><AiOutlinePlus /></button>
      <button className='dislike-button' ><BiDislike /></button>
      <button className='like-button'><BiLike /></button>
      <p className="movie-overview">{overview}</p>
      </div>
      </div>
      </div>
    </>
  );
};
export default Lane;