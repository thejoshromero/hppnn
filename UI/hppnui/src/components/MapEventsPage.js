import React, { useState, useEffect } from "react";
import Carousel from "react-bootstrap/Carousel";
import Container from "react-bootstrap/Container";
import api from "../services/api";

import ReactMapGL, { Marker } from "react-map-gl";


const MapEventsPage = () => {
  //const [users, setUsers] =  useState(null)
  const [events, setEvents] = useState(null);
  const [viewport, setViewport] = useState({
    width: 400,
    height: 400,
    latitude: 38.4351,
    longitude: -78.8698,
    zoom: 11,
  });
  //   const getUsers = async () => {
  //     const response = await api.service('users').find({});
  //     setUsers(response.data);
  //   };

  const getEvents = async () => {
    const response = await api.service("events").find({});
    setEvents(response.data);
  };

  useEffect(() => {
    getEvents();
    // getUsers();
  }, []);
  return (
    <Container justify>
      <div>
        <link
          href="https://api.tiles.mapbox.com/mapbox-gl-js/v<1.12.0>/mapbox-gl.css"
          rel="stylesheet"
        />
        <h1>HPPNN Events</h1>

        <ReactMapGL
          id="map"
          mapboxApiAccessToken="pk.eyJ1Ijoienp1a293c2tpIiwiYSI6ImNraG8zeW12MTA2b24yeG1qYmJhb3czeXYifQ.r9bVmL1zpRLXkfOSHVgi8g"
          mapStyle="mapbox://styles/mapbox/outdoors-v11"
          {...viewport}
          onViewportChange={(nextViewport) => setViewport(nextViewport)}
        >
          {events &&
            events.map((event, index) => {
              return (
                <Marker
                  longitude={event.geo_location.coordinates[1]}
                  latitude={event.geo_location.coordinates[0]}
                >
                  <div
                    style={{
                      color: "white",
                      backgroundColor: "DodgerBlue",
                      padding: ".5px",
                    }}
                  > 
                    {event.name}
                  </div>
                </Marker>
              );
            })}
        </ReactMapGL>
      </div>
<br/>
      <Carousel align="center" style={{
                      color: "white",
                      backgroundColor: "Gray",
                      padding: ".5px",
                      width: "50%",
                    }}>
        
        {events &&
          events.map((event, index) => {
            return (
              <Carousel.Item style={{'height':"300px"}} >
                <Carousel.Caption>
                  <h3 style={{'color':"blue"}} >{event.name}</h3>
                  <p style={{'color':"black"}}>{event.description}</p>
                  <p style={{'color':"black"}}>{event.city}</p>
                  <p style={{'color':"black"}}>{event.state}</p>
                  <p style={{'color':"black"}}>{event.zip_code}</p>
                  <p style={{'color':"black"}}>{event.start_time}</p>
                </Carousel.Caption>
              </Carousel.Item>
            );
          })}
      </Carousel>
    </Container>
  );
};
export default MapEventsPage;
