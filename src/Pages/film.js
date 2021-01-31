import '../styles/App.css';
import Navigation from '../components/Navigation';
import LaneComedy from '../components/LaneComedy';
import LaneAction from '../components/LaneAction';
import LaneThriller from '../components/LaneThriller';
import LaneFamily from '../components/LaneFamily';
import LaneFantasy from '../components/LaneFantasy';
import LaneCrime from '../components/LaneCrime';
import LaneAdventure from '../components/LaneAdventure';
import Footer from '../components/Footer';

function Film() {
  return (
    <div>
      <Navigation />
      <p className="Film">film</p>
      <LaneComedy />
      <LaneAction />
      <LaneThriller />
      <LaneFamily />
      <LaneFantasy />
      <LaneCrime />
      <LaneAdventure />
      <Footer />
    </div>
  );
}
export default Film;
