import "./App.css";
import MapPage from "./components/MapPage";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Error from "./components/Error";

import { Link } from "react-router-dom";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";

import * as Icon from "react-bootstrap-icons";
import Container from "react-bootstrap/Container";
import UserPage from "./components/UserPage";
import HomePage from "./components/HomePage";
import MapEventsPage from "./components/MapEventsPage";
import HppnnLogo from './HppnnLogo';
function App() {
  return (
    <Container fluid>
      <BrowserRouter>
        <Switch>
          <Route path="/UserPage" component={UserPage} />
          <Route path="/HomePage" component={HomePage} />
          <Route path="/MapPage" component={MapPage} />
          <Route path="/MapEventsPage" component={MapEventsPage} />
          <Route component={Error} />
        </Switch>

        <Navbar justify bg="dark" variant="dark" fixed="bottom">
        <Navbar.Brand href="/HomePage">
        
        </Navbar.Brand>
          <Nav justify style={{ width: "100%" }}>
            <Nav.Item>
              <Link to="/HomePage" className="nav-link">
              <HppnnLogo className="App-logo-small"/>
              </Link>
            </Nav.Item>
            <Nav.Item>
              <Link to="/MapEventsPage" className="nav-link">
                <Icon.GeoAlt />
              </Link> 
            </Nav.Item>
            <Nav.Item>
              <Link to="/MapPage" className="nav-link">
                <Icon.Search />
              </Link>
            </Nav.Item>
            <Nav.Item>
              <Link to="/UserPage" className="nav-link">
                <Icon.PersonCircle />
              </Link>
            </Nav.Item>
          </Nav>
        </Navbar>
      </BrowserRouter>
    </Container>
  );
}
export default App;
