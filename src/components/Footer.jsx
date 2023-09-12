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
      <center>
      <span className='footer'>Image by</span> <a href="https://www.freepik.com/free-psd/user-interface-design-website-template_20548064.htm#query=website%20mockup&position=22&from_view=keyword&track=ais" className='footer'>Freepik</a>
              <p className='footer'>Copyright ©  {currentYear} Ishan Thilakarathne</p>
     </center>     
    </div>
  )
}
