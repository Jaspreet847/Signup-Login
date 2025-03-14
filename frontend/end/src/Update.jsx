import  {useState, useEffect} from 'react';

import axios from 'axios';
import './Update.css';

const Update = () => {
   

  
    
    
  return (

    
      <div>
        <h1>Users List</h1>
        <div className="card-container">
          {users.map((user, index) => (
            <div className="card" key={index}>
              <h3>{user.email}</h3>
              <p>Password: {user.password}</p>
              <button onClick={()=>handledelete(user._id)}>Delete</button>
             
            </div>
          ))}
        </div>
      </div>
  )

}
export default Update
