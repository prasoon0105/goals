import React from 'react';
import { createBrowserRouter } from "react-router-dom";

function Navbar() {
  
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light  ">
      <a className="navbar-brand " href=""> SavingGoal</a>
      <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarNav">
        <ul className="navbar-nav">
          <li className="nav-item">
            <a className="nav-link" href="">Show Task</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="">Compare Task</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="">Records</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="">Contact</a>
          </li>
        </ul>
        <ul className="navbar-nav ml-auto"> 
          <li className="nav-item">
            <a className="nav-link" href="">
              <i className="fas fa-bell"></i>
              <span className="badge badge-danger">3</span> 
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
