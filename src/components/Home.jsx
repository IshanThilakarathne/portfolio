import React from 'react'
import Button from 'react-bootstrap/Button';
import { Col, Row } from 'react-bootstrap';
import Image from 'react-bootstrap/Image';
import Container from 'react-bootstrap/Container';
import { HashLink as Link } from 'react-router-hash-link';
import { faLinkedin, faSquareFacebook, faSquareInstagram, faSquareTwitter } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAnglesDown } from '@fortawesome/free-solid-svg-icons';
import meImg from "../images/me.svg";

function Home() {

const link = "https://drive.google.com/file/d/1_ImFefg0OSnPUrMd9tZfmqVCBc1DOLSU/view?usp=sharing"

var fName = "Ishan";
  var lName = "Thilakarathne";
  var myName = fName + " " + lName;

  var txt = "I'm";

  return (
    <section id='home'>
      <div className='home'>
        <Container fluid className='con' >  
          <Row className='r1'>
            <Col lg={6} md={12} className='col2'> 
              <Image fluid="true" id='optionalavatar' className='avatar' src={meImg} />
            </Col>
            
            <Col className='col1'>
              <h1 className='hello' id="hello">Hello World!</h1>
              <br />
              <h1 className='name' id='name'>
              <p className='itxt' id='itxt'>{'< > ' + txt + ' </>' }</p>
              {'< > ' + myName + ' </>' }
              </h1> 
              <br />
              <br />
              <a href={link}><Button className='btn-contact'>Download CV</Button> </a>
              <br /><br />
              <Link to='#contact'>
                <Button className='btn-contact' >Contact ME
                </Button>
              </Link>
              <br /> <br />
            </Col>
          </Row>
          
          <div id="down" className='down-arrow'>
            <Link to='#about'><FontAwesomeIcon icon={faAnglesDown} />
            </Link>
          </div> 
      </Container> 
    </div>
  </section>
  )
}

export default Home