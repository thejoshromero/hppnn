import logo from './logo.svg';
import './App.css';
import React, { useState } from 'react';
import api from './services/api'
import axios from 'axios'

function App(){ 
  const [users, setUsers] =  useState(null)
  const apiURL = 'http://localhost:3030/users';

  const getUsers = async () => {
    const response = await api.service('users').find({
      query:{
        id:{
          $gt: 0
        }
      }
    });//axios.get(apiURL);
    setUsers(response.data)
  } 
  // let usersLoaded = false
  // if (!usersLoaded){
  //   getUsers()
  //   usersLoaded=true
  // }
  
  return (
  
    
    
    <div className="app">
      <h1>HPPNN Users</h1>
      <h2>Fetch the users</h2>
      <div>
        <button className="fetch-button" onClick={getUsers}>
          Fetch Data
        </button>
        <br/>
      </div>


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
