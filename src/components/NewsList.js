import React, { Component } from 'react';
import { connect } from 'react-redux';
// relative import
import { fetchNewsList } from '../actions';

class NewsList extends Component {
  componentDidMount() {
    this.props.fetchNewsList();
    // console.log('props', this.props)
  }

  componentWillReceiveProps(nextProps) {
    // console.log('next props', nextProps)
  }

  renderNewsItem(newsItem) {
    // console.log(newsItem)
    return (

      <li key={newsItem.id}>
        {newsItem.title}
      </li>
    );
  }

  renderNewsList() {

  }

  render() {
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
  const { isLoading, newsList } = state.news;
  return {
    isLoading,
    newsList,
  };
};

export default connect(mapStateToPros, { fetchNewsList })(NewsList);
