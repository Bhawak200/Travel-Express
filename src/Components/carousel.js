import React from 'react';
import {Carousel} from 'react-bootstrap';
import '../App.css'
import {Spring} from 'react-spring/renderprops'
const carousel=()=>
<Spring
   from={{opacity:0}}
   to={{opacity:1}}
  config={{delay:500,duration:1000}}>
    {props => (<div style={props}>
       <Carousel>
        <Carousel.Item>
         <img
        className="d-block w-100 imgcarousel"
        src='2.jpg'
        alt="First slide"
        />
        <Carousel.Caption className='d-none d-md-block'>
        <Spring
           from={{ opacity: 0,
            paddingBottom:200,
            }}
              to={{ opacity: 1,
              paddingBottom:200,
              }}
              config={{delay:2000,duration:1000}}>
             {props => <div style={props}className="contentcarousel display-2">Welcome To India</div>}
           </Spring>
         
        </Carousel.Caption>
        </Carousel.Item>
       <Carousel.Item>
     <img
      className="d-block w-100 imgcarousel"
      src='3.jpg'
      alt="Third slide"
    />

    <Carousel.Caption className='d-none d-md-block'>
    <Spring
           from={{ opacity: 0,
            paddingBottom:120,
            }}
              to={{ opacity: 1,
              paddingBottom:120,
              }}
              config={{delay:6000,duration:1000}}>
             {props => <div style={props}className="contentcarousel display-2">India is always a good idea</div>}
           </Spring>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100 imgcarousel"
      src="1.jpg"
      alt="Third slide"
    />

    <Carousel.Caption className='d-none d-md-block'>
    <Spring
           from={{ opacity: 0,
            paddingBottom:200,
            }}
              to={{ opacity: 1,
              paddingBottom:200,
              }}
              config={{delay:11500,duration:1000}}>
             {props => <div style={props}className="contentcarousel display-2">Dare To Adventure</div>}
           </Spring>
    </Carousel.Caption>
  </Carousel.Item>
</Carousel>
</div>)}
</Spring>
export default carousel