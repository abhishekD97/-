import React from "react";
import MenuIcon from '@material-ui/icons/Menu';
import Button from '@material-ui/core/Button';

function Header(){
    return (
        <nav className="navbar navbar-expand-lg navbar-light fixed-top">
  <div className="container-fluid mx-1 my-1">
    <a className="navbar-brand text-dark" href="#">Navbar</a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <MenuIcon style={{ fontSize: 25, padding:"0px" }}/>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav ml-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <a className="nav-link" aria-current="page" href="#">Home</a>
        </li>
        <li className="nav-item ml-2">
          <a className="nav-link" href="#">Services</a>
        </li>
        <li className="nav-item ml-2">
          <a className="nav-link" href="#">About</a>
        </li>
        <li className="nav-item ml-2">
          <a className="nav-link" href="#">Contact</a>
        </li>
      </ul>
    </div>
  </div>
        </nav>
    );
}

export default Header;