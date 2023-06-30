import React,{useState,useEffect} from "react";
import { useNavigate } from "react-router-dom";

const NavBar=()=>{

    const navigator=useNavigate();


    const clearToken=()=>{
        localStorage.removeItem("USER_TOKEN");
        navigator('/');
    }

    return(
        <nav class="navbar navbar-expand-lg navbar-light bg-light">
  <a class="navbar-brand" href="./NavBar">DMS Home Page</a>
  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>
  <div class="collapse navbar-collapse" id="navbarNav">
    <ul class="navbar-nav">
      <li class="nav-item active">
        <a class="nav-link" href="#">Home <span class="sr-only">(current)</span></a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="./login">Sign in</a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="#">Admin</a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="./registration">sign up</a>
      </li>
    </ul>
  </div>
</nav>
    );
}


export default NavBar;