import React from 'react'

import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';
import { faHouse, faAddressCard, faCode, faChalkboardUser,faListCheck, faCircleQuestion, faAddressBook } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { HashLink as Link } from 'react-router-hash-link';

function NavBar() {
  return (
      <div className='nav'>
          <Navbar fixed='bottom' className="nav-bar">
       
        <Container >
           <Link to='#home'>
            <FontAwesomeIcon icon={faHouse} className='nav-icon' /> 
          </Link>
          <Link to='#about'>
            <FontAwesomeIcon icon={faAddressCard} className='nav-icon' /> 
          </Link>
          <Link to='#skills'>
            <FontAwesomeIcon icon={faCode} className='nav-icon' />
          </Link>
          <Link to='#interest'>
            <FontAwesomeIcon icon={faChalkboardUser} className='nav-icon' />
            </Link>  
          <Link to='#projects'>
            <FontAwesomeIcon icon={faListCheck} className='nav-icon' /> 
          </Link> 
          <Link to='#contact'>
            <FontAwesomeIcon icon={faAddressBook} className='nav-icon' />
            </Link>
          <Link to='#faqs'>
            <FontAwesomeIcon icon={faCircleQuestion} className='nav-icon' /> 
            </Link>
          </Container>
      
          </Navbar>
    </div>
  )
}

export default NavBar