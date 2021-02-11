import React, { useState, useRef, useEffect } from 'react'
import ReactPlayer from 'react-player'
import { VscTriangleRight } from 'react-icons/vsc';
import { AiOutlineInfoCircle } from 'react-icons/ai';
import '../styles/App.css';
import screenfull from 'screenfull'
import Navigation from '../components/Navigation';
import Info from '../components/Info.js'
import Lane80 from '../components/Lane80.js'
import Lane90 from '../components/Lane90.js'
import Lane00 from '../components/Lane00.js'
import LaneDisney from '../components/LaneDisney.js'
import LaneActor from '../components/LaneActor.js'
import Footer from '../components/Footer'

function App({ arrayDisney, arrayJohnnydepp, array00, array90, array80, backdrop, overview, title, youtubebackground, logo, youtube, }) {
  const [muted, setMuted] = useState(true);
  const [on, setOn] = useState(false);
  const [handlePause, setHandlePause] = useState(true);
  const player = useRef(null);

  const handleClickFullscreen = () => {
    if (screenfull.isEnabled) {
      setMuted(false);
      screenfull.request(player.current.wrapper);
    }
    else if (!screenfull.isEnabled) {
      setMuted(true);
      screenfull.request(player.current.wrapper);
    }
  }

  useEffect(() => {
    const handleEsc = (event) => {
      if (event.keyCode === 27)
        setMuted(true);
    };
    window.addEventListener('keydown', handleEsc);
    return () => {
      window.removeEventListener('keydown', handleEsc);
    };
  }, []);

  const toggleTrueFalse = () => {
    setOn(!on);
    setHandlePause(!handlePause);
  };

  return (
    <div className="App" >
      <Navigation />
      <div className="react-player">
        <ReactPlayer
          ref={player}
          url={youtubebackground}
          playing={handlePause}
          loop={true}
          controls={true}
          width='cover'
          height="900px"
          muted={muted}
        />
      </div>
      <div className="movie-logo-container">
        <img className="movie-logo" src={logo} alt="logo" />
        <div>
          <button className='play-button' onClick={handleClickFullscreen}><VscTriangleRight className='play-button-icon' />Afspelen</button>
          <button className='info-button' onClick={toggleTrueFalse}><AiOutlineInfoCircle className='info-button-icon' />Meer informatie</button>
        </div>
      </div>
      <div>{on ? <Info title={title} logo={logo} toggleTrueFalse={toggleTrueFalse} backdrop={backdrop} youtube={youtube} overview={overview} /> : null}</div>
      <Lane80 array80={array80} />
      <Lane90 array90={array90}/>
      <Lane00 array00={array00}/>
      <LaneDisney arrayDisney={arrayDisney}/>
      <LaneActor arrayJohnnydepp={arrayJohnnydepp}/>
      <Footer />
    </div>
  );
}
export default App;