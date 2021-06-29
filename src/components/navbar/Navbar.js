import React from "react";
import { Link } from "react-router-dom";
import  './navbar.css'
import logo from '../../images/logo.png'

function Navbar() {
  return (
    <nav class="navbar navbar-expand-lg navbar-light bg-white">
      <div class="container">
      <img   src={logo} className="logo" />  <span className="fw-bold mx-2">
      Lilo Group
      </span>
        <button
          class="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse  navbar-collapse" id="navbarNav">
          <ul class="navbar-nav  ms-auto fs-5">
             <li class="nav-item">
                      <Link to="/"   className="nav-link  p-2"  > Home</Link> 
            </li>
            <li class="nav-item">
                      <Link to="/ourservice"   className="nav-link  p-2"  >   Our Service</Link> 
            </li>
            <li class="nav-item">
                 <Link to="/about"   className="nav-link   p-2"  >    About Us</Link> 
            </li>
            <li class="nav-item">
               <Link to="/contact"   className="nav-link   p-2"  >           Contact Us</Link> 
            </li>
            <li class="nav-item">
          
             <Link to="/register"   className="nav-link  p-2"  >  Register</Link> 
          </li>
          <li class="nav-item">
     

               <Link to="/login"   className="nav-link Active login p-2"  >  Login</Link> 
        </li>
 

    {       /*   
      <a class="nav-link" href="#">
            Register
            </a>
               <a class="nav-link" href="#">
              About Us
              </a>
                 <a class="nav-link" href="#">
              Contact Us
              </a>
                <a class="nav-link active" aria-current="page" href="#">
              Our Service
              </a>
       <a class="nav-link Active login p-2" href="#"  style={{ color: "white" }}>
          Login
          </a>
   */}                               
       

      
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
