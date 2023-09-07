import logo from './logo.svg';
import './App.css';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import 'bootstrap/dist/css/bootstrap.min.css';
import Helmet from 'react-helmet';
import { Row, Col } from 'react-bootstrap';
import { faHouse, faAddressCard, faCode, faChalkboardUser,faListCheck, faCircleQuestion } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Home from './components/Home';
import { HashLink as Link } from 'react-router-hash-link';
import { BrowserRouter } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
    
    <div className="main" >
      <header>
      <Helmet bodyAttributes={{style: 'background-color : #03001C'}}/>

         <Navbar fixed='bottom' className="nav-bar">
       
        <Container >
           
              <FontAwesomeIcon icon={faHouse} className='nav-icon' /> |
              <FontAwesomeIcon icon={faAddressCard} className='nav-icon' /> |
              <FontAwesomeIcon icon={faCode} className='nav-icon'/> |
              <FontAwesomeIcon icon={faChalkboardUser} className='nav-icon' /> |
              <FontAwesomeIcon icon={faListCheck} className='nav-icon' /> |
                <FontAwesomeIcon icon={faCircleQuestion} className='nav-icon' />    
          </Container>
      
          </Navbar>
       
        </header>

        <Home/>
      
      </div>
      </BrowserRouter>
  );
}

export default App;
