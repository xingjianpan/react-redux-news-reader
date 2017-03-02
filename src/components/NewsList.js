import React, { Component } from 'react';
import { connect } from 'react-redux';
// relative import
import { fetchNewsList, resetNewsList } from '../actions';
import NewsItemLink from './NewsItemLink';

const NEWS_LIST_URL = 'http://123.56.168.1:8080/api/news/';

class NewsList extends Component {
  componentDidMount() {
    this.props.fetchNewsList(NEWS_LIST_URL);
    // console.log('props', this.props)
  }

  componentWillUnmount() {
    this.props.resetNewsList();
  }

  fetchMore() {
    this.props.fetchNewsList(this.props.next);
  }

  renderNewsItem(newsItem) {
    // console.log(newsItem);
    return (
      <NewsItemLink
        key={newsItem.id}
        link={newsItem.link}
        title={newsItem.title}
        category={newsItem.category}
      />
    );
  }

  renderButton() {
    if (this.props.next) {
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
          {this.props.newsList.map(item => this.renderNewsItem(item)) }
        </div>
        <div>
          {this.renderButton()}
        </div>
      </div>

    );
  }
}

const mapStateToPros = (state) => {
  const { isLoading, newsList, hasErrored, next, previous } = state.newsList;
  // console.log(newsList)
  return {
    isLoading,
    newsList,
    hasErrored,
    next,
    previous,
  };
};

export default connect(mapStateToPros,
  { fetchNewsList, resetNewsList })(NewsList);
