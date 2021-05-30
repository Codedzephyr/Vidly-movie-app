import Movies from './Components/Movies';
import React, {Component} from 'react';
import {Redirect, Route,Switch} from "react-router-dom";
import Customers from "./Components/customers";
import Rentals from "./Components/rentals";
import NotFound from "./Components/not-found";
import './App.css';
import MovieForm from "./Components/movieform";
import Navbar from './Components/common/navbar';

class App extends Component{
  render(){
    return (
      <React.Fragment>
      <Navbar/>
      <main className = "container">
        <Switch>
          <Route path = "/movies/:id" component = {MovieForm}></Route>
          <Route path="/movies" component={Movies}></Route>
          <Route path="/customers" component={Customers}></Route>
          <Route path="/rentals" component={Rentals}></Route>
          <Route path="/not-found" component={NotFound}></Route>
          <Redirect from = "/" exact to ="/movies"/>
          <Redirect to = "/not-found"/>
        </Switch>
        </main>
        </React.Fragment>
    );
  }
}

export default App;
