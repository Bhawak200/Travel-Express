import React, { useState} from 'react'
import {Button} from 'react-bootstrap'
import {Redirect} from "react-router-dom"
import '../App.css'
const Seemore=() =>{
    const [ redirect, setRedirect ] = useState(false)
    const down=()=> setRedirect(true)

    if(redirect) { return <Redirect to="/destination"></Redirect>}
return <div className='see'>
    <Button onClick={down} variant="outline-warning" size="lg">See More</Button>
</div>
}

export default Seemore