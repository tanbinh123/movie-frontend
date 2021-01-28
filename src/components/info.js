import React, { useEffect } from "react";
import ReactPlayer from 'react-player'
import "./info.css";
import { VscTriangleRight } from 'react-icons/vsc';
import { AiOutlinePlus } from 'react-icons/ai';
import { BiDislike } from 'react-icons/bi';
import { BiLike } from 'react-icons/bi';
import { AiOutlineCloseCircle } from 'react-icons/ai';

function Lane({ youtube, overview, backdrop, toggleTrueFalse }) {

  useEffect(() => {
    document.body.style.overflow = 'hidden';
    return () => document.body.style.overflow = 'unset';
  }, []);

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
            <p className="movie-overview">{overview}{overview}{overview}{overview}{overview}{overview}v{overview}</p>
            <div className="infoDetails">
              <div className="extraInfo">
                <p style={{ color: "gray" }}>Genre: </p><p>....</p>
              </div>
              <div className="extraInfo">
                <p style={{ color: "gray" }}>Naam regisseur: </p><p>  ....</p>
              </div>
              <div className="extraInfo">
                <p style={{ color: "gray" }}>Duur:</p><p>....</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default Lane;