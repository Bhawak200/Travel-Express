import React from 'react'
import {Row,Col,Card, Container} from 'react-bootstrap'
import '../App.css'
import {Spring} from 'react-spring/renderprops'
const about=()=>

<Spring
    from={{ opacity: 0,
          }}
    to={{ opacity: 1,
        }}
    config={{delay:4000,duration:1000}}>
        
    { props => 
    <div style={props}>
    <Container className='about' fluid>
    <Row >
        <Col className='display-4 text-center col-sm-12 abouttitle'>About India</Col>
    </Row>
    <Row>
        <Col  className='aboutcontent  h3 col-lg-7 col-md-12 col-sm-12'>India is a country with deep cultural roots and a rich heritage. 
             A great country for budget travel, India is popular for its forts and palaces. 
             You can visit India to find yourself through yoga, to lose yourself in the mountains of Himalayas, to be mesmerised 
             by the ancient temples. The crowded bazaars, blaring traffic, filmy music, the colour,
             the noise and not to forget, the chaos will leave you all amazed and overwhelmed.
        </Col>
        <Col className='col-lg-5 col-md-12 col-sm-12'>
             <Card style={{margin:'2%'}}>
             <Card.Body style={{backgroundColor:'gold'}}>
             <Card.Header className="h2 text-center cardheader">Country Info</Card.Header>
                  <Card.Text style={{color:'rgba(0,0,0,0.7'}}>
                  <h4>Currency: <span className='cardtext1'>Indian rupee (Rs.)</span></h4>
                  <h4>Population: <span className='cardtext1'>1.252 billion</span></h4>
                  <h4>Time Zone: <span className='cardtext1'>UTC+05:30</span></h4>
                  <h4>Area: <span className='cardtext1'>3.287 million km2</span></h4>
                  <h4>Official Language: <span className='cardtext1'>Hindi, English</span></h4>
                  <h4>Capital's calling code:: <span className='cardtext1'>+91</span></h4>
                 </Card.Text>
            </Card.Body>
            </Card>
     </Col>
    </Row>
   </Container>
   </div>
    }
</Spring>

export default about