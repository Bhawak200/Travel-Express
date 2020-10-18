import React from 'react'
import Carousel from '../Components/carousel.js'
import Explore from '../Components/explore.js'
import See from '../Components/Seemore.js'
import Contact from'../Components/contacts.js'
import About from '../Components/about.js'
import Header from '../Components/Header.js'




const homepage=()=>
<div style={{backgroundColor:"black"}}>
<Header/>
<Carousel/>
<About/>
<Explore/>
<See/>
<div  class="navbar-static-bottom"><Contact/></div>
</div>
export default homepage