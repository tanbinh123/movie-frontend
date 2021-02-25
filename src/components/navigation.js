import '../styles/Navigation.css';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar'
// import NavDropdown from 'react-bootstrap/NavDropdown'
import Logo from '../images/netflix.png';
import React, {useState, useEffect} from "react";
import { BsSearch } from 'react-icons/bs';

function Search() {

  const [query, setQuery] = useState("");
  const [actorName, setActorName] = useState("")
  const [actorName1, setActorName1] = useState("")
  const [actorName2, setActorName2] = useState("")
  const [actorName3, setActorName3] = useState("")
  const [actorName4, setActorName4] = useState("")
  const [actorId, setActorId] = useState("")
  const [searchResult, setSearchResult] = useState([])
  const [status, setStatus] = useState("top")

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
                  .then(response => response.json())
                  .then(result => {
                      setSearchResult(result)
                  })
                  .catch(err => console.log(err));
          }
          renderPictures();
      }
      
  }
     
  useEffect(() => {
  document.addEventListener("scroll", (e) => {
          const scrolled = document.scrollingElement.scrollTop;
          if (scrolled > 20) {
            if (status !== "transparent") {
              setStatus("transparent");
            }
          } 
          else {
            if (status !== "top") {
              setStatus("top");
            }
        }
      })
    })

    return (

      <Navbar className="navigation"
        style={{
          backgroundColor:
           status === "top" ? "transparent" : "black"
        }} expand="lg ">
        <Navbar.Brand href="#home"><img src={Logo} alt='img' className='logo' /></Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" className="mr-auto" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav>
            <Nav.Link href="/" className="film-nav"><span><p>Home</p></span></Nav.Link>
            <Nav.Link href="/discover" className="film-nav"><span><p>Discover</p></span></Nav.Link>
            <Nav.Link href="/film" className="film-nav"><span><p>Film</p></span></Nav.Link>
            <form>
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
            <button type="submit" className="search-button"><BsSearch /></button>
            </form>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    );
  }
export default Search;
