import React from 'react'
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

              <Col><a href='https://mail.google.com'><img src={gmail} alt="gmailButton" className='logo' id='mian-logo' /></a></Col>
              
              <Col><a href='https://www.fiverr.com/ishanm376?public_mode=true'><img src={fiverr} alt="fiverrButton" className='logo' id='side-logo'/></a></Col>
            </Row>
        
          </Container>      
 </center>

      {/* <center>
        <a href='https://github.com/IshanThilakarathne'><img src="images\github-mark.svg" alt="gitButton" className='logo' /></a> 
        
        <a href='https://www.linkedin.com/in/ishan-thilakarathne-2864a2264/'><img src="images\LinkedIn_icon_circle.svg" alt="gitButton"  className='logomain' /></a>

        <a href='https://stackoverflow.com/users/21479472/ishan-thilakarathne'><img src="images\3069740_circle_forum_round icon_stackoverflow_icon.svg" alt="gitButton" className='logo'/></a> 
      </center>

       <center>
        <a href='https://www.instagram.com/ishan_thilakarathne/'><img src="images\1164349_circle_instagram_logo_media_network_icon.svg" alt="gitButton" className='logo' id='side-logo' /></a> 
        
        <a href=''><img src="images\1220340_gmail_google_mail_icon.svg" alt="gitButton"  className='logomain' id='mian-logo' /></a>

        <a href='https://www.fiverr.com/ishanm376?public_mode=true'><img src="images\fiverr-svgrepo-com.svg" alt="gitButton" className='logo' id='side-logo'/></a> 
        </center> */}
   
      </div>
      </section>
  )
}