import React, { useState } from 'react'
import image from "../Images/img-1.jpg"


export default function Card( props ) {
 
const [ dele , setD ] = useState( true ) 

  const [ bol , setB ] = useState ( true )
  
  const [ obj , setobj ] = useState( { 
    title: props.obj.title ,
    color: props.obj.color,
    available: props.obj.available,
    model: props.obj.model,
    price: props.obj.price,
    date: props.obj.date
   } )
   
   const change = ( e ) => { setobj( { ...obj , [e.target.name] : e.target.value } ) }


  const del = async ( e ) => {
console.log(e)

setD ( false )

   const response = await fetch("https://cars.adaptable.app/delete", {
  
   method: 'POST',
   headers: {  'Content-Type': 'application/json' } ,
   body: JSON.stringify ( { id: props.obj._id } )
 });
 
 const json = await response.json()
 

  }


  const edit = () => {  setB( false ) }

  const add = async () => {
   setB ( true )

   console.log( props.obj._id)

   const response = await fetch("https://cars.adaptable.app/edit", {
  
   method: 'POST',
   headers: {  'Content-Type': 'application/json' } ,
   body: JSON.stringify ( { id: props.obj._id , title: obj.title , color: obj.color , available: obj.available , model: obj.model , price: obj.price , date: obj.date } )
 });
 
 const json = await response.json()
 

  }

  return (

    <div className='maincard'>

        {
          bol == true ? <div className='card' style={ { "display":  dele == true ? 'block' : 'none' } }>

          <img src = { image } alt='No Image' className='image' />
             
             <div className='cardDetail' >
          
             <p>Title: <span className='det'>{ obj.title } </span> </p> 
              <p>Color: <span className='det'>{ obj.color }</span> </p>
              <p>Available: <span className='det'>{ obj.available} </span> </p>
              <p>Model: <span className='det'> { obj.model } </span> </p>
              <p>Price: <span className='det'> { obj.price } </span> </p>
              <p>Date: <span className='det'> { obj.date } </span> </p>
          
             </div>
             <button className='button' onClick={edit}>Edit</button>
             <button className='button'  onClick={del} >Delete</button>
          </div> :
        
        <div className='card' style={ { "display":  dele == true ? 'block' : 'none' } } >

          <img src = { image } alt='No Image' className='image' />
             
             <div className='cardDetail'>
             <p>Title: <input type='text' name='title' value={obj.title} onChange={change} /></p>
             
            <p>Color: <input type='text' name='color' value={obj.color} onChange={change} /></p>
           
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
  
             <p> Price: <input type='number' name='price' placeholder={obj.price} value={obj.price} onChange={change} /> </p>
            
             <p>Date: <input type="date" name='date' value={obj.date} onChange={change} /></p>
             </div>
             <button className='button' onClick={add}>Add</button>
             <button className='button' onClick={del} >Delete</button>
          </div>
        }
    </div>
  )
}
