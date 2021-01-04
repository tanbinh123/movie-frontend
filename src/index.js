import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import Footer from './components/footer'
import Navigation from './components/navigation';
import 'bootstrap/dist/css/bootstrap.min.css';
import Container from 'react-bootstrap/Container'

ReactDOM.render(
  <React.StrictMode>
    <Container fluid>
      <Navigation />
      <App />
      <Footer />
    </Container>
  </React.StrictMode>,
  document.getElementById('root')
);
