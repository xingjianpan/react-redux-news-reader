import React, { Component } from "react";
import  {Link } from 'react-router';
import FaHome from 'react-icons/lib/fa/home';
import FaSliders from 'react-icons/lib/fa/sliders';
import AboutIcon from 'react-icons/lib/fa/question-circle';

class Header extends Component {
  render() {
    return (
      <nav className="navbar navbar-light">
        <Link to="/" className="navbar-brand"><FaHome /></Link>
        <ul className="nav navbar-nav">
          <li className="nav-item">
            <Link className="nav-link" to="/topics"><FaSliders /></Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/about"><AboutIcon /></Link>
          </li>

        </ul>
      </nav>
    );
  }
}


export default Header;
