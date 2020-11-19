
import './App.css';
import React, { useState, useEffect } from 'react';
import api from './services/api';

import ReactMapGL, {Marker} from 'react-map-gl';




function App(){ 
  const [users, setUsers] =  useState(null)
  const [viewport, setViewport] = useState({
    width: 400,
    height: 400,
    latitude: 38.4351,
    longitude: -78.8698,
    zoom: 11
  });
  const getUsers = async () => {
    const response = await api.service('users').find({});
    setUsers(response.data)
  } 

  useEffect(() => {
    getUsers();
  }, []);

  return (
    
    <div className="app">
      <link href="https://api.tiles.mapbox.com/mapbox-gl-js/v<1.12.0>/mapbox-gl.css" rel="stylesheet" />
      <h1>HPPNN Users</h1>
      <ReactMapGL id="map" mapboxApiAccessToken="pk.eyJ1Ijoienp1a293c2tpIiwiYSI6ImNraG8zeW12MTA2b24yeG1qYmJhb3czeXYifQ.r9bVmL1zpRLXkfOSHVgi8g"
      mapStyle="mapbox://styles/mapbox/outdoors-v11"
      {...viewport}
      onViewportChange={nextViewport => setViewport(nextViewport)}
    >
{users && users.map((user,index)=>{
          const uname = user.user_name;
         
          
          return (
            <Marker longitude={user.geo_location.coordinates[1]} latitude={user.geo_location.coordinates[0]}>
        <div style={{color: "white",
      backgroundColor: "DodgerBlue",
      padding: ".5px"}}>{user.user_name}</div>
        </Marker>
              // <div className="user" key={index}>
              //   <h2>{uname}</h2>
              //     <h3>User {index+1}</h3>
              //     <h3>{user.name}</h3>
              //     <div className="details">
              //       <p>bio: {user.bio}</p>
              //       <p>Location: <br/> lat={user.geo_location.coordinates[0]} <br/> long={user.geo_location.coordinates[1]} </p>
                    
              //     </div>
              // </div>
          );
        })}

    </ReactMapGL>
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
