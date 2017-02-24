import React, { Component } from "react";
import {Link} from 'react-router';

class Header extends Component {
  render() {
    return (
      <nav className="navbar navbar-light">
        <Link to="/" className="navbar-brand">Home</Link>
        <ul className="nav navbar-nav">
          <li className="nav-item">
            <Link className="nav-link" to="/feature">Feature</Link>
          </li>

        </ul>
      </nav>
    );
  }
}


export default Header;
