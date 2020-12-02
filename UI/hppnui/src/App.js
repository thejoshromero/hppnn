
import './App.css';
import MapPage from './components/MapPage'
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Error from './components/Error';
import Navigation from './components/Navigation';
import Container from 'react-bootstrap/Container'
import UserPage from './components/UserPage';
import HomePage from './components/HomePage';
import MapEventsPage from './components/MapEventsPage'

function App(){ 
  return (
<Container style={{height: '100vh'}}>
 <BrowserRouter > 
 <Navigation/> 
        <div>
      
             <Switch>
             <Route path="/UserPage" component={UserPage}/>
             <Route path="/HomePage" component={HomePage}/>
             <Route path="/MapPage" component={MapPage}/>
             <Route path="/MapEventsPage" component={MapEventsPage}/>
             <Route component={Error}/>
           </Switch> 
        </div> 
      </BrowserRouter> 
    </Container>
)};
export default App;
