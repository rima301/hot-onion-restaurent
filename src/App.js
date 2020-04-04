import React from 'react';
//import logo from './logo.svg';
import './App.css';
import Header from './components/Header/Header';
import 'bootstrap/dist/css/bootstrap.min.css';
import Banner from './components/Banner/Banner';
import MenuBar from './components/MenuBar/MenuBar';

import FoodDetails from './components/FoodDetails/FoodDetails';



import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Breakfast from './components/Breakfast/Breakfast';
import Lunch from './components/Lunch/Lunch';
import Dinner from './components/Dinner/Dinner';
import NotFound from './components/NotFound/NotFound';
import Service from './components/Service/Service'
import CheckOutFood from './CheckOutFood/CheckOutFood';


function App() {
  return (
    <div>
      <Header></Header>
      <Banner></Banner>
      <MenuBar></MenuBar>


      <Router>
        <Switch>
        <Route path = "/breakfast" >
           <Breakfast></Breakfast>
          </Route>
          {/* <Route path="/lunch">
            <Lunch></Lunch>
          </Route> */}
          <Route path="/dinner">
            <Dinner></Dinner>
          </Route>
          <Route exact path="/">
          <Lunch></Lunch>
          </Route>
          <Route path="/:itemId">
            <FoodDetails></FoodDetails>
          </Route> 
          <Route path="*">
            <NotFound></NotFound>
          </Route>
      
        </Switch>
          
      </Router>
       <CheckOutFood></CheckOutFood>
      <Service></Service>
     
      
    
    </div>
  );
}

export default App;
