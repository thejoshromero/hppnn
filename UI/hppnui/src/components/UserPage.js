import api from "../services/api";
import React, { useState, useEffect } from "react";
import Card from "react-bootstrap/Card";
import Form from "react-bootstrap/Form";
import FormControl from "react-bootstrap/FormControl";
import InputGroup from "react-bootstrap/InputGroup";

import Container from "react-bootstrap/Container";
import HppnnLogo from "../HppnnLogo";
const UserPage = () => {
  const [users, setUsers] = useState(null);
  const getUsers = async () => {
    const response = await api.service("users").find({ query: { id: 1 } });
    setUsers(response.data);
  };
  useEffect(() => {
    //getEvents();
    getUsers();
  }, []);

  return (
    <Container fluid="sm">
      {users &&
        users.map((user, index) => {
          const uname = user.user_name;
          const uimg = user.image_source;

          return (
            <Form>
              <Container align="center">
                <HppnnLogo className="App-logo" />{" "}
                <img src={uimg} alt="userimg" className="User-Image" />
              
              </Container>

              <br />
              <InputGroup>
                <InputGroup.Prepend>
                  <InputGroup.Text>@</InputGroup.Text>
                </InputGroup.Prepend>
                <FormControl
                  id="inlineFormInputGroupUsername"
                  placeholder={uname}
                />
              </InputGroup>
              <Form.Group controlId="formName">
                <Form.Label>Name:</Form.Label>
                <Form.Control type="text" placeholder={user.name} />
              </Form.Group>
              <Form.Group controlId="formBio">
                <Form.Label>Bio:</Form.Label>
                <Form.Control type="text" placeholder={user.bio} />
              </Form.Group>
              <Form.Group controlId="formPhone">
                <Form.Label>Phone Number:</Form.Label>
                <Form.Control type="phone" placeholder={user.phone_number} />
              </Form.Group>
            </Form>
          );
        })}
    </Container>
  );
};

export default UserPage;
