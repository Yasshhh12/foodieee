import React, { useState } from 'react';
import datas from './Data.json'

const Learn = () => {

  const [name,setName] = useState("");
  const [email,setEmail] = useState("");

  const handleName = (e) =>{
    setName(e.target.value); 
  } 

  const handleEmail = (e) =>{
    setEmail(e.target.value); 
  } 
  
  return (
    <div>

    <label>
        Name:<input type="text" value={name} className='border border-black' onChange={handleName} />
        <br/>
        Email:<input type="email" value={email} className='border border-black' onChange={handleEmail}/>
    </label>


    </div>
        
    
  )
}

export default Learn