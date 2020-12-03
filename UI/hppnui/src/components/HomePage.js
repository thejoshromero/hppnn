import React, { useState, useEffect } from "react";
import api from "../services/api";

import ListGroup from "react-bootstrap/ListGroup";
import Container from "react-bootstrap/Container";


const HomePage = () => {

    const [events, setEvents] = useState(null);
    const [events2, setEvents2] = useState(null);
    const getEvents = async () => {
        const response = await api.service("events").find({query: { id: 1 } });
        setEvents(response.data);
      };
      const getEvents2 = async () => {
        const response = await api.service("events").find({query: { id: 2 } });
        setEvents2(response.data);
      };

      useEffect(() => {
        getEvents();
        getEvents2();
        // getUsers();
      }, []);

    return (
       <Container>
           <h2>Your Events</h2>
<ListGroup>
{events &&
            events.map((event, index) => {
              return (
                <ListGroup.Item>
                 
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
                <ListGroup.Item>
                 
                    {event.name}
                  
                  </ListGroup.Item>
              );
            })}
</ListGroup>

       </Container>
    );
}
 
export default HomePage;