import React, { useState } from 'react';
import datas from './Data.json'

const Learn = () => {

  const [name,setName] = useState("");

  const handleName = (e) =>{
    setName(e.target.value); 
  } 
  
  return (
    <div>

    <label>
        Name:<input type="text" value={name} className='border border-black' onChange={handleName}/>
        Email:
    </label>


    </div>
        
    
  )
}

export default Learn