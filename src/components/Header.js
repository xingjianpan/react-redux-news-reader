import React, { Component } from "react";
import  {Link } from 'react-router';

class Header extends Component {
  render() {
    return (
      <nav className="navbar navbar-light">
        <Link to="/" className="navbar-brand">主页</Link>
        <ul className="nav navbar-nav">
          <li className="nav-item">
            <Link className="nav-link" to="/topics">分类</Link>
          </li>

        </ul>
      </nav>
    );
  }
}


export default Header;
