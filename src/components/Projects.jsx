import React from 'react'
import Card from 'react-bootstrap/Card';
import { CardGroup, Container, } from 'react-bootstrap';
import sinflix from "../images/sinflix.gif";
import portfolio from "../images/portfolio.gif";
import github from "../images/github-mark-white.svg";
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import mind from "../images/mindMockup.png"
import todo from "../images/todoscreen.png"

function Projects() {
  return (
    <section id='projects'>
      <br/>
      <div className='projects'>
        <h1 className='about'>Projects</h1>
          <p className='p'>Here are some mini projects i did. Their technology, brief description and their repository links mentioned below.</p>
        <Container>
          <Row xsm={1} sm={1} md={2} lg={2} xl={3} >
            <Col>
              <center>  
                <Card className='card-main'>
                  <Card.Img variant="top" className='crd-img' src={sinflix} />
                    <Card.Body>
                      <Card.Title className='title'>SinFlix</Card.Title>
                       <Card.Text className='card-text'>
                          This web application can search any movies and see thier details. I learnt to use API for my web application from this mini project. I use react, tailwind and OMDB Movie database for this project. 
                      </Card.Text>
                          <a href='https://github.com/IshanThilakarathne/sinflix' className='git-img'><img src={github} alt="gitButton" border="0" className='git-img'/></a>
                    </Card.Body>
               </Card>     
              </center> 
            </Col>

            <Col>
              <center>
                <Card className='card-main'>
                  <Card.Img variant="top" className='crd-img' src={portfolio} />
                    <Card.Body>
                     <Card.Title className='title'>Portfolio</Card.Title>
                      <Card.Text className='card-text'>
                        This is my personal web sites and to build this wesite i use react and bootstrap. 
                      </Card.Text>
                        <a href='https://github.com/IshanThilakarathne/portfolio' className='git-img'><img src={github} alt="gitButton" border="0" className='git-img2' /></a>
                    </Card.Body>
                </Card> 
              </center> 
            </Col>
     
            <Col>
              <center>
                <Card className='card-main'>
                  <Card.Img variant="top" className='crd-img' src={mind} />
                    <Card.Body>
                      <Card.Title className='title'>Post Tracking System</Card.Title>
                        <Card.Text className='card-text'>
                          This is my 2nd year group project. I did the front-end part of the system and we share our knowledge with each other. For this project we use Bootstrap, laravel and MySQL.  
                        </Card.Text>
                          <a href='https://github.com/IshanThilakarathne/Mind_Unit_Tracking_System' className='git-img'><img src={github} alt="gitButton" border="0" className='git-img3' /></a>
                    </Card.Body>
                </Card>
              </center> 
            </Col>
            <Col>
              <center>
                <Card className='card-main'>
                  <Card.Img variant="top" className='crd-img' src={todo} />
                    <Card.Body>
                      <Card.Title className='title'>Todo App</Card.Title>
                        <Card.Text className='card-text'>
                          This a simple todo app I create to learn MongoDB, Express, React, NodeJS(MERN). This app as simple functionalty like adding, deletining, updating and I hope to improve this app to the next level in future.
                        </Card.Text>
                          <a href='https://github.com/IshanThilakarathne/Todo/tree/main' className='git-img'><img src={github} alt="gitButton" border="0" className='git-img3' /></a>
                    </Card.Body>
                </Card>
              </center> 
            </Col>
          </Row>
        </Container>  
      </div>
    </section>
  )
}

export default Projects