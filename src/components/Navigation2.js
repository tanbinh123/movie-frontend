import '../styles/Navigation2.css';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar'
// import NavDropdown from 'react-bootstrap/NavDropdown'
import Logo from '../images/netflix.png';
import React, {useState, useEffect} from "react";
// import { BsSearch } from 'react-icons/bs';

function Search() {

  const [status, setStatus] = useState("top")

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

      <Navbar className="navigation2"
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
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    );
  }
export default Search;