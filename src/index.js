import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import Footer from './components/footer'
import Navigation from './components/navigation';
import 'bootstrap/dist/css/bootstrap.min.css';
import Container from 'react-bootstrap/Container'
import Discover from './Pages/discover';
import Film from './Pages/film';
import { BrowserRouter as Router, Switch, Route} from 'react-router-dom';

ReactDOM.render(
  <React.StrictMode>
    <Container fluid>
      <Router>
      <Navigation />
      <Switch>
      <Route path="/" exact component={App}/>
      <Route path="/discover" component={Discover}/>
      <Route path="/film" component={Film}/>
      </Switch>
      <Footer />
      </Router>
    </Container>
  </React.StrictMode>,
  document.getElementById('root')
);
