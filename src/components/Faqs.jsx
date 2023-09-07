import { faAnglesUp } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { HashLink as Link } from 'react-router-hash-link';
import Accordion from 'react-bootstrap/Accordion';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

function Faqs() {
  return (
    <section id='faqs'>
      <br/>
      <div className='faqs'>
        <Container fluid="md">
          <Row>
            <Col></Col>
            <Col xs={8}>
              <h1 className='main'>FAQs</h1>
    <Accordion defaultActiveKey="0">
      <Accordion.Item eventKey="0">
        <Accordion.Header className='header-faqs' >How I learn those skills?</Accordion.Header>
        <Accordion.Body className='body-faqs'>
          I learn basic programming and programming concept in university. I successfully complete the flutter fast course conduct by Franklin Training and other technologies and frameworks I learn my self with help of internet resources.
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="1">
        <Accordion.Header className='header-faqs'>Any other skills?</Accordion.Header>
        <Accordion.Body className='body-faqs'>
          I have some adobe photoshop, canva designs and video editing knowledge. If you need my service you can hire me on fiverr or send me an e-mail.
                  </Accordion.Body>
                  
                </Accordion.Item>
                 <Accordion.Item eventKey="2">
        <Accordion.Header className='header-faqs'>Educational background?</Accordion.Header>
        <Accordion.Body className='body-faqs'>
          <ul>
                      <li>Currently following BIT degree at University Of Moratuwa</li>
                      <li>Successfully complete G.C.E A/L in Technology stream</li>
                      <li>Successfully complete G.C.E O/L</li>
          </ul>
          
        </Accordion.Body>
      </Accordion.Item>
              </Accordion>
              
            </Col>
            <Col></Col>
          </Row>
        </Container>
        <br /> <br />
        <Link to='#home'>
          <FontAwesomeIcon icon={faAnglesUp} className='angle'/>
        </Link>
        
      </div>
      </section>
    );
            
}

export default Faqs;