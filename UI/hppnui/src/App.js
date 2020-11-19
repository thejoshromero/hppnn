
import './App.css';
import React, { useState, useEffect } from 'react';
import api from './services/api';

import ReactMapGL, {Marker} from 'react-map-gl';
import Nav from 'react-bootstrap/Nav'
import 'bootstrap/dist/css/bootstrap.min.css';
import * as Icon from 'react-bootstrap-icons';

function App(){ 
  const [users, setUsers] =  useState(null)
  const [setEvents, events] = useState(null)
  const [viewport, setViewport] = useState({
    width: 400,
    height: 400,
    latitude: 38.4351,
    longitude: -78.8698,
    zoom: 11
  });
  const getUsers = async () => {
    const response = await api.service('users').find({});
    setUsers(response.data);
  };

  const getEvents = async () => {
    const response = await api.service('events').find({});
    setEvents(response.data.data);
  }; 

  function getMap(){
        return(
          <ReactMapGL id="map" mapboxApiAccessToken="pk.eyJ1Ijoienp1a293c2tpIiwiYSI6ImNraG8zeW12MTA2b24yeG1qYmJhb3czeXYifQ.r9bVmL1zpRLXkfOSHVgi8g"
          mapStyle="mapbox://styles/mapbox/outdoors-v11"
          {...viewport}
          onViewportChange={nextViewport => setViewport(nextViewport)}
        >
        {events && events.map((event,index)=>{
              return (
                <Marker longitude={event.geo_location.coordinates[1]} latitude={event.geo_location.coordinates[0]}>
            <div style={{color: "red",
          backgroundColor: "DodgerBlue",
          padding: ".5px"}}>{event.name}</div>
            </Marker>
              );
            })}

        </ReactMapGL>

        );
  };

  useEffect(() => {
    getEvents();
    getUsers();
    
  }, []);

  return (
    
    <div className="app">
      <link href="https://api.tiles.mapbox.com/mapbox-gl-js/v<1.12.0>/mapbox-gl.css" rel="stylesheet" />
      <h1>HPPNN Users</h1>
      {/* <ReactMapGL id="map" mapboxApiAccessToken="pk.eyJ1Ijoienp1a293c2tpIiwiYSI6ImNraG8zeW12MTA2b24yeG1qYmJhb3czeXYifQ.r9bVmL1zpRLXkfOSHVgi8g"
      mapStyle="mapbox://styles/mapbox/outdoors-v11"
      {...viewport}
      onViewportChange={nextViewport => setViewport(nextViewport)}
    >
{users && users.map((user,index)=>{
          return (
            <Marker longitude={user.geo_location.coordinates[1]} latitude={user.geo_location.coordinates[0]}>
        <div style={{color: "white",
      backgroundColor: "DodgerBlue",
      padding: ".5px"}}>{user.user_name}</div>
        </Marker>
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
    </div>*/}
    <Nav fill variant="tabs" defaultActiveKey="/home" bg="dark" >
  <Nav.Item>
    <Nav.Link ><Icon.House/></Nav.Link>
  </Nav.Item>
  <Nav.Item>
    <Nav.Link onClick={getMap()}><Icon.GeoAlt/></Nav.Link>
  </Nav.Item>
  <Nav.Item>
    <Nav.Link eventKey="link-2"><Icon.Search/></Nav.Link>
  </Nav.Item>
  <Nav.Item>
  <Nav.Link eventKey="link-2">
    <Icon.PersonCircle/>
    </Nav.Link>
  </Nav.Item>
</Nav>
    </div>
)};
export default App;
