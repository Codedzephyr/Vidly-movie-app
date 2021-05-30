import React from 'react';
import {Link} from "react-router-dom";

const Navbar = () =>{
    return (
    <React.Fragment>
    <nav class="navbar navbar-expand-lg navbar-light bg-light">
  <Link className="navbar-brand" to="/">Vidly </Link>
  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>
  <div class="collapse navbar-collapse" id="navbarNav">
    <ul class="navbar-nav">
      <li class="nav-item active">
        <Link className="nav-link" to="/Movies">Movies
         <span class="sr-only">(current)</span></Link>
      </li>
      <li class="nav-item">
        <Link className="nav-link" to="/customers">Customers</Link>
      </li>
      <li class="nav-item">
        <Link className ="nav-link" to = "/rentals">Rentals</Link>
      </li>
    </ul>
  </div>
</nav>
  </React.Fragment>
   );
}

export default Navbar;