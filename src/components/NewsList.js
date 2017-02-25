import React, { Component } from 'react';
import { connect } from 'react-redux';
// relative import
import { fetchNewsList } from '../actions';
import { Link } from 'react-router';

const NEWS_LIST_URL = 'http://localhost:8888/api/news/';

class NewsList extends Component {
  componentDidMount() {
    this.props.fetchNewsList(NEWS_LIST_URL);
    // console.log('props', this.props)
  }

  renderNewsItem(newsItem) {
    // console.log(newsItem)
    return (

      <li key={newsItem.id}>
         <Link to={newsItem.link}> {newsItem.title}</Link>
         <span>   {newsItem.category}</span>
      </li>
    );
  }

  fetchMore() {
    this.props.fetchNewsList(this.props.newsList.next);
  }

  renderButton() {
    const newsList = this.props.newsList;
    if (newsList.next) {
      return <button onClick={this.fetchMore.bind(this)}>More</button>;
    }
    return <p>No more news</p>;
  }

  render() {
    if (this.props.hasErrored) {
        return <p>Sorry! There was an error loading the items</p>;
    }
    if (this.props.isLoading) {
      return <p>Loading…</p>;
    }
    return (
      <div>
        <ul>
          {this.props.newsList.results.map(item => this.renderNewsItem(item)) }
        </ul>
        <div>
          {this.renderButton()}
        </div>
      </div>

    );
  }
}

const mapStateToPros = (state) => {
  const { isLoading, newsList, hasErrored } = state.newsList;
  console.log(newsList)
  return {
    isLoading,
    newsList,
    hasErrored,
  };
};

export default connect(mapStateToPros, { fetchNewsList })(NewsList);
