import React, { useState } from 'react';
import datas from './Data.json'

const Learn = () => {

  const [formData,setFormData] = useState({
    name:'',
    email:'',
    password:''
  })

  const handleSubmit = (e) =>{
    e.preventDefault();
    console.log(formData);
  }

  const handleInput = (e) =>{
    const {name,value} = e.target;

    setFormData({...formData,[name]:value})
  }
  
  return (
    
    <form onSubmit={handleSubmit}>
      <label>
        Name:<input type='text' name='name' value={formData.name} onChange={handleInput} className='border border-black mb-5'/>
      </label>
      <br/>
      <label>
        Email:<input type='email' name='email' value={formData.email} onChange={handleInput} className='border border-black mb-5'/>
      </label>
      <br/>
      <label>
        Password:<input type='password' name='password' value={formData.password} onChange={handleInput} className='border border-black mb-5'/>
      </label>
      <br/>
      <button className='border border-black'>Submit</button>
    </form>
        
    
  )
}

export default Learn