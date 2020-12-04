import React, { useState, useEffect, Component } from "react";
import api from "../services/api";

import Card from "react-bootstrap/Card";
import InputGroup from "react-bootstrap/InputGroup";
import FormControl from "react-bootstrap/FormControl";
import Form from "react-bootstrap/Form";
import Container from "react-bootstrap/Container";
import Button from "react-bootstrap/Button";
import HppnnLogo from "../HppnnLogo";

import "bootstrap/dist/css/bootstrap.min.css";

const MapPage = () => {
  const [searchTerm, setSearchTerm] = React.useState("");
  const [users, setUsers] =  useState(null)
  const handleChange = event => {
    setSearchTerm(event.target.value);
  };

  const results = !searchTerm
    ? users
    : users.filter(user =>
        user.user_name.toLowerCase().includes(searchTerm.toLocaleLowerCase())
      );

    const getUsers = async () => {
      const response = await api.service('users').find({});
      setUsers(response.data);
    };
  

    //   const getUsers = async () => {
    //   const response = await api.service("users").find(
    //     { 
    //       // query: 
    //       // {user_name: 
    //       //     {
    //       //       $like: `%${this.state.val}%`
    //       //     }
    //       // }
    //     }
    //     );
    //   setUsers(response.data);
      
    // };
  
    useEffect(() => {
      //getEvents();
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
        
          {results && results.map(item => (
            <Card >
                     <Card.Header as="h5">
                       <HppnnLogo className="App-logo" /> {item.user_name}
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
      
      </Container>



        // {this.state.users &&
        //   this.state.users.map((user) => {
        //     const uname = user.user_name;
  
        //     return (
        //       <Card style={{ width: "18rem" }}>
        //         <Card.Header as="h5">
        //           <HppnnLogo className="App-logo" /> {uname}
        //         </Card.Header>
        //         <Card.Body>
        //           <Card.Subtitle className="mb-2 text-muted">
        //             {user.name}
        //           </Card.Subtitle>
        //           <Card.Text>{user.bio}</Card.Text>
        //           <Card.Link href="#">Add Friend</Card.Link>
        //         </Card.Body>
        //       </Card>
        //     );
        //   })}
        
      


        
      );
    
  
  // const [name, setName] = useState("");
  
  // const handleSubmit = (evt) => {
  //     evt.preventDefault();
  //     alert(`Submitting Name ${name}`)
  // }
  // const [users, setUsers] = useState(null);

};
export default MapPage;
