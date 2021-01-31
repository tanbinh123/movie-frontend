import React, { useState } from 'react'
import App from './App';

require('dotenv').config()

async function HideApi() {
    const api = {
        "key": process.env.REACT_APP_API,
    }
    return api.key;
}
HideApi();

function Api() {
    const [bgimage, setBgimage] = useState("");
    const [overview, setOverview] = useState("");
    const [title, setTitle] = useState("")
    const [youtube, setYoutube] = useState("");
    const [logo, setLogo] = useState("");
    const backdrop = `https://image.tmdb.org/t/p/w1280/${bgimage}`
    const youtubebackground = `https://www.youtube.com/watch?v=${youtube}`

    async function fetchMoviesJSON() {
        const response = await fetch('https://api.themoviedb.org/3/movie/475557?api_key=33ea3e5328d23c13d33ed05add4783b7');
        const movies =  response.json();
        return movies;
    }
    fetchMoviesJSON().then(response => {
        setBgimage(response.backdrop_path)
        setOverview(response.overview);
        setTitle(response.title)
    });
    async function fetchVideoJSON() {
        const response = await fetch('https://api.themoviedb.org/3/movie/475557/videos?api_key=33ea3e5328d23c13d33ed05add4783b7&language=en-US');
        const movies = await response.json();
        return movies;
    }
    fetchVideoJSON().then(movie => {
        setYoutube(movie.results[1].key);
    });
    async function fetchLogoJSON() {
        const response = await fetch('http://webservice.fanart.tv/v3/movies/475557?api_key=d74996a4a3d05c07a61abb08608a5974&client_key=52c813aa7b8c8b3bb87f4797532a2f8c');
        const movies = await response.json();
        return movies;
    }
    fetchLogoJSON().then(result => {
        setLogo(result.hdmovielogo[0].url);
    });
    return (
        <div className="App">
            <App backdrop={backdrop} overview={overview} title={title} youtube={youtube} youtubebackground={youtubebackground} logo={logo} />
        </div>
    );
}
export default Api;