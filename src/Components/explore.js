import React from 'react'
import '../App.css'
import {Row ,Col,Container} from 'react-bootstrap'
import {Spring} from 'react-spring/renderprops'

const explore=() =>

<Spring
    from={{ opacity: 0,
          }}
    to={{ opacity: 1,
        }}
    config={{delay:5000,duration:1000}}>
        
    { props => <div style={props}>
<Container fluid>
    <Row>
    <Col className='exploreheader display-4'>Dare to Explore</Col>
    </Row>
    <Spring
      from={{ opacity: 0,}} to={{ opacity: 1}} config={{delay:6000,duration:1000}}>
    { props => <div style={props}>
    <Row>
        <Col className='col-lg-3 col-md-12 col-12'><img src='20.jpg' className='explreimages'alt='first'></img></Col>
        
        <Col className='col-lg-3 col-md-12 col-12'><img src='7.jpg'  className='explreimages'alt='first'></img></Col>
        <Col className='col-lg-3 col-md-12 col-12'><img src='8.jpg' className='explreimages' alt='first'></img></Col>
        <Col className='col-lg-3 col-md-12 col-12'><img src='11.jpg'  className='explreimages' alt='first'></img></Col>
    </Row>
    </div>}</Spring>
    <Spring
      from={{ opacity: 0,}} to={{ opacity: 1}} config={{delay:6800,duration:1000}}>
    { props => <div style={props}>
    <Row>
        <Col className='col-lg-3 col-md-12 col-12'><img src='12.jpg' className='explreimages' alt='first'></img></Col>
        <Col className='col-lg-3 col-md-12 col-12'><img src='13.jpg'  className='explreimages' alt='first'></img></Col>
        <Col className='col-lg-3 col-md-12 col-12'><img src='14.jpg'  className='explreimages' alt='first'></img></Col>
        <Col className='col-lg-3 col-md-12 col-12'><img src='10.jpg' className='explreimages'  alt='first'></img></Col>
    </Row>
    </div>}
    </Spring>
</Container>
</div>}
</Spring>

export  default explore