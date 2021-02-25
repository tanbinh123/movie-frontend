   import React, { useState, useRef } from "react"
import '../styles/Lane2.css';
import { VscTriangleRight } from 'react-icons/vsc';
import { AiOutlinePlus } from 'react-icons/ai';
import { BiDislike } from 'react-icons/bi';
import { BiLike } from 'react-icons/bi';
import { IoIosArrowDropdown } from 'react-icons/io';
import ReactPlayer from 'react-player'
import screenfull from 'screenfull'
import HoverIntent from 'react-hoverintent'
import InfoS from './InfoS.js'

function Card2({ item }) {
    const [bgColorLike, setBgColorLike] = useState(false)
    const [bgColorDisLike, setBgColorDisLike] = useState(false)
    const [showPop, setShowPop] = useState(false)
    const [on, setOn] = useState(false);
    const [wait, setWait] = useState(item)
    const url = `https://image.tmdb.org/t/p/w500`

    const player = useRef(null);
    const handleClickFullscreen = () => {
        if (screenfull.isEnabled) {
            screenfull.request(player.current.wrapper);
        }
    }
    const toggleTrueFalse = () => {
        setOn(!on);
      };

    return (
        <div>
                <div>{on ? <InfoS item={item} toggleTrueFalse={toggleTrueFalse} /> : null}</div>        
                <div className="parent2">
                    <div onClick={() => setShowPop(!showPop)}>
                        <div className={`${!showPop ? "yes" : "none"}`}>
                        <img src={`${url}${item.backdropPath}`} className="backdrop" alt="" onError="display='none'" width="300"  />
                        <img src={item.logoUrl} className="backdrop_logo" alt=""  onError="display='none'" />
                        </div>
                    </div>
                    <div className={`${showPop ? "yes" : "none"}`}>
                        <HoverIntent
                            onMouseOver={() => { setWait("") }}
                            onMouseOut={() => setWait(`${url}${item.backdropPath}`)}
                            sensitivity={7}
                            interval={100}
                            timeout={100}
                        >
                            <div className="laneimg2">
                                <ReactPlayer
                                    ref={player}
                                    url={`https://www.youtube.com/watch?v=${item.youtubeKey}`}
                                    light={wait}
                                    width="300px"
                                    height="200px"
                                    playIcon={<div></div>}
                                    playing={true}
                                    loop={true}
                                    controls={true}
                                    muted={true}
                                />
                                <div className="buttons">
                                    <div>
                                    <button className='info-play-button'><VscTriangleRight className='play-button-icon' onClick={handleClickFullscreen} /></button>
                                    <button className='add-button' onClick={toggleTrueFalse} ><AiOutlinePlus /></button>
                                    <button onClick={() => setBgColorLike((bgColorLike) => !bgColorLike)} className={`like-button ${bgColorLike ? "green" : ""}`}><BiLike /></button>
                                    <button onClick={() => setBgColorDisLike((bgColorDisLike) => !bgColorDisLike)} className={`dislike-button ${bgColorDisLike ? "red" : ""}`}><BiDislike /></button>
                                    </div>
                                    <div>
                                    <button className='add-button' onClick={() => setShowPop(!showPop)} ><IoIosArrowDropdown style={{fontSize: "30px"}} /></button>
                                    </div>
                                </div >
                                <p className='card-text'>{item.runtime} min - {item.genres[0].name}</p>
                                
                            </div>
                        </HoverIntent>
                    </div>
                </div>
        </div >
    );
};
export default Card2;