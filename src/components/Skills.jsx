import React from 'react'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import html from "../images/html-1.svg";
import javascript from "../images/javascript-1.svg";
import css from "../images/css-3.svg";
import flutter from "../images/flutterio-icon.svg";
import reactLogo from "../images/react-2.svg";
import laraval from "../images/laravel-2.svg";
import tailwind from "../images/tailwind-css-2.svg";
import bootstrap from "../images/bootstrap-5-1.svg";
import node from "../images/node-js.svg";

function Skills() {
  return (
    <section id='skills'>
           
      <div className='skill'>
          <h1 className='skills'>Skills</h1>
         
                <p className='p'> I have good understanding about HTML, CSS, JavaScript, react and flutter. Also I have some knowledge about below technologies.</p>
<br />
            <center>
                <Container>
                    <Row>
                        <Col ><img src={html} className="skill-row-1" alt="html" id='logo' /> </Col>
                        <Col  ><img src={javascript} className="skill-row-1" alt="javascript" id="logomain"/></Col>
                        <Col  ><img src={css} className="skill-row-1" alt="css"  id='logo' /></Col>
                        </Row>
                        <br /> <br />
                    <Row>
                        <Col><img src={flutter} className="skill-row-2" alt="flutter" /></Col>
                        <Col><img src={reactLogo} className="skill-row-2" alt="react" /></Col>
                        <Col><img src={node} className="skill-row-2" alt="nodeJS" /></Col>
                        </Row>
                        <br /> <br />
                    <Row>
                        <Col> <img src={tailwind} className="skill-row-3" alt="tailwind" /></Col>
                        <Col> <img src={laraval} className="skill-row-3" alt="laravel" /></Col>
                        <Col><img src={bootstrap} className="skill-row-3" alt="bootstrap" /></Col>
                        {/* <Col><img src="canva-1.svg" className="" alt="canva" /></Col> */}
                      </Row>
                    </Container>
                </center>       
          </div>
      </section>
      
  )
}

export default Skills