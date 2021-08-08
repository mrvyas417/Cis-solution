import React from 'react';
import logo from '../img/CIS orange.png'

const Nav =()=>{
    return(

        <>
        			<nav className="navbar navbar-expand-lg navbar-light ">
  <div className="container-fluid">
    <a className="navbar-brand" href="#">
    	<span className="span_header_text"></span> 
    	<img src={logo} className="img-fluid"/>
    </a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav ml-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <a className="nav-link active" aria-current="page" href="#">Home</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#about_id">about</a>
        </li>
         <li className="nav-item">
          <a className="nav-link" href="#service">services</a>
        </li> <li className="nav-item">
          <a className="nav-link" href="student.html">Student pannel</a>
        </li> <li className="nav-item">
          <a className="nav-link" href="#contactid">contact</a>
        </li>
      
      </ul>
     
    </div>
  </div>
</nav> 

        </>
    );
}
export default Nav;