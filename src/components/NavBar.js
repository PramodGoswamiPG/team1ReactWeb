import React,{useState,useEffect} from "react";
import { useNavigate } from "react-router-dom";

import "react-responsive-carousel/lib/styles/carousel.min.css";

const NavBar=()=>{

    const navigator=useNavigate();


    const clearToken=()=>{
        localStorage.removeItem("USER_TOKEN");
        navigator('/');
    }

    return(
        <nav class="navbar navbar-expand-lg navbar-light bg-dark shadow-1-strong">
           <div class="container-fluid">
  <a class="navbar-brand text-white" href="./NavBar">DMS Home Page</a>
  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>
  <div class="collapse navbar-collapse" id="navbarNav">
    <ul class="navbar-nav">
      <li class="nav-item active">
        <a class="nav-link text-white" href="#">Dashboard <span class="sr-only">(current)</span></a>
      </li>
      
      
      
      <li class="nav-item active">
        <a class="nav-link text-white" href="#">Dealer <span class="sr-only">(current)</span></a>
      </li>

      <li class="nav-item active">
        <a class="nav-link text-white" href="#">Manager <span class="sr-only">(current)</span></a>
      </li>
      <li class="nav-item active">
        <a class="nav-link text-white" href="#">Admin</a>
      </li>
    
</ul>
    <form class="d-flex ml-auto">
    <a class="nav-link text-white mr-4 " href="./login">Login</a>
    <a class="nav-link text-white " href="./registration">Register</a>
    </form>
  </div>
  </div>
</nav>
 
 
    );
  }
  
export default NavBar;