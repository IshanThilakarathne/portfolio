import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Helmet from 'react-helmet';
import Home from './components/Home';
import { HashLink as Link } from 'react-router-hash-link';
import { BrowserRouter } from 'react-router-dom';
import NavBar from './components/NavBar';
import About from './components/About';
import Skills from './components/Skills';
import Interest from './components/Interest';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Faqs from './components/Faqs';
import Footer from './components/Footer';

function App() {
  return (
    <BrowserRouter>
    
    <div className="main" >
        <Helmet bodyAttributes={{ style: 'background-color : #03001C' }} />

         <NavBar />
        <Home />
        <About />
        <Skills />
        <Interest />
        <Projects />
        <Contact />
        <Faqs />
        <Footer/>
       
      </div>
      </BrowserRouter>
  );
}

export default App;
