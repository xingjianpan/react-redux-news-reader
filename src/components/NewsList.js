import React, { Component } from 'react';
import { connect } from 'react-redux';
// relative import
import { fetchNewsList } from '../actions';

class NewsList extends Component {

  componentDidMount() {
    this.props.fetchNewsList();
  }

  render() {
    return (
      <div>
        My News List
      </div>
    );
  }
}

const mapStateToPros = ({ newsList }) => {
  return {
    newsList,
  };
};

export default connect(mapStateToPros, { fetchNewsList })(NewsList);
