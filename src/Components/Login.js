import React, { useState } from 'react'
import axios from "axios" ;

import { Link, useNavigate } from 'react-router-dom'
import Navbar from './Navbar';

export default function Login() {

  const history = useNavigate() ;                                // To navigate

  const [ email , setEmail ] = useState ('')
  const [ password , setPassword ] = useState ('')

  const submit = async ( e ) => {

    e.preventDefault() ;
console.log(89)
    try {
      
      const response = await fetch("https://cars.adaptable.app/", {
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
  

         if ( json.success )      history("/home" , { state: { id: email } } )    

      else if ( !json.success )   alert( "You have not SignUp Please Signup")
    }
    
    catch ( err ) { console.log ( err ) }
  } 



  return (
    <div className='login'>
    
    <div className='log' >

<h1> Please LogIn to Enjoy services </h1>   
   
   <form className='form' onSubmit={submit} >

   Email: <input className='email' type='email'  onChange = { ( e ) => { setEmail( e.target.value) }  } name='' placeholder='Enter Email' />


   Password: <input className='password' type='password'  onChange = { ( e ) => { setPassword( e.target.value) } } name='' placeholder='Enter Password' />

  <div className='btn'>
  <button type='submit' className='submit'>LogIn</button>

<Link to="/signup" className='submitLink' > SignUp </Link>

  </div>
   </form>

 </div>
    </div>
  )
}
