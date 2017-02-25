import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchNewsItem } from '../actions';

class NewsItem extends Component {
  componentDidMount() {
    this.props.fetchNewsItem(this.props.params.newsId);
  }

  render() {
    const news = this.props.news;
    return (
      <div>
        <a href={news.url}><h2>{news.title}</h2></a>
        <div dangerouslySetInnerHTML={{ __html: news.content_dirty }} />
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  const { isLoading, news, hasErrored } = state.newsItem;
  return {
    isLoading,
    news,
    hasErrored,
  };
};


export default connect(mapStateToProps, { fetchNewsItem })(NewsItem);
