import React from 'react';
 
import {  Link } from 'react-router-dom';
import Nav from 'react-bootstrap/Nav'
import Navbar from 'react-bootstrap/Nav'
import * as Icon from 'react-bootstrap-icons';
 
const Navigation = () => {
    return (
     
        <div>
           
              <Navbar fill variant="tabs" defaultActiveKey="/home" bg="dark" fixed="bottom" sticky="bottom">
   <Nav.Item>
    <Link to="/HomePage" className="nav-link"><Icon.House/></Link>
   </Nav.Item>
   <Nav.Item>
    <Link to="/MapEventsPage" className="nav-link"><Icon.GeoAlt/></Link>
   </Nav.Item>
   <Nav.Item>
    <Link to="/MapPage" className="nav-link"><Icon.Search/></Link>
   </Nav.Item>
   <Nav.Item>
    <Link to="/UserPage" className="nav-link"><Icon.PersonCircle/></Link>
   </Nav.Item>
   </Navbar>
        </div>
       


    );
}
 
export default Navigation;