import React, { useState, useEffect } from "react";
import api from "../services/api";

import Card from "react-bootstrap/Card";
import InputGroup from "react-bootstrap/InputGroup";
import FormControl from "react-bootstrap/FormControl";
import Container from "react-bootstrap/Container";
import Button from "react-bootstrap/Button";
import HppnnLogo from "../HppnnLogo";

import "bootstrap/dist/css/bootstrap.min.css";

const MapPage = () => {
  const [users, setUsers] = useState(null);

  const getUsers = async (val) => {
    const response = await api.service("users").find(
      { 
        query: 
        {user_name: 
            {
              $eq: val
            }
        }
      }
      );
    setUsers(response.data);
  };

  useEffect(() => {
    getUsers();
  }, []);

  function handleClick(e) {
    let val = document.getElementById('uInput');
    getUsers(val);
    console.log('The link was clicked.');
  }
  return (

    <Container className="users">
      <InputGroup className="mb-3">
    <InputGroup.Prepend>
      <InputGroup.Text id="basic-addon1">@</InputGroup.Text>
    </InputGroup.Prepend>
    <FormControl 
      id="uInput"
      placeholder="Username"
      aria-label="Username"
      aria-describedby="basic-addon1"
    />
    <Button type="submit"  >Search</Button>
  </InputGroup>

      {users &&
        users.map((user, index) => {
          const uname = user.user_name;

          return (
            <Card style={{ width: "18rem" }}>
              <Card.Header as="h5">
                <HppnnLogo className="App-logo" /> {uname}
              </Card.Header>
              <Card.Body>
                <Card.Subtitle className="mb-2 text-muted">
                  {user.name}
                </Card.Subtitle>
                <Card.Text>{user.bio}</Card.Text>
                <Card.Link href="#">Add Friend</Card.Link>
              </Card.Body>
            </Card>

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
    </Container>
  );
};
export default MapPage;
