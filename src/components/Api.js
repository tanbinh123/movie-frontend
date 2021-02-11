import React, { useState, useEffect } from 'react'
import App from '../pages/App';

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
    const [array80, setArray80] = useState([]);
    const [array90, setArray90] = useState([]);
    const [array00, setArray00] = useState([]);
    const [arrayJohnnydepp, setArrayJohnnydepp] = useState([]);
    const [arrayDisney, setArrayDisney] = useState([]);
    const [arrayAction, setArrayAction] = useState([]);
    const [arrayComedy, setArrayComedy] = useState([]);
    const [arrayThriller, setArrayThriller] = useState([]);
    const [arrayFamily, setArrayFamily] = useState([]);
    const [arrayCrime, setArrayCrime] = useState([]);
    const [arrayAdventure, setArrayAdventure] = useState([]);
    const [arrayFantasy, setArrayFantasy] = useState([]);
    const backdrop = `https://image.tmdb.org/t/p/w1280/${bgimage}`
    const youtubebackground = `https://www.youtube.com/watch?v=${youtube}`

    useEffect(() => {
        Promise.all([
            fetch('https://api.themoviedb.org/3/movie/507076?api_key=33ea3e5328d23c13d33ed05add4783b7'),
            fetch('https://api.themoviedb.org/3/movie/507076/videos?api_key=33ea3e5328d23c13d33ed05add4783b7&language=en-US'),
            fetch('http://webservice.fanart.tv/v3/movies/507076?api_key=d74996a4a3d05c07a61abb08608a5974&client_key=52c813aa7b8c8b3bb87f4797532a2f8c'),
            fetch('http://192.168.2.9:8080/movies/discover/80s'),
            fetch('http://192.168.2.9:8080/movies/discover/90s'),
            fetch('http://192.168.2.9:8080/movies/discover/00s'),
            fetch('http://192.168.2.9:8080/movies/discover/johnnydepp'),
            fetch('http://192.168.2.9:8080/movies/discover/disney'),
            fetch('http://192.168.2.9:8080/movies/genre/28'),
            fetch('http://192.168.2.9:8080/movies/genre/35'),
            fetch('http://192.168.2.9:8080/movies/genre/53'),
            fetch('http://192.168.2.9:8080/movies/genre/10751'),
            fetch('http://192.168.2.9:8080/movies/genre/80'),
            fetch('http://192.168.2.9:8080/movies/genre/12'),
            fetch('http://192.168.2.9:8080/movies/genre/14')

        ]).then(function (responses) {
            return Promise.all(responses.map(function (response) {
                return response.json();
            }));
        }).then(function (data) {
            setBgimage(data[0].backdrop_path)
            setOverview(data[0].overview);
            setTitle(data[0].title)
            setYoutube(data[1].results[0].key);
            setLogo(data[2].hdmovielogo[0].url);
            setArray80(data[3])
            setArray90(data[4])
            setArray00(data[5])
            setArrayJohnnydepp(data[6])
            setArrayDisney(data[7])
            setArrayAction(data[8].results)
            setArrayComedy(data[9].results)
            setArrayThriller(data[10].results)
            setArrayFamily(data[11].results)
            setArrayCrime(data[12].results)
            setArrayAdventure(data[13].results)
            setArrayFantasy(data[14].results)
            console.log(data)
        }).catch(function (error) {
            console.log(error);
        })
    }, []);

    return (
        <div className="App">
            <App
                arrayAction={arrayAction}
                arrayComedy={arrayComedy}
                arrayThriller={arrayThriller}
                arrayFamily={arrayFamily}
                arrayCrime={arrayCrime}
                arrayAdventure={arrayAdventure}
                arrayFantasy={arrayFantasy}
                arrayDisney={arrayDisney}
                arrayJohnnydepp={arrayJohnnydepp}
                array80={array80}
                array90={array90}
                array00={array00}
                backdrop={backdrop}
                overview={overview}
                title={title}
                youtube={youtube}
                youtubebackground={youtubebackground}
                logo={logo} />
        </div>
    );
}
export default Api;