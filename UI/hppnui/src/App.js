
import './App.css';
import React, { useState, useEffect } from 'react';
import api from './services/api';
import User from './components/UserPage'
import MapPage from './components/MapPage'
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Error from './components/Error';
import Navigation from './components/Navigation';

import ReactMapGL, {Marker} from 'react-map-gl';
import Nav from 'react-bootstrap/Nav'
import 'bootstrap/dist/css/bootstrap.min.css';
import * as Icon from 'react-bootstrap-icons';
import UserPage from './components/UserPage';

function App(){ 
 



  return (
    
   
//     <Nav fill variant="tabs" defaultActiveKey="/home" bg="dark" >
//   <Nav.Item>
//     <Nav.Link ><Icon.House/></Nav.Link>
//   </Nav.Item>
//   <Nav.Item>
//     <Nav.Link ><Icon.GeoAlt/></Nav.Link>
//   </Nav.Item>
//   <Nav.Item>
//     <Nav.Link eventKey="link-2"><Icon.Search/></Nav.Link>
//   </Nav.Item>
//   <Nav.Item>
//   <Nav.Link to="/UserPage" >
//     <Icon.PersonCircle/>
//     </Nav.Link>
//   </Nav.Item>
// </Nav>
<div>
 <BrowserRouter>
        <div>
      <Navigation/> 
             <Switch>
             <Route path="/UserPage" component={UserPage} exact/>
             <Route path="/MapPage" component={MapPage} exact/>
            <Route component={Error}/>
           </Switch> 
        </div> 
      </BrowserRouter> 
    </div>
)};
export default App;
