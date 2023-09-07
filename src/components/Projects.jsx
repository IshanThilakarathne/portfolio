import React from 'react'
import Card from 'react-bootstrap/Card';
import { CardGroup, Container, } from 'react-bootstrap';

function Projects() {
  return (
    <section id='portfolio'>
      <br/>
      <div className='projects'>
           <h1 className='about'>Portfolio</h1>
      <p className='p'>Here are some mini projects i did. Their technology, brief description and their repository links mentioned below.</p>

      <center>
        <Container>
          <CardGroup>
    <Card className='card-main'>
      <Card.Img variant="top" className='crd-img' src="sinflix.gif" />
      <Card.Body>
        <Card.Title className='title'>SinFlix</Card.Title>
        <Card.Text className='card-text'>
          This web application can search any movies and see thier details. I learnt to use API for my web application from this mini project. I use react, tailwind and OMDB Movie database for this project. 
        </Card.Text>
           <a href='https://github.com/IshanThilakarathne/sinflix' className=''><img src="github-mark-white.svg" alt="gitButton" border="0" className='git-img'/></a>
      </Card.Body>
        </Card> 
         &nbsp; &nbsp;
           <Card className='card-main'>
      <Card.Img variant="top" className='crd-img' src="portfolio.gif" />
      <Card.Body>
        <Card.Title className='title'>Portfolio</Card.Title>
        <Card.Text className='card-text'>
          This is my personal web sites and to build this wesite i use react and bootstrap. 
        </Card.Text>
                  <a href='https://github.com/IshanThilakarathne/sinflix' className=''><img src="github-mark-white.svg" alt="gitButton" border="0" className='git-img2' /></a>
                  
                </Card.Body>
                
            </Card> 
             </CardGroup> 
        </Container>  
      
      </center>

      </div>
      </section>
  )
}

export default Projects