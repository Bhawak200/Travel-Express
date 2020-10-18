import React from 'react'
import {Card,Button, CardColumns} from 'react-bootstrap'
import '../App.css'
import { connect } from 'react-redux'
import Header from '../Components/Header.js'
import Contacts from '../Components/contacts.js'
import {Spring} from 'react-spring/renderprops'
import { fetchService } from '../action/index.js'

class destination extends React.Component {

  state = {
    services: []
  }
  componentDidMount() {
    debugger
    this.props.dispatch(fetchService())
  }

  renderServices = (services) => {
    return services.map(service =>
      <Spring  key={service.id}
          from={{ opacity: 0,
           }}
            to={{ opacity: 1,
          }}
       config={{delay:900,duration:1000}}
       >
      {props => <div style={props} ><Card className="cardcontent">
         <Card.Img variant="top" src={service.Image}  />
         <Card.Body style={{backgroundColor:"#E3E2DF"}}>
            <Card.Title className='titlecolor'><strong>{service.Title}</strong></Card.Title>
            <Card.Text>
          {service.Description}
         </Card.Text>
             <Button variant="primary" href={service.link} className="footer">Click here</Button>
          </Card.Body>
      </Card>
      </div>}
     </Spring>)
  }      

render(){
  const {services}=this.props

return( 
<>
<Header></Header>
<div style={{marginTop:"6em"}}> 
        <CardColumns>
        { this.renderServices(services) }
        </CardColumns>
</div>
   <Spring
      from={{ opacity: 0,
          }}
      to={{ opacity: 1,
        }}
      config={{delay:4000,duration:1000}}>  
     { props => 
       <div style={props}className="navbar-static-bottom" >
          <Contacts></Contacts>
       </div>}
 </Spring>
</>
       )
}
}

const mapStateToProps = state => ({services: state.service.items})
    
export default connect(mapStateToProps)(destination)


  