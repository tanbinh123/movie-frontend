import React, {useState} from "react";
import "./lane.css";

function Lane() {

  const [logo1, setLogo1] = useState("");
  const [logo2, setLogo2] = useState("");
  const [logo3, setLogo3] = useState("");
  const [logo4, setLogo4] = useState("");
  const [logo5, setLogo5] = useState("");
  const [logo6, setLogo6] = useState("");
  const [logo7, setLogo7] = useState("");
  const [logo8, setLogo8] = useState("");
  const [logo9, setLogo9] = useState("");
  const [logo10, setLogo10] = useState("");
  const [bgLogo1, setBgLogo1] = useState("");
  const [bgLogo2, setBgLogo2] = useState("");
  const [bgLogo3, setBgLogo3] = useState("");
  const [bgLogo4, setBgLogo4] = useState("");
  const [bgLogo5, setBgLogo5] = useState("");
  const [bgLogo6, setBgLogo6] = useState("");
  const [bgLogo7, setBgLogo7] = useState("");
  const [bgLogo8, setBgLogo8] = useState("");
  const [bgLogo9, setBgLogo9] = useState("");
  const [bgLogo10, setBgLogo10] = useState("");
  
  const backdrop1 = `https://image.tmdb.org/t/p/w500/${logo1}`
  const backdrop2 = `https://image.tmdb.org/t/p/w500/${logo2}`
  const backdrop3 = `https://image.tmdb.org/t/p/w500/${logo3}`
  const backdrop4 = `https://image.tmdb.org/t/p/w500/${logo4}`
  const backdrop5 = `https://image.tmdb.org/t/p/w500/${logo5}`
  const backdrop6 = `https://image.tmdb.org/t/p/w500/${logo6}`
  const backdrop7 = `https://image.tmdb.org/t/p/w500/${logo7}`
  const backdrop8 = `https://image.tmdb.org/t/p/w500/${logo8}`
  const backdrop9 = `https://image.tmdb.org/t/p/w500/${logo9}`
  const backdrop10 = `https://image.tmdb.org/t/p/w500/${logo10}`

  async function fetchMoviesJSON1() {
    const response = await fetch('https://api.themoviedb.org/3/movie/500?api_key=33ea3e5328d23c13d33ed05add4783b7');
    const movies1 = await response.json();
    return movies1;
  }
  fetchMoviesJSON1().then(response => {
    setLogo1(response.backdrop_path)
  });
  async function fetchMoviesJSON2() {
    const response = await fetch('https://api.themoviedb.org/3/movie/501?api_key=33ea3e5328d23c13d33ed05add4783b7');
    const movies2 = await response.json();
    return movies2;
  }
  fetchMoviesJSON2().then(response => {
    setLogo2(response.backdrop_path)
  });
  async function fetchMoviesJSON3() {
    const response = await fetch('https://api.themoviedb.org/3/movie/502?api_key=33ea3e5328d23c13d33ed05add4783b7');
    const movies3 = await response.json();
    return movies3;
  }
  fetchMoviesJSON3().then(response => {
    setLogo3(response.backdrop_path)
  });
  async function fetchMoviesJSON4() {
    const response = await fetch('https://api.themoviedb.org/3/movie/503?api_key=33ea3e5328d23c13d33ed05add4783b7');
    const movies4 = await response.json();
    return movies4;
  }
  fetchMoviesJSON4().then(response => {
    setLogo4(response.backdrop_path)
  });
  async function fetchMoviesJSON5() {
    const response = await fetch('https://api.themoviedb.org/3/movie/504?api_key=33ea3e5328d23c13d33ed05add4783b7');
    const movies5 = await response.json();
    return movies5;
  }
  fetchMoviesJSON5().then(response => {
    setLogo5(response.backdrop_path)
  });
  async function fetchMoviesJSON6() {
    const response = await fetch('https://api.themoviedb.org/3/movie/505?api_key=33ea3e5328d23c13d33ed05add4783b7');
    const movies6 = await response.json();
    return movies6;
  }
  fetchMoviesJSON6().then(response => {
    setLogo6(response.backdrop_path)
  });
  async function fetchMoviesJSON7() {
    const response = await fetch('https://api.themoviedb.org/3/movie/506?api_key=33ea3e5328d23c13d33ed05add4783b7');
    const movies7 = await response.json();
    return movies7;
  }
  fetchMoviesJSON7().then(response => {
    setLogo7(response.backdrop_path)
  });
  async function fetchMoviesJSON8() {
    const response = await fetch('https://api.themoviedb.org/3/movie/507?api_key=33ea3e5328d23c13d33ed05add4783b7');
    const movies8 = await response.json();
    return movies8;
  }
  fetchMoviesJSON8().then(response => {
    setLogo8(response.backdrop_path)
  });
  async function fetchMoviesJSON9() {
    const response = await fetch('https://api.themoviedb.org/3/movie/508?api_key=33ea3e5328d23c13d33ed05add4783b7');
    const movies9 = await response.json();
    return movies9;
  }
  fetchMoviesJSON9().then(response => {
    setLogo9(response.backdrop_path)
  });
  async function fetchMoviesJSON10() {
    const response = await fetch('https://api.themoviedb.org/3/movie/509?api_key=33ea3e5328d23c13d33ed05add4783b7');
    const movies10 = await response.json();
    return movies10;
  }
  fetchMoviesJSON10().then(response => {
    setLogo10(response.backdrop_path)
  });

  async function fetchLogoJSON1() {
    const response = await fetch('http://webservice.fanart.tv/v3/movies/500?api_key=d74996a4a3d05c07a61abb08608a5974&client_key=52c813aa7b8c8b3bb87f4797532a2f8c');
    const logo1 = await response.json();
    return logo1;
  }
  fetchLogoJSON1().then(result => {
    setBgLogo1(result.hdmovielogo[0].url);
  });
  async function fetchLogoJSON2() {
    const response = await fetch('http://webservice.fanart.tv/v3/movies/501?api_key=d74996a4a3d05c07a61abb08608a5974&client_key=52c813aa7b8c8b3bb87f4797532a2f8c');
    const logo2 = await response.json();
    return logo2;
  }
  fetchLogoJSON2().then(result => {
    setBgLogo2(result.hdmovielogo[0].url);
  });
  async function fetchLogoJSON3() {
    const response = await fetch('http://webservice.fanart.tv/v3/movies/502?api_key=d74996a4a3d05c07a61abb08608a5974&client_key=52c813aa7b8c8b3bb87f4797532a2f8c');
    const logo3 = await response.json();
    return logo3;
  }
  fetchLogoJSON3().then(result => {
    setBgLogo3(result.hdmovielogo[0].url);
  });
  async function fetchLogoJSON4() {
    const response = await fetch('http://webservice.fanart.tv/v3/movies/503?api_key=d74996a4a3d05c07a61abb08608a5974&client_key=52c813aa7b8c8b3bb87f4797532a2f8c');
    const logo4 = await response.json();
    return logo4;
  }
  fetchLogoJSON4().then(result => {
    setBgLogo4(result.hdmovielogo[0].url);
  });
  async function fetchLogoJSON5() {
    const response = await fetch('http://webservice.fanart.tv/v3/movies/504?api_key=d74996a4a3d05c07a61abb08608a5974&client_key=52c813aa7b8c8b3bb87f4797532a2f8c');
    const logo5 = await response.json();
    return logo5;
  }
  fetchLogoJSON5().then(result => {
    setBgLogo5(result.hdmovielogo[0].url);
  });
  async function fetchLogoJSON6() {
    const response = await fetch('http://webservice.fanart.tv/v3/movies/505?api_key=d74996a4a3d05c07a61abb08608a5974&client_key=52c813aa7b8c8b3bb87f4797532a2f8c');
    const logo6 = await response.json();
    return logo6;
  }
  fetchLogoJSON6().then(result => {
    setBgLogo6(result.hdmovielogo[0].url);
  });
  async function fetchLogoJSON7() {
    const response = await fetch('http://webservice.fanart.tv/v3/movies/506?api_key=d74996a4a3d05c07a61abb08608a5974&client_key=52c813aa7b8c8b3bb87f4797532a2f8c');
    const logo7 = await response.json();
    return logo7;
  }
  fetchLogoJSON7().then(result => {
    setBgLogo7(result.hdmovielogo[0].url);
  });
  async function fetchLogoJSON8() {
    const response = await fetch('http://webservice.fanart.tv/v3/movies/507?api_key=d74996a4a3d05c07a61abb08608a5974&client_key=52c813aa7b8c8b3bb87f4797532a2f8c');
    const logo8 = await response.json();
    return logo8;
  }
  fetchLogoJSON8().then(result => {
    setBgLogo8(result.hdmovielogo[0].url);
  });
  async function fetchLogoJSON9() {
    const response = await fetch('http://webservice.fanart.tv/v3/movies/508?api_key=d74996a4a3d05c07a61abb08608a5974&client_key=52c813aa7b8c8b3bb87f4797532a2f8c');
    const logo9 = await response.json();
    return logo9;
  }
  fetchLogoJSON9().then(result => {
    setBgLogo9(result.hdmovielogo[0].url);
  });
  async function fetchLogoJSON10() {
    const response = await fetch('http://webservice.fanart.tv/v3/movies/509?api_key=d74996a4a3d05c07a61abb08608a5974&client_key=52c813aa7b8c8b3bb87f4797532a2f8c');
    const logo10 = await response.json();
    return logo10;
  }
  fetchLogoJSON10().then(result => {
    setBgLogo10(result.hdmovielogo[0].url);
  });

  return (
    <>
      <h3>90’s movies</h3>
      <div>
        <ul className="cards-wrapper">
          <div className="parent">
          <img src={backdrop1} alt="logo" className="laneimg" />
          <img src={bgLogo1} alt="logo" className="logoimg" />
          </div>
         <div className="parent">
          <img src={backdrop2} alt="logo" className="laneimg" />
          <img src={bgLogo2} alt="logo" className="logoimg" />
          </div>
          <div className="parent">
          <img src={backdrop3} alt="logo" className="laneimg" />
          <img src={bgLogo3} alt="logo" className="logoimg" />
          </div>
          <div className="parent">
          <img src={backdrop4} alt="logo" className="laneimg" />
          <img src={bgLogo4} alt="logo" className="logoimg" />
          </div>
          <div className="parent">
          <img src={backdrop5} alt="logo" className="laneimg" />
          <img src={bgLogo5} alt="logo" className="logoimg" />
          </div>
          <div className="parent">
          <img src={backdrop6} alt="logo" className="laneimg" />
          <img src={bgLogo6} alt="logo" className="logoimg" />
          </div>
          <div className="parent">
          <img src={backdrop7} alt="logo" className="laneimg" />
          <img src={bgLogo7} alt="logo" className="logoimg" />
          </div>
          <div className="parent">
          <img src={backdrop8} alt="logo" className="laneimg" />
          <img src={bgLogo8} alt="logo" className="logoimg" />
          </div>
          <div className="parent">
          <img src={backdrop9} alt="logo" className="laneimg" />
          <img src={bgLogo9} alt="logo" className="logoimg" />
          </div>
          <div className="parent">
          <img src={backdrop10} alt="logo" className="laneimg" />
          <img src={bgLogo10} alt="logo" className="logoimg" />
          </div>
        </ul>
      </div>
    </>
  );
};
export default Lane;