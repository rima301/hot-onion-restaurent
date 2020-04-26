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
 
} from "react-router-dom";
import Breakfast from './components/Breakfast/Breakfast';
import Lunch from './components/Lunch/Lunch';
import Dinner from './components/Dinner/Dinner';
import NotFound from './components/NotFound/NotFound';
import Service from './components/Service/Service'
import CheckOutFood from './CheckOutFood/CheckOutFood';
import Cart from './Cart/Cart';
import { useState } from 'react';


function App() {

  // const[carts, setCarts]=useState([])
  // const addToCart=(item, quan)=>{
  //   item.quanTity = quan
  
  //   let exist=carts.filter(i=>i.id===item.id)
  
    
  //   if(exist.length > 0){
  //     exist[0].quanTity=exist[0].quanTity+quan
      
  //   } else {
  //     setCarts([...carts, item])
  //   }
  //   console.log(carts)
  // }

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
           <Route path="/lunch">
            <Lunch></Lunch>
          </Route> 
          <Route path="/dinner">
            <Dinner></Dinner>
          </Route>
          <Route exact path="/">
          <Lunch></Lunch>
          </Route>
          <Route path="/:itemId">
            <FoodDetails ></FoodDetails>
            {/* addToCart={addToCart} */}
          </Route> 
          <Route path="/cart">
          <Cart></Cart>
          </Route>
          <Route path="*">
            <NotFound></NotFound>
          </Route>
      
        </Switch>
          
      </Router>
       <CheckOutFood></CheckOutFood>
       <Cart></Cart>
      <Service></Service>
     
      
    
    </div>
  );
}

export default App;
