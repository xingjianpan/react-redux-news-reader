import React, { Component } from 'react';
import { connect } from 'react-redux';
// relative import
import { fetchNewsList } from '../actions';
import { Link } from 'react-router';

const NEWS_LIST_URL = 'http://123.56.168.1:8080/api/news/';

class NewsList extends Component {
  componentDidMount() {
    this.props.fetchNewsList(NEWS_LIST_URL);
    // console.log('props', this.props)
  }

  renderNewsItem(newsItem) {
    // console.log(newsItem)
    return (
      <Link
        className="list-group-item list-group-item-action"
        to={newsItem.link}
        key={newsItem.id}
      >
        <span className="categoryName">{newsItem.category}</span>
        {'     '}
        {newsItem.title}
      </Link>
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
        <div>
          {this.props.newsList.results.map(item => this.renderNewsItem(item)) }
        </div>
        <div>
          {this.renderButton()}
        </div>
      </div>

    );
  }
}

const mapStateToPros = (state) => {
  const { isLoading, newsList, hasErrored } = state.newsList;
  // console.log(newsList)
  return {
    isLoading,
    newsList,
    hasErrored,
  };
};

export default connect(mapStateToPros, { fetchNewsList })(NewsList);
