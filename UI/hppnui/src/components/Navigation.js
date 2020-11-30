import React from 'react';
 
import { NavLink } from 'react-router-dom';
import Nav from 'react-bootstrap/Nav'
import * as Icon from 'react-bootstrap-icons';
 
const Navigation = () => {
    return (
        <div>
        <div>
              <Nav fill variant="tabs" defaultActiveKey="/home" bg="dark" >
   <Nav.Item>
    <Nav.Link to="/UserPage" ><Icon.House/>UserPage</Nav.Link>
   </Nav.Item>
   </Nav>
        </div>
       <div>
          <NavLink to="../App">Home</NavLink>
          <NavLink to="/UserPage">UserPage</NavLink> 
          <NavLink to="/MapPage">Map</NavLink>

       </div>
       </div>
    );
}
 
export default Navigation;