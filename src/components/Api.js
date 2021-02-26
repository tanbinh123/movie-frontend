import React, { useState, useEffect } from 'react'
import App from '../pages/App';

require('dotenv').config()

async function hideApi() {
    const api = {
        "key": process.env.REACT_APP_API,
    }
    return api.key;
}
hideApi();

export default function Api() {
    const [bgimage, setBgimage] = useState("");
    const [overview, setOverview] = useState("");
    const [title, setTitle] = useState("")
    const [youtube, setYoutube] = useState("");
    const [logo, setLogo] = useState("");
    const [arrayAction, setArrayAction] = useState([]);
    const [arrayComedy, setArrayComedy] = useState([]);
    const [arrayThriller, setArrayThriller] = useState([]);
    const [arrayFamily, setArrayFamily] = useState([]);
    const [arrayCrime, setArrayCrime] = useState([]);
    const [arrayAdventure, setArrayAdventure] = useState([]);
    const [arrayFantasy, setArrayFantasy] = useState([]);
    const backdrop = `${process.env.REACT_BG}${bgimage}`
    const youtubebackground = `${process.env.REACT_YTBG}${youtube}`

    useEffect(() => {
        Promise.all([
            fetch(process.env.REACT_MAIN_OVERVIEW),
            fetch(process.env.REACT_MAIN_VIDEO),
            fetch(process.env.REACT_MAIN_BG),
            fetch(process.env.REACT_GENRE_1428),
            fetch(process.env.REACT_GENRE_35),
            fetch(process.env.REACT_GENRE_53),
            fetch(process.env.REACT_GENRE_10751),
            fetch(process.env.REACT_GENRE_80),
            fetch(process.env.REACT_GENRE_12),
            fetch(process.env.REACT_GENRE_14)
            

        ]).then(function (responses) {
            return Promise.all(responses.map(function (response) {
                return response.json();
            }));
        }).then(function (data) {
            setBgimage(data[0].backdrop_path)
            setOverview(data[0].overview);
            setTitle(data[0].title)
            setYoutube(data[1].results[1].key);
            setLogo(data[2].hdmovielogo[0].url);
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
                backdrop={backdrop}
                overview={overview}
                title={title}
                youtube={youtube}
                youtubebackground={youtubebackground}
                logo={logo} />
        </div>
    );
}
