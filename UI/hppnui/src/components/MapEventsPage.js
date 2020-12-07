import React, { useState, useEffect } from "react";
import Carousel from "react-bootstrap/Carousel";
import Button from "react-bootstrap/Button";
import Toast from "react-bootstrap/Toast";
import * as Icon from "react-bootstrap-icons";
import Container from "react-bootstrap/Container";
import api from "../services/api";
import HppnnLogoBig from "../HppnnLogoBig";
import HppnnLogo from "../HppnnLogo";
import Card from "react-bootstrap/Card";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

import ReactMapGL, { Marker, Popup } from "react-map-gl";

const MapEventsPage = () => {
  const [events, setEvents] = useState(null);
  const [showPopup, setShowPopup] = useState(null);
  const [show, setShow] = useState(false);
  const [showA, setShowA] = useState(true);
  const [viewport, setViewport] = useState({
    width: "100%",
    height: 400,
    latitude: 38.4351,
    longitude: -78.8698,
    zoom: 11,
  });
  const toggleShowA = () => setShowA(!showA);
  const getEvents = async () => {
    const response = await api.service("events").find({});
    setEvents(response.data);
  };

  const CustomPopup = ({ index, marker, closePopup }) => {
    return (
      <Popup
        latitude={marker.latitude}
        longitude={marker.longitude}
        onClose={closePopup}
        closeButton={false}
        closeOnClick={false}
        offsetTop={-30}
      >
        <p>{marker.name}</p>
      </Popup>
    );
  };

  const CustomMarker = ({ index, marker, openPopup }) => {
    return (
      <Marker longitude={marker.longitude} latitude={marker.latitude}>
        <div className="marker" onClick={() => openPopup(index)}>
          <span>
            <b>{index + 1}</b>
          </span>
        </div>
      </Marker>
    );
  };

  useEffect(() => {
    getEvents();
  }, []);
  return (
    <Container style={{ height: "95%" }}>
      <div>
      <Row>
           <Col/>
           <Col>
        <HppnnLogoBig className="App-logo-title"></HppnnLogoBig>
        </Col>
           <Col/>
           </Row>
        <link
          href="https://api.tiles.mapbox.com/mapbox-gl-js/v<1.12.0>/mapbox-gl.css"
          rel="stylesheet"
        />

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
                <div>
                  <Marker
                    longitude={event.geo_location.coordinates[1]}
                    latitude={event.geo_location.coordinates[0]}
                    closeButton={false}
                    closeOnClick={false}
                    anchor="top"
                  >
                    <Icon.GeoAlt />

                    <Toast>
                      <Toast.Header>
                        <HppnnLogo className="App-logo-marker" />
                        <strong className="mr-auto">{event.name}</strong>
                        <small>{event.start_time}</small>
                      </Toast.Header>
                      <Toast.Body>{event.description}</Toast.Body>
                    </Toast>
                  </Marker>
                </div>
              );
            })}
        </ReactMapGL>
      </div>
      <br />
      <Carousel
        align="center"
        style={{
          color: "white",
          backgroundColor: "Gray",
          padding: ".5px",
          width: "100%",
        }}
      >
        {events &&
          events.map((event, index) => {
            return (
              <Carousel.Item style={{ height: "300px" }}>
                <img
                  src={event.image_source}
                  alt="For Event"
                  style={{ height: "300px" }}
                />
                <Carousel.Caption align="center">
                  <Container
                    style={{
                      opacity: "80%",
                      height: "50%",
                      width: "50%",
                      align: "center",
                      background: "gray",
                    }}
                    align="center"
                  >
                    <h5 style={{ color: "blue" }}>
                      <HppnnLogo className="App-logo-marker" /> {event.name}
                    </h5>
                    <div>
                      <Card.Subtitle className="mb-2 text">
                        {event.description}
                      </Card.Subtitle>
                      <Card.Text className="mb-2 text">{event.city}</Card.Text>
                      <Card.Link href="#">Add Event</Card.Link>
                    </div>
                  </Container>
                </Carousel.Caption>
              </Carousel.Item>
            );
          })}
      </Carousel>
      <Button onClick={() => alert("need to implement")} alignment="center">Add Event</Button>
    </Container>
  );
};
export default MapEventsPage;
