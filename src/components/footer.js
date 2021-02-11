import React from 'react';
import '../styles/Footer.css'
import { AiOutlineYoutube } from 'react-icons/ai';
import { AiOutlineFacebook } from 'react-icons/ai';
import { AiOutlineInstagram } from 'react-icons/ai';
import { AiFillTwitterSquare } from 'react-icons/ai';
import { Link } from 'react-router-dom';

function Footer() {
  return (
    <div className="footer-container"> 
      <div className="footer-iconbox">
    <a href="https://www.facebook.com/NetflixNederland">
      <AiOutlineFacebook />
    </a>
    <a href="https://www.instagram.com/netflixnl/?hl=nl">
      <AiOutlineInstagram />
    </a>
    <a href="https://twitter.com/netflix">
      <AiFillTwitterSquare />
    </a>
    <a href="https://www.youtube.com/channel/UCWOA1ZGywLbqmigxE4Qlvuw">
      <AiOutlineYoutube />
    </a>
  </div>
      <div className="footer-links">
          <div className="link-container">
          <Link to="/AudioOndertiteling">
            <li className="underline">Audio and Subtitles</li>
          </Link>
          <Link to="/Mediacenter">
            <li className="underline">Media Centre</li>
          </Link>
          <Link to="/Privacy">
            <li className="underline">Privacy</li>
          </Link>
          <Link to="/Contact">
            <li className="underline">Contact Us</li>
          </Link>
          </div>
          <div className="link-container">
          <Link to="/Audiodescriptie">
            <li className="underline">Audiodecription</li>
          </Link>
          <Link to="/Beleggersrelaties">
            <li className="underline">Investor Relations</li>
          </Link>
          <Link to="/WettelijkeBepalingen">
            <li className="underline">Legal Notices</li>
          </Link>
          </div>
          <div className="link-container">
          <Link to="/Helpcenter">
            <li className="underline">Help Centre</li>
          </Link>
          <Link to="/Vacatures">
            <li className="underline">Jobs</li>
          </Link>
          <Link to="/Cookievoorkeuren">
            <li>Cookie Preferences</li>
          </Link>
          </div>
          <div className="link-container">
          <Link to="/Cadeaubonnen">
            <li className="underline">Redeem gift cards</li>
          </Link>
          <Link to="/Bedrijfsgegevens">
            <li className="underline">Corporate Information</li>
          </Link>
          <Link to="/Gebruiksvoorwaarden">
            <li className="underline">Terms of Use</li>
          </Link>
          </div>
       </div>
    </div>
  );
}

export default Footer;
