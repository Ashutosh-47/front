import React, { useEffect, useState } from 'react'
import Card from './Card'
import { Link, useNavigate } from 'react-router-dom'


export default function AllTask() {

  const navigate = useNavigate();

  const [ bol , setB ] = useState ( true )

  const [ data , setD ] = useState ( [] )
  const [ fil , setF ] = useState ( "" )

  useEffect(  () => {

                 fetch("https://cars.adaptable.app/getDetail").then ( (res) =>  res.json()).then( ( ans ) => {
                 
                 setD(ans) 

                 console.log(data)
                
                }).catch( (err) => console.log(err))

               
  }, [])




  const filter = ( e ) => { setF ( e.target.value )  }


  return (
    <div >
       <h2 className='all'>All-Cars</h2>
        
        <div className='btnA'>
          
          <input type='text' placeholder='Search' value={fil} onChange={filter} />

          <Link to="/home" className='button'>Add-Cars</Link> 
           <Link to="/honda" className='button'>Honda-City</Link> 
      
        </div>
       
        <div className='cards'>

          {
            fil != "" ?  
            data.filter ( ( e ) => ( e.price == fil || e.color == fil || e.available == fil ) ).map ( (e , i) => {
              return (
                <Card obj = {e} key={i} />
              )
            })
            
            : data.map( ( e , i ) => {
              return (
                <Card obj = {e} key={i} />
              )
            })
}        

        </div>
    </div>
  )
}


