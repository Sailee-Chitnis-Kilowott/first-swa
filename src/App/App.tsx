import React from 'react';
import Navbar from './Components/Navbar/Navbar';
import DrawerMenu from './Components/SideNavigation/DrawerMenu';
import './App.css';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';

import DashboardMenu from './Components/Dashboard/DashboardMenu';
import AccountMenu from '../AccountMenu';
import Demo from '../AccountMenu';



function App() {
  return (
    <Router>
      <Switch>
      <div className="App">
        <Route exact path="/">
        <Navbar/>
        <DashboardMenu/>
        </Route>
       
       <Route path="/dashboard">
       <Navbar/>
       <DashboardMenu/>
       </Route> 

       <Route path="/customers/accounts">
       <Navbar/> 
       <DrawerMenu/>
       <AccountMenu/>
       </Route>

     
       <Route>
         
       </Route>
  
    </div>
      </Switch>
       
    </Router>
   
    
  );
}

export default App;
