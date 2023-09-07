import React from 'react'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

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
                        <Col ><img src="html-1.svg" className="logo" alt="html" id='logo' /> </Col>
                        <Col  ><img src="javascript-1.svg" className="logomain" alt="javascript" id="logomain"/></Col>
                        <Col  ><img src="css-3.svg" className="logo" alt="css"  id='logo' /></Col>
                        </Row>
                        <br /> <br />
                    <Row>
                        <Col><img src="flutterio-icon.svg" className="logo" alt="flutter" /></Col>
                        <Col><img src="react-2.svg" className="logomain" alt="react" /></Col>
                        <Col><img src="laravel-2.svg" className="logo" alt="laravel" /></Col>
                        </Row>
                        <br /> <br />
                    <Row>
                        <Col> <img src="tailwind-css-2.svg" className="logo" alt="tailwind" /></Col>
                        <Col><img src="bootstrap-5-1.svg" className="logomain" alt="bootstrap" /></Col>
                        {/* <Col><img src="canva-1.svg" className="" alt="canva" /></Col> */}
                      </Row>
                    </Container>
                </center>
                
          </div>
      </section>
      
  )
}

export default Skills