import React, { useState } from 'react'
import axios from "axios" ;

import { Link, useNavigate } from 'react-router-dom'
import Navbar from './Navbar';


export default function Signup() {

  const history = useNavigate() ;           // To navigate

  const [ email , setEmail ] = useState ('')
  const [ password , setPassword ] = useState('')

  const submit = async ( e ) => {

    e.preventDefault() ;
console.log(89)
    try {
      
      const response = await fetch("https://cars.adaptable.app/signup", {
      // credentials: 'include',
      // Origin:"http://localhost:3000/login",
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ email: email, password: password })

    });
    const json = await response.json()
    console.log(json);
  

      if ( json.success )  alert( "User Already Exist")               // In Signup if user exist show message, to enter new user                                  
      
      else if ( !json.success )   history("/home" , { state: { id: email } } ) 


    }
    catch ( err ) { console.log ( err ) }
  } 


  return (
  <div className='login'>
  
  <div className='log' >
 
 <h1> Please SignUp to Enjoy services </h1>   
    
    <form  className='form' onSubmit={submit} >

    Email: <input className='email' type='email'  onChange = { ( e ) => { setEmail( e.target.value) }  } name='email' placeholder='Enter Email' />


   Password: <input className='password' type='password'  onChange = { ( e ) => { setPassword( e.target.value) } } name='password' placeholder='Enter Password' />

  
<div className='btn' >
<button type='submit' className='submit'>Signup</button>

<Link to="/" className='submitLink' > LogIn </Link>

</div>
     </form>
 
  </div>

</div>
 
  )
}
