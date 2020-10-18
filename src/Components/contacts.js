import React from 'react'
import '../App.css'
import Breadcrumb from 'react-bootstrap/Breadcrumb'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebookF,faLinkedin} from '@fortawesome/free-brands-svg-icons'
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';

const contacts=()=>
<Breadcrumb className='foot' style={{backgroundColor:"black"}}>
  <Breadcrumb.Item href="#" className='alignbread'><FontAwesomeIcon icon={faFacebookF} size='2x' fixedWidth /></Breadcrumb.Item>
  <Breadcrumb.Item href="#" className='alignbread'>
  <FontAwesomeIcon icon={faEnvelope} size='2x' fixedWidth color='red'/>
  </Breadcrumb.Item>
  <Breadcrumb.Item href="https://www.linkedin.com/in/bhawak-anand-761649190/" className='alignbread'><FontAwesomeIcon icon={faLinkedin} size='2x' fixedWidth color='blue'/></Breadcrumb.Item>
</Breadcrumb>

export default contacts
