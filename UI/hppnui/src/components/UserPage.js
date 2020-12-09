import api from "../services/api";
import React, { useState, useEffect } from "react";
import Image from "react-bootstrap/Image";
import Form from "react-bootstrap/Form";
import Col from "react-bootstrap/Col";
import Card from "react-bootstrap/Card";
import FormControl from "react-bootstrap/FormControl";
import InputGroup from "react-bootstrap/InputGroup";

import Container from "react-bootstrap/Container";
import HppnnLogo from "../HppnnLogo";
import Row from "react-bootstrap/Row";
import HppnnLogoBig from "../HppnnLogoBig";

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
      <Row>
           <Col/>
           <Col>
           <HppnnLogoBig className="App-logo" align="center"/>
           </Col>
           <Col/>
           </Row>
      {users &&
        users.map((user, index) => {
          const uname = user.user_name;
          const uimg = user.image_source;

          return (
            <Form>
              <Card border="secondary">
                <Card.Header align="center">
                  
                  <Image
                    src={uimg}
                    alt="userimg"
                    className="User-Image"
                    roundedCircle
                  />
                </Card.Header>

                <br />
                <Form.Row className="align-items-center">
                  <Col xs="auto" className="my-1">
                    <Form.Label
                      className="mr-sm-2"
                      htmlFor="inlineFormCustomSelect"
                      srOnly
                    >
                      Preference
                    </Form.Label>
                    <Form.Control
                      as="select"
                      className="mr-sm-2"
                      id="inlineFormCustomSelect"
                      custom
                    >
                      <option value="0">Choose...</option>
                      <option value="1">Public</option>
                      <option value="2">Private</option>
                    </Form.Control>
                  </Col>
                  <Col xs="auto" className="my-1">
                    <InputGroup>
                      <InputGroup.Prepend>
                        <InputGroup.Text>@</InputGroup.Text>
                      </InputGroup.Prepend>
                      <FormControl
                        id="inlineFormInputGroupUsername"
                        placeholder={uname}
                      />
                    </InputGroup>
                  </Col>
                </Form.Row>
                <Form.Row className="align-items-center">
                  <Col>
                <Form.Group controlId="formName">
                  <Form.Label>Name:  </Form.Label>
                  &nbsp;
                  <Form.Check inline type="checkbox" label="   Show?"/>
                    
                
                  <Form.Control type="text" placeholder={user.name} />
                </Form.Group>
                </Col>
                </Form.Row>
                <Form.Group controlId="formBio">
                  <Form.Label>Bio:  </Form.Label>
                  &nbsp;
                  <Form.Check inline type="checkbox" label="   Show?"/>
                  <Form.Control type="text" placeholder={user.bio} />
                </Form.Group>
                <Form.Group controlId="formPhone">
                  <Form.Label>Phone Number: </Form.Label>
                  &nbsp;
                  <Form.Check inline type="checkbox" label="   Show?"/>
                  <Form.Control type="phone" placeholder={user.phone_number} />
                </Form.Group>
              </Card>
            </Form>
          );
        })}
    </Container>
  );
};

export default UserPage;
