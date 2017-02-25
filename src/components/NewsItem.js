import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router';
import { fetchNewsItem } from '../actions';
import ScrollToTopOnMount from './ScrollToTopOnMount';

class NewsItem extends Component {
  componentDidMount() {
    this.props.fetchNewsItem(this.props.params.newsId);
  }

  componentDidUpdate(prevProps) {
    // respond to parameter change in scenario 3
    const oldId = prevProps.params.newsId;
    const newId = this.props.params.newsId;
    if (newId !== oldId)
      { this.props.fetchNewsItem(newId)};
  }


  handleButtonClick() {
    this.props.fetchNewsItem(Number(this.props.params.newsId) + 1);
  }
  render() {
    const news = this.props.news;
    if (this.props.hasErrored) {
      return <p>Sorry! There was an error loading the items</p>;
    }
    if (this.props.isLoading) {
      return <p>Loading…</p>;
    }
    return (
      <div>
        <ScrollToTopOnMount />
        <div>
          <Link to={`/news/${Number(news.id) + 1}`}>上一条</Link>
          {'      '}
          <Link to={`/news/${Number(news.id) - 1}`}>下一条</Link>
        </div>
        <p />
        <a href={news.url}><h2>{news.title}</h2></a>
        <p><span>日期:</span>{news.create_date.substring(0, 10)}</p>
        <p><span>话题:</span>{news.category}</p>
        <p><span>来源:</span>{news.source}</p>
        <div dangerouslySetInnerHTML={{ __html: news.content_dirty }} />
        <Link to={`/news/${Number(news.id) + 1}`}>上一条</Link>
        {'      '}
        <Link to={`/news/${Number(news.id) - 1}`}>下一条</Link>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  const { isLoading, news, hasErrored } = state.newsItem;
  // console.log(news)
  return {
    isLoading,
    news,
    hasErrored,
  };
};


export default connect(mapStateToProps, { fetchNewsItem })(NewsItem);
