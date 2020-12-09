import React, { useState, useEffect } from "react";
import api from "../services/api";

import ListGroup from "react-bootstrap/ListGroup";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import HppnnLogoBig from "../HppnnLogoBig";


const HomePage = () => {

    const [events, setEvents] = useState(null);
    const [events2, setEvents2] = useState(null);
    const getEvents = async () => {
        const response = await api.service("events").find({query: { id: 1 } });
        setEvents(response.data);
      };
      const getEvents2 = async () => {
        const response = await api.service("events").find({query: { id: {$gt: 1} } });
        setEvents2(response.data);
      };

      useEffect(() => {
        getEvents();
        getEvents2();
        // getUsers();
      }, []);

    return (
       <Container fill>
         <Row>
           <Col/>
           <Col>
           <HppnnLogoBig className="App-logo" align="center"/>
           </Col>
           <Col/>
           </Row>
           <h2>Your Events</h2>
<ListGroup>
{events &&
            events.map((event, index) => {
              return (
                <ListGroup.Item action variant="light">
                 
                    {event.name}
                  
                  </ListGroup.Item>
              );
            })}

</ListGroup>
<h2>Local Events</h2>
<ListGroup>
{events2 &&
            events2.map((event, index) => {
              return (
                <ListGroup.Item action variant="light">
                 
                    {event.name}
                  
                  </ListGroup.Item>
              );
            })}
</ListGroup>

       </Container>
    );
}
 
export default HomePage;