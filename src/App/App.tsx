import React from 'react';
import Navbar from './Components/Navbar/Navbar';
import './App.css';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import DashboardMenu from './Components/Dashboard/DashboardMenu';
import AccountMenu from '../AccountMenu';

// import EditCustomerAccount from '../EditCustomerAccount';



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
{/* 
       <Route path="/customers/accounts">
       <Navbar/> 
       <DrawerMenu/>
       <AccountMenu/>
       </Route> */}

       <Route path="/customers/accounts">
         <Navbar/>
        <AccountMenu/>
       </Route>

    </div>
      </Switch>
       
    </Router>
   
    
  );
}

export default App;
