import React, { useState } from 'react';
import '../styles/Lane2.css';
import Navigation2 from '../components/Navigation2';
import LaneSearch from '../components/LaneSearch.js'


function Search() {

    const [query, setQuery] = useState("");
    const [actorName, setActorName] = useState("")
    const [actorName1, setActorName1] = useState("")
    const [actorName2, setActorName2] = useState("")
    const [actorName3, setActorName3] = useState("")
    const [actorName4, setActorName4] = useState("")
    const [actorId, setActorId] = useState("")
    const [searchResult, setSearchResult] = useState([])

    function search(evt) {
        function renderWeather() {
            fetch(`http://localhost:8081/search/persons?search=${query}`)
                .then(response => response.json())
                .then(result => {
                    console.log(result.results[0].name)
                    console.log(result.results[0].id)
                    setActorId(result.results[0].id);
                    setActorName(result.results[0].name)
                    setActorName1(result.results[1].name)
                    setActorName2(result.results[2].name)
                    setActorName3(result.results[3].name)
                    setActorName4(result.results[4].name)
                })
                .catch(err => {
                    console.log(err.message);
                });

        }
        renderWeather();

        if (evt.key === "Enter") {
            function renderPictures() {
                fetch(`http://localhost:8081/search/persons/${actorId}`)
                    // fetch(`http://localhost:8081/search/persons/${actorId}`)
                    .then(response => response.json())
                    .then(result => {
                        setSearchResult(result)
                    })
                    .catch(err => console.log(err));
            }
            renderPictures();
        }
    }
    return (
<div> 
      <Navigation2 />
        <div className="search-box2">
            <input
                type="text"
                className="search-bar"
                placeholder="Search..."
                onChange={e => setQuery(e.target.value)}
                value={query}
                onKeyPress={search}
                list="browsers"
            />
            <datalist id="browsers">
                <option value={actorName} />
                <option value={actorName1} />
                <option value={actorName2} />
                <option value={actorName3} />
                <option value={actorName4} />
            </datalist>
            

        </div>
        <LaneSearch searchResult={searchResult} actorName={actorName} />
        </div> 
    );
}
export default Search;