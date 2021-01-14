import '../App.css';
import Nav from 'react-bootstrap/Nav';
import Logo from '../images/netflix.png';

function App() {
    return (
        <Nav
            className="navigation"
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
                <Nav.Link href="/film">Film</Nav.Link>
            </Nav.Item>
        </Nav>
    );
}
export default App;
