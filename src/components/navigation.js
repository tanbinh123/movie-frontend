import '../App.css';
import Nav from 'react-bootstrap/Nav';
import Logo from '../images/netflix.png';
import React from "react";

export default class App extends React.Component {
    constructor(props) {
      super(props);
  
      this.listener = null;
      this.state = {
        status: "top"
      };
    }
  
    componentDidMount() {
      this.listener = document.addEventListener("scroll", (e) => {
        var scrolled = document.scrollingElement.scrollTop;
        if (scrolled >= 10) {
          if (this.state.status !== "transparent") {
            this.setState({ status: "transparent" });
          }
        } else {
          if (this.state.status !== "top") {
            this.setState({ status: "top" });
          }
        }
      });
    }
    componentDidUpdate() {
      document.removeEventListener("scroll", this.listener);
    }

    render() {
    return (
        
        <Nav
            className="navigation"
        style={{
            transition: "all 0.4s ease",
          backgroundColor:
            this.state.status === "top" ? "transparent" : "black",
          position: "fixed",
          
        }}
      >
      
            <Nav.Item>
            <img src={Logo} alt='img' className='logo' />
            </Nav.Item>
            <Nav.Item>
                <Nav.Link href="/">Home</Nav.Link>
            </Nav.Item>
            <Nav.Item>
                <Nav.Link href="/discover">Discover</Nav.Link>
            </Nav.Item>
            <Nav.Item>
                <Nav.Link href="/film" className="film-nav">Film</Nav.Link>
            </Nav.Item>
        </Nav>
    );
}
}
