import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import Card from './Card';



export default function Honda() {
    const navigate = useNavigate();
    const [ FilterArr , setA ] = useState( [] )

    const task = () => navigate("/alltask")
   
    useEffect(() => {
        fetch ( "https://cars.adaptable.app/getHonda-City" ).then( ( res )=> res.json() ).then ( ( ans ) => {
            setA ( ans );
          }).catch ( ( err ) => console.log ( err ) )
    }, [])
    
  return (
    <div >
       <h2 className='all'>All-Cars</h2>
        
        <div className='btnA'>

        <button className="button" onClick={task} >All-Task</button>
      
        </div>
       
        <div className='cards'>

          {
  FilterArr.map( ( e , i ) => {
    return (
      <Card obj = {e} key={i} />
    )
  })
}        

        </div>
    </div>
  )
}
