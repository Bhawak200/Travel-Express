import React,{useState} from 'react';
import {Navbar,Nav, Button} from 'react-bootstrap'
import Modal from './modal.js'
import {Link } from 'react-router-dom'
import '../App.css'
import {Spring} from 'react-spring/renderprops'
const Header = () =>{
  const [modalShow, setModalShow] = useState(false);

  return(<Spring
  from={{opacity:0}}
  to={{opacity:1}}
  config={{delay:250,duration:1000}}>
  { props =>(
   <div style={props}className="bott">
     <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark" fixed='top'>
     <Navbar.Brand href="#home"className='title'>Traveller Express</Navbar.Brand>
     <Navbar.Toggle aria-controls="responsive-navbar-nav" />
     <Navbar.Collapse id="responsive-navbar-nav">
      <Nav className="ml-auto">
      <Link to="/"className='navlink'>Home</Link>
      <Link to='/destination'className='navlink'>Destination</Link>
      </Nav>
      <Nav>
      <Button href="http://localhost:3000/contribute" variant='warning'className='navlink'size='lg'style={{color:'white'}}>
        Contribute
      </Button>
      <Button  variant='warning'className='navlink'size='lg'style={{color:'white'}} onClick={() => setModalShow(true)}>
        Video
      </Button>
    </Nav>
    <Modal
        show={modalShow}
        onHide={() => setModalShow(false)}/>
     </Navbar.Collapse>
    </Navbar>
</div>)
}
</Spring>)
}



export default Header