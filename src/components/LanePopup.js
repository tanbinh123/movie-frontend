import React, { useState, useRef } from "react";
import ReactPlayer from 'react-player'
import '../styles/LanePopup.css';
import { VscTriangleRight } from 'react-icons/vsc';
import { AiOutlinePlus } from 'react-icons/ai';
import { BiDislike } from 'react-icons/bi';
import { BiLike } from 'react-icons/bi';
import screenfull from 'screenfull'

function Info({ youtube, backdrop}) {
  const [fullScreen, setFullScreen] = useState(false)
  const [bgColorLike, setBgColorLike] = useState(false)
  const [bgColorDisLike, setBgColorDisLike] = useState(false)
  const [wait, setWait] = useState(backdrop)

  const logName = () => {
    setWait("")
  }
  setTimeout(logName, 1500)

  const player = useRef(null);

  const handleClickFullscreen = () => {
    if (screenfull.isEnabled) {
      setFullScreen(true);
      screenfull.request(player.current.wrapper);
    }
  }
  const youtubebackground = `https://www.youtube.com/watch?v=${youtube}`
  return (
      <div className="popup-container">
        <div className="popup">
        <div className="reactplayer">
            <ReactPlayer
              ref={player}
              light={wait}
              url={youtubebackground}
              playing={true}
              controls={false}
              loop={true}
              width="cover"
              height="300px"
              // playIcon={<button className='info-play-button' onClick={handleClickFullscreen}><VscTriangleRight className='play-button-icon' />Afspelen</button>}
              playIcon={fullScreen}
              mute
            />
            <div className="movie-logo-container">
            <button className='info-play-button' onClick={handleClickFullscreen}><VscTriangleRight className='play-button-icon' />Afspelen</button>
            <button className='add-button' ><AiOutlinePlus /></button>
            <button onClick={() => setBgColorLike((bgColorLike) => !bgColorLike)} className={`like-button ${bgColorLike ? "green": ""}`}><BiLike /></button>
            <button onClick={() => setBgColorDisLike((bgColorDisLike) => !bgColorDisLike)} className={`dislike-button ${bgColorDisLike ? "red" : ""}`}><BiDislike /></button>
            </div>
          </div>
        </div>
        </div>
  );
};
export default Info;