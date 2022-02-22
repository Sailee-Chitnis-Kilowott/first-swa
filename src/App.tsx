import React from 'react';
import Navbar from './Navbar';
import DrawerMenu from './DrawerMenu';
import './App.css';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import Accounts from './AccountMenu';
import DashboardMenu from './DashboardMenu';



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
       <Accounts/>
       </Route>
       
  
    </div>
      </Switch>
       
    </Router>
   
    
  );
}

export default App;
