import React, { useState } from 'react'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import github from "../images/github-mark-white.svg";
import linkedin from "../images/LinkedIn_icon_circle.svg";
import stack from "../images/stackoverflow_icon.svg";
import instagram from "../images/instagram_logo_media_network_icon.svg";
import gmail from "../images/mail_icon.svg";
import fiverr from "../images/fiverr_round icon_icon.svg";

export default function Contact() {

  const [isText, setText] = useState(false);

  const handleClick = event => {
    setText(true);
  }
 

  return (
    <section id='contact'>
      <br/>
      <div className='contact'>
        <h1 className='about'>Contact</h1>
        <br /> <br />
        
   <center>
          <Container>
            <Row>
              <Col><a href='https://github.com/IshanThilakarathne'><img src={github} alt="gitButton" className='logo' /></a></Col>
              

              <Col><a href='https://www.linkedin.com/in/ishan-thilakarathne-2864a2264/'><img src={linkedin} alt="linkedInButton" className='logo' /></a></Col>
              
              <Col><a href='https://stackoverflow.com/users/21479472/ishan-thilakarathne'><img src={stack} alt="stackButton" className='logo'/></a></Col>
            </Row>
            </Container>
        </center>
        <br /> <br />
        <center>
            <Container>
            <Row>
              <Col><a href='https://www.instagram.com/ishan_thilakarathne/'><img src={instagram} alt="instaButton" className='logo' id='side-logo' /></a></Col>

              <Col><a onClick={handleClick}><img src={gmail} alt="gmailButton" className='logo' id='mian-logo'/></a></Col>
              
              <Col><a href='https://www.fiverr.com/ishanm376?public_mode=true'><img src={fiverr} alt="fiverrButton" className='logo' id='side-logo'/></a></Col>
            </Row>
            <Row>
              <Col>
                <center>
                  <p style={{
                    display: isText ? 'block' : 'none',
                  color: 'white',}}>ishanmthilakarathne@gmail.com</p>
                </center>
              </Col>
            </Row>
        
          </Container>      
 </center>
      </div>
      </section>
  )
}