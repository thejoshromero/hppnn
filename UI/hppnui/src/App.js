
import './App.css';
import React, { useState, useEffect } from 'react';
import api from './services/api';

function App(){ 
  const [users, setUsers] =  useState(null)
  
  const getUsers = async () => {
    const response = await api.service('users').find({});
    setUsers(response.data)
  } 

  useEffect(() => {
    getUsers();
  }, []);

  return (
    <div className="app">
      <h1>HPPNN Users</h1>
      <div className="users">
      {users && users.map((user,index)=>{
          const uname = user.user_name;
          return (
              <div className="user" key={index}>
                <h2>{uname}</h2>
                  <h3>User {index+1}</h3>
                  <h3>{user.name}</h3>
                  <div className="details">
                    <p>bio: {user.bio}</p>
                    <p>Location: <br/> lat={user.geo_location.coordinates[0]} <br/> long={user.geo_location.coordinates[1]} </p>
                  </div>
              </div>
          );
        })}
    </div>
    </div>
)};
export default App;
