import React from 'react'
import Card from 'react-bootstrap/Card';
import { CardGroup, Container, } from 'react-bootstrap';
import sinflix from "../images/sinflix.gif";
import portfolio from "../images/portfolio.gif";
import github from "../images/github-mark-white.svg";

function Projects() {
  return (
    <section id='projects'>
      <br/>
      <div className='projects'>
           <h1 className='about'>Projects</h1>
      <p className='p'>Here are some mini projects i did. Their technology, brief description and their repository links mentioned below.</p>

      <center>
        <Container>
          <CardGroup>
    <Card className='card-main'>
      <Card.Img variant="top" className='crd-img' src={sinflix} />
      <Card.Body>
        <Card.Title className='title'>SinFlix</Card.Title>
        <Card.Text className='card-text'>
          This web application can search any movies and see thier details. I learnt to use API for my web application from this mini project. I use react, tailwind and OMDB Movie database for this project. 
        </Card.Text>
           <a href='https://github.com/IshanThilakarathne/sinflix' className='git-img'><img src={github} alt="gitButton" border="0" className='git-img1'/></a>
      </Card.Body>
        </Card> 
         &nbsp; &nbsp;
           <Card className='card-main'>
      <Card.Img variant="top" className='crd-img' src={portfolio} />
      <Card.Body>
        <Card.Title className='title'>Portfolio</Card.Title>
        <Card.Text className='card-text'>
          This is my personal web sites and to build this wesite i use react and bootstrap. 
        </Card.Text>
                  <a href='https://github.com/IshanThilakarathne/sinflix' className='git-img2'><img src={github} alt="gitButton" border="0" className='git-img2' /></a>
                  
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