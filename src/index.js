import React from 'react';
import ReactDOM from 'react-dom';
import './styles/Index.css';
import Api from './components/Api';
import 'bootstrap/dist/css/bootstrap.min.css';
import Container from 'react-bootstrap/Container'
import Discover from './pages/Discover';
import Film from './pages/Film';
import Audiodescriptie from './pages/Audiodescriptie';
import AudioOndertiteling from './pages/AudioOndertiteling';
import Bedrijfsgegevens from './pages/Bedrijfsgegevens';
import Beleggersrelaties from './pages/Beleggersrelaties';
import Cadeaubonnen from './pages/Cadeaubonnen';
import Contact from './pages/Contact';
import Cookievoorkeuren from './pages/Cookievoorkeuren';
import Gebruiksvoorwaarden from './pages/Gebruiksvoorwaarden';
import Helpcenter from './pages/Helpcenter';
import Mediacenter from './pages/Mediacenter';
import Privacy from './pages/Privacy';
import Vacatures from './pages/Vacatures';
import WettelijkeBepalingen from './pages/WettelijkeBepalingen';
import { BrowserRouter as Router, Switch, Route} from 'react-router-dom';


ReactDOM.render(
  <React.StrictMode>
    <Container fluid>
      <Router>
      <Switch>
      <Route path="/" exact component={Api} />
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
      </Router>
    </Container>
  </React.StrictMode>,
  document.getElementById('root')
);
