import React, { useState, useEffect } from "react";
import api from "../services/api";

import Card from "react-bootstrap/Card";
import CardDeck from "react-bootstrap/CardDeck";
import Container from "react-bootstrap/Container";
import HppnnLogo from "../HppnnLogo";

const MapPage = () => {
  const [searchTerm, setSearchTerm] = React.useState("");
  const [users, setUsers] = useState(null);
  const handleChange = (event) => {
    setSearchTerm(event.target.value);
  };

  const results = !searchTerm
    ? users
    : users.filter((user) =>
        user.user_name.toLowerCase().includes(searchTerm.toLocaleLowerCase())
      );

  const getUsers = async () => {
    const response = await api.service("users").find({});
    setUsers(response.data);
  };

  useEffect(() => {
    getUsers();
  }, []);

  return (
    <Container className="App">
      <input
        type="text"
        placeholder="Search"
        value={searchTerm}
        onChange={handleChange}
      />
<CardDeck style={{display: 'flex', flexDirection: 'row'}}>
      {results &&
        results.map((item) => (
          <Card border="primary" style={{flex: 1}}>
            <Card.Header as="h5">
              <HppnnLogo className="App-logo-marker" /> {item.user_name}
              <img src={item.image_source} alt="UserPic" className="App-logo-small"/>
            </Card.Header>
            <Card.Body>
              <Card.Subtitle className="mb-2 text-muted">
                {item.name}
              </Card.Subtitle>
              <Card.Text>{item.bio}</Card.Text>
              <Card.Link href="#">Add Friend</Card.Link>
            </Card.Body>
          </Card>
        ))}
        </CardDeck>
    </Container>
  );
};
export default MapPage;
