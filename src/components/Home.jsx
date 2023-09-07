import React from 'react'
import Button from 'react-bootstrap/Button';
import { Col, Row } from 'react-bootstrap';
import Image from 'react-bootstrap/Image';
import Container from 'react-bootstrap/Container';
import { HashLink as Link } from 'react-router-hash-link';
import { faLinkedin, faSquareFacebook, faSquareInstagram, faSquareTwitter } from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'


function Home() {

var fName = "Ishan";
  var lName = "Thilakarathne";
  var myName = fName + " " + lName;

  var txt = "I'm";

  var btnName = "Contact ME";
  return (
    <section id='home'>
      <br/> <br/>
    <div>
        <Container fluid className='con' >  
  
          <Row className='r1'>
            
            <Col lg={6} md={12} className='col2'>
             
              <Image fluid="true" id='optionalavatar' className='avatar' src="me.svg" />
            </Col>
            
            <Col className='col1'>
              <h1 className='hello'>Hello World,</h1>
              <br />
            <h1 className='name' id='name'>
            <p className='itxt' id='itxt'>{'< > ' + txt + ' </>' }</p>
                {'< > ' + myName + ' </>' }
              </h1> 
              <br />
              <br />
   
              <a href='https://drive.google.com/file/d/1-0HH3UpMXFEJTdjrO0jlIbAbXPh5i7q3/view?usp=sharing'><Button className='btn-contact'>Download CV</Button> </a>
              
              <br /><br />

              <Button className='btn-contact' >Contact ME
              </Button>

              <br /> <br />
             
              {/* <FontAwesomeIcon icon={faSquareFacebook} />
              <br />
              
              <FontAwesomeIcon icon={faSquareInstagram} />
              <br />
              <FontAwesomeIcon icon={faSquareTwitter} />
              <br />
          
              <FontAwesomeIcon icon={faLinkedin} />
              <br /> */}
          
              
          {/* <Image fluid="true" id='optionalavatar' className='avatar' src="pic.png" roundedCircle /> */}
        </Col>
          </Row>  
        
        </Container> 
  
      </div>
      </section>
  )
}

export default Home