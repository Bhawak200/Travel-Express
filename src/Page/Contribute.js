import React,{useState} from "react";

import Header from '../Components/Header.js'
import Registration from "../Components/Registration.js"
import {register} from "../action/index.js"
import { Redirect } from 'react-router-dom'
import Contacts from "../Components/contacts.js"
const Contribute=(props)=>{

  const [ redirect, setRedirect ] = useState(false)

const registerUser = (userData) => {
  setRedirect(true)
  register(userData)
}
debugger
if (redirect) { return <Redirect to="/" />}
return <div>
  <Header></Header>
  <div className="shadow-lg p-3 mb-5 bg-warning rounded container formoutline">
   <Registration onRegister={registerUser} />
</div>
       <div className="navbar-static-bottom" >
          <Contacts></Contacts>
       </div>
</div>
}

export default Contribute