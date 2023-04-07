import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'

export default function Home() {

const navigate = useNavigate();
 const task = () => navigate("/alltask")

 const [ obj , setobj ] = useState( { 
  title: "" ,
  color: "",
  available: "",
  model: "",
  price: "",
  date: ""
 } )

 const change = ( e ) => { setobj( { ...obj , [e.target.name] : e.target.value } ) }

 const submit = async ( e ) => {
 e.preventDefault();

 try {

  if ( obj.title !== "" && obj.color !== "" && obj.available !== "" &&  obj.model !== "" && obj.price !== "" &&  obj.date !== "" ) {

  console.log ( obj )    
  
  const response = await fetch("https://cars.adaptable.app/details", {
  
  method: 'POST',
  headers: {  'Content-Type': 'application/json' } ,
  body: JSON.stringify ( { title: obj.title , color: obj.color , available: obj.available , model: obj.model , price: obj.price , date: obj.date } )
});

const json = await response.json()

console.log(json);


  if ( json.success )      navigate ( "/alltask" )    

  else if ( !json.success )   alert( "Please Fill form Correctly")

}

else alert ( "Please Fill all the Details" )
 }
catch ( err ) { console.log ( err ) }

} 

  return (
  
  <div className='home'>

<button className="button" onClick={task} >All-Task</button>

      <h1> Add Your Car Details </h1>
      
      <form onSubmit={submit}>
        
        <p>Title: <input type='text' name='title' onChange={change} /></p>
        
        <div className="desc">
         
          <p>Description:</p>
          
            <p>Color: <input type='text' name='color' onChange={change} /></p>
           
            <p>Available: 
              <input type="radio" name="available" value="yes" onChange={change} />Yes
              <input type="radio" name="available" value="no" onChange={change} />No
            </p>
   
            <p>Model: <select name='model' onChange={change} >
             <option value="" >Select-Car</option>
              <option value='Honda-City'>Honda-City</option>
              <option value='Maruti'>Maruti</option>
              <option value='Swift'>Swift</option>
              <option value='Others'>Others</option>
              </select> 
              </p>
   
              <p> Price: <input type='number' name='price' onChange={change} /> </p>
             
              <p>Date: <input type="date" name='date' onChange={change} /></p>
             
              <button type='submit' className="button">ADD</button>

        </div>
      </form>
    </div>
  )
}
