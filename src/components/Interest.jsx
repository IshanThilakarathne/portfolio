import Card from 'react-bootstrap/Card';
import CardGroup from 'react-bootstrap/CardGroup';
import Container from 'react-bootstrap/Container';

import React from 'react'

function Interest() {
  return (
    <div><section id='interest'>
      <br/> <br/>
    <div className='serbg'>
      <br />
      <h1 className='ser'>Interest</h1>
      <br />
     
      <center>
       <Container>
        <CardGroup xs={6} sm={6} md={6} lg={12}>
       <Card style={{ width: '18rem' }} className='crd'>
      <Card.Img className='crd-img' variant="top" src="web-dev.jpg" />
      <Card.Title>Web App Development</Card.Title>
      <Card.Body>
        <Card.Text className='card-text'>
          I'm interesting to develop web application. Also I did mini projects. In my 2nd year of university i did the web programming group project and we did that project using <b>Laravel, bootsrap and MySQL.</b>
        </Card.Text>
       
      </Card.Body>
    </Card> 
     &nbsp; &nbsp;
       <Card style={{ width: '18rem' }} className='crd'>
      <Card.Img className='crd-img' variant="top" src="mobile app dev main.jpg" />
      <Card.Title>Mobile App Development</Card.Title>
      <Card.Body>
        <Card.Text className='card-text'>
          I'm interesting to develop android application using <b>Flutter</b> and I did the flutter course conducted by Franklin Training. Also I did mini projects to learn <b>Flutter</b>. <b>Flutter</b> is cross platform framework. With <b>Flutter</b> we can create both Android and IOS application.
        </Card.Text>

      </Card.Body>
    </Card> 
          </CardGroup>
          </Container>
        </center> 
      <br /> <br /> <br /> <br /> <br /> 
      </div>
      </section></div>
  )
}

export default Interest