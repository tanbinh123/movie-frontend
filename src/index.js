import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
// import Lane1 from './components/lane1'
// import Lane2 from './components/lane2'
// import Lane3 from './components/lane3'
// import Lane4 from './components/lane4'
// import Lane5 from './components/lane5'
import Footer from './components/footer'
import Navigation from './components/navigation';
import 'bootstrap/dist/css/bootstrap.min.css';
import Container from 'react-bootstrap/Container'
import Discover from './Pages/discover';
import Film from './Pages/film';
import Audiodescriptie from './Pages/Audiodescriptie';
import AudioOndertiteling from './Pages/AudioOndertiteling';
import Bedrijfsgegevens from './Pages/Bedrijfsgegevens';
import Beleggersrelaties from './Pages/Beleggersrelaties';
import Cadeaubonnen from './Pages/Cadeaubonnen';
import Contact from './Pages/Contact';
import Cookievoorkeuren from './Pages/Cookievoorkeuren';
import Gebruiksvoorwaarden from './Pages/Gebruiksvoorwaarden';
import Helpcenter from './Pages/Helpcenter';
import Mediacenter from './Pages/Mediacenter';
import Privacy from './Pages/Privacy';
import Vacatures from './Pages/Vacatures';
import WettelijkeBepalingen from './Pages/WettelijkeBepalingen';
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
      <Route path="/Audiodescriptie" component={Audiodescriptie}/>
      <Route path="/AudioOndertiteling" component={AudioOndertiteling}/>
      <Route path="/Bedrijfsgegevens" component={Bedrijfsgegevens}/>
      <Route path="/Beleggersrelaties" component={Beleggersrelaties}/>
      <Route path="/Cadeaubonnen" component={Cadeaubonnen}/>
      <Route path="/Contact" component={Contact}/>
      <Route path="/Cookievoorkeuren" component={Cookievoorkeuren}/>
      <Route path="/Gebruiksvoorwaarden" component={Gebruiksvoorwaarden}/>
      <Route path="/Helpcenter" component={Helpcenter}/>
      <Route path="/Mediacenter" component={Mediacenter}/>
      <Route path="/Privacy" component={Privacy}/>
      <Route path="/Vacatures" component={Vacatures}/>
      <Route path="/WettelijkeBepalingen" component={WettelijkeBepalingen}/>
      </Switch>
      {/* <Lane1 />
      <Lane2 />
      <Lane3 /> */}
      {/* <Lane4 /> */}
      {/* <Lane5 /> */}
      <Footer />
      </Router>
    </Container>
  </React.StrictMode>,
  document.getElementById('root')
);
