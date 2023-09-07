import React from 'react'

import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';
import { faHouse, faAddressCard, faCode, faChalkboardUser,faListCheck, faCircleQuestion } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

function NavBar() {
  return (
      <div className='nav'>
          <Navbar fixed='bottom' className="nav-bar">
       
        <Container >
           
              <FontAwesomeIcon icon={faHouse} className='nav-icon' /> |
              <FontAwesomeIcon icon={faAddressCard} className='nav-icon' /> |
              <FontAwesomeIcon icon={faCode} className='nav-icon'/> |
              <FontAwesomeIcon icon={faChalkboardUser} className='nav-icon' /> |
              <FontAwesomeIcon icon={faListCheck} className='nav-icon' /> |
                <FontAwesomeIcon icon={faCircleQuestion} className='nav-icon' />    
          </Container>
      
          </Navbar>
    </div>
  )
}

export default NavBar