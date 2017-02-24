import React, { Component } from 'react';
import { connect } from 'react-redux';
// relative import
import { fetchNewsList } from '../actions';
import {Link} from 'react-router';

class NewsList extends Component {
  componentDidMount() {
    this.props.fetchNewsList();
    // console.log('props', this.props)
  }

  componentWillReceiveProps(nextProps) {
    console.log('next props', nextProps)
  }

  renderNewsItem(newsItem) {
    // console.log(newsItem)
    return (

      <li key={newsItem.id}>
         <Link to={newsItem.link}> {newsItem.title}</Link>
      </li>
    );
  }

  render() {
    if (this.props.hasErrored) {
        return <p>Sorry! There was an error loading the items</p>;
    }
    if (this.props.isLoading) {
      return <p>Loading…</p>;
    }
    return (
      <ul>
        {this.props.newsList.results.map(item => this.renderNewsItem(item)) }
      </ul>
    );

  }

}

const mapStateToPros = (state) => {
  const { isLoading, newsList, hasErrored } = state.newsList;
  return {
    isLoading,
    newsList,
    hasErrored,
  };
};

export default connect(mapStateToPros, { fetchNewsList })(NewsList);
