import logo from './logo.svg';
import './App.css';
import React, { useState } from 'react';
import api from './services/api'

const App = () =>{ 
  const [users, setUsers] = useState([])

  const getUsers = () => {
    const response = api.service('users').find({})
    setUsers(response.data)
  } 
  let usersLoaded = false
  if (!usersLoaded){
    getUsers()
    usersLoaded=true
  }
  
  return (
  
    
    
    <div className="users">
      <ul>
      {users &&
        users.map((user,index)=>{
          return (<li>{user.name}</li>)
        })
      }
      </ul>
    </div>
 
)};

export default App;
