import React, { Component } from 'react';
// relative import
import NewsList from './NewsList';
import Header from './Header';

export default class App extends Component {
  render() {
    return (
      <div>
        <Header />
        {this.props.children}

      </div>
    );
  }
}
