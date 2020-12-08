import React, { useState, useEffect } from "react";
import Carousel from "react-bootstrap/Carousel";
import Button from "react-bootstrap/Button";
import Toast from "react-bootstrap/Toast";
import * as Icon from "react-bootstrap-icons";
import Container from "react-bootstrap/Container";
import Image from "react-bootstrap/Image";
import api from "../services/api";
import HppnnLogoBig from "../HppnnLogoBig";
import HppnnLogo from "../HppnnLogo";
import Card from "react-bootstrap/Card";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Moment from "react-moment";

import * as moment from "react-moment";

import ReactMapGL, { Marker, Popup } from "react-map-gl";

const MapEventsPage = () => {
  const [events, setEvents] = useState([]);
  const [showPopup, setShowPopup] = useState(null);
  const [show, setShow] = useState([]);
  const [showA, setShowA] = useState(true);
  const [viewport, setViewport] = useState({
    width: "90vw",
    height: "75vh",
    latitude: 38.4351,
    longitude: -78.8698,
    zoom: 11,
  });

  const getEvents = async () => {
    const response = await api.service("events").find({});
    setEvents(response.data);
  };

  useEffect(() => {
    getEvents();
  }, []);

  useEffect(() => {
    setShow(events.map(() => false));
  }, [events]);
  return (
    <Container >
      <div>
        <Row justify>
          <HppnnLogoBig className="App-logo-title"></HppnnLogoBig>
        </Row>
        <Row justify>
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
              //const stTime = moment(event.start_time);
              const dur = event.duration;
              //let endTime = new Moment(stTime, 'HH:mm:ss');//.add(dur, 'hours');
              //var endTime2 = new Moment(stTime, 'DD-MM-YYYY').add('month', 1);
              return (
                <div>
                  <Icon.GeoAlt />
                  <Marker
                    longitude={event.geo_location.coordinates[1]}
                    latitude={event.geo_location.coordinates[0]}
                    anchor="top"
                  >
                    <Icon.GeoAlt
                      onClick={() => {
                        const newShow = [...show];
                        newShow[index] = true;
                        setShow(newShow);
                      }}
                    />

                    <Toast
                      onClose={() => {
                        const newShow = [...show];
                        newShow[index] = false;
                        setShow(newShow);
                      }}
                      show={show[index]}
                    >
                      <Toast.Header>
                        <HppnnLogo className="App-logo-marker" />
                        <strong className="mr-auto">{event.name}</strong>
                        <small>
                          <Moment format="MMM DD" date={event.start_time} />
                          &nbsp;{" "}
                        </small>
                      </Toast.Header>
                      <Toast.Body>
                        <Carousel
                          align="center"
                          style={{
                            color: "white",
                            backgroundColor: "Gray",
                            padding: ".5px",
                            width: "100%",
                          }}
                        >
                          {" "}
                          <Carousel.Item style={{ height: "150px" }}>
                            <Image
                              src={event.image_source}
                              alt="For Event"
                              style={{ height: "100%" }}
                              rounded
                            />
                            <Carousel.Caption align="center">
                              <div>
                                <Card.Subtitle className="mb-2 text">
                                  {event.description}
                                </Card.Subtitle>
                                <Card.Text className="mb-2 text">
                                  {event.city}
                                </Card.Text>
                              </div>
                            </Carousel.Caption>
                          </Carousel.Item>
                          <Carousel.Item
                            style={{
                              color: "white",
                              backgroundColor: "Gray",
                              padding: ".5px",
                              width: "100%",
                              height: 150,
                            }}
                          >
                            <Carousel.Caption align="center">
                              <div>
                                <Card.Text className="mb-2 text">
                                  <h5>
                                    <Moment
                                      format="MMM DD"
                                      date={event.start_time}
                                    />
                                    &nbsp;{" "}
                                  </h5>
                                  <h5>
                                    <Moment
                                      format="hh:mm"
                                      date={event.start_time}
                                    />{" "}
                                    to{" "}
                                    <Moment
                                      format="hh:mm"
                                      date={event.start_time}
                                      add={{ hours: dur }}
                                    />{" "}
                                  </h5>
                                  <p>
                                    Limited to :&nbsp;&nbsp;
                                    {event.attendee_limit}
                                  </p>
                                </Card.Text>
                              </div>
                            </Carousel.Caption>
                          </Carousel.Item>
                        </Carousel>
                        <Button
                          onClick={() => alert("need to implement")}
                          alignment="center"
                        >
                          Add Event
                        </Button>
                      </Toast.Body>
                    </Toast>
                  </Marker>
                </div>
              );
            })}
        </ReactMapGL>
        </Row>
      </div>
      <br />
     
    </Container>
  );
};
export default MapEventsPage;
