import React from 'react'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLinkedin, faSquareFacebook, faSquareInstagram, faSquareTwitter } from '@fortawesome/free-brands-svg-icons'

<script src="https://kit.fontawesome.com/880d254dfc.js" crossorigin="anonymous"></script>

export default function Footer() {

  const currentYear = new Date().getFullYear();

  return (
    
      <div className='foot'>     
        <br />
        <p className='icon-footer'>
          <FontAwesomeIcon icon={faSquareFacebook} /> &nbsp;
          <FontAwesomeIcon icon={faSquareInstagram} />  &nbsp;
          <FontAwesomeIcon icon={faSquareTwitter} /> &nbsp;
           <FontAwesomeIcon icon={faLinkedin} /> &nbsp;
        </p>
              <p className='footer'>Copyright ©  {currentYear} Ishan Thilakarathne</p>
          
    </div>
  )
}
