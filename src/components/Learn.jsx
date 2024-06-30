import React, { useEffect, useState } from 'react';
import datas from './Data.json'

const Learn = () => {

  const [users,setUsers] = useState([]);

  useEffect(()=>{
    async function fetchUsers(){
      try{
        const response = await fetch('https://api.github.com/users');

        const data = await response.json();
        setUsers(data);

      }
      catch{
        console.log("Error");

      }
    }

  },[]);
  
  
  return (
    
    <div>
      <h1>Users list</h1>
      <ul>
        {
          users.map(user => {
            return <li key={user.id}><a href={user.html_url}>{user.login}</a></li>
          })
        }
      </ul>
    </div>
    
        
    
  )
}

export default Learn