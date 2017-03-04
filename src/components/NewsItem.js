import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link, browserHistory } from 'react-router';
import Loading from 'react-loading';

// icons
import ArrowRight from 'react-icons/lib/fa/arrow-right';
import ArrowLeft from 'react-icons/lib/fa/arrow-left';
import ArrowBack from 'react-icons/lib/fa/step-backward';
import CalendarIcon from 'react-icons/lib/fa/calendar';
import NewsPaperIcon from 'react-icons/lib/fa/newspaper-o';
import BarsIcon from 'react-icons/lib/fa/bars';

// relative
import { fetchNewsItem } from '../actions';
import ScrollToTopOnMount from './ScrollToTopOnMount';


class NewsItem extends Component {
  componentDidMount() {
    this.props.fetchNewsItem(this.props.params.newsId);
  }

  componentDidUpdate(prevProps) {
    const oldId = prevProps.params.newsId;
    const newId = this.props.params.newsId;
    if (newId !== oldId) {
      this.props.fetchNewsItem(newId);
    }
  }
  componentWillUnmount() {
    // this.props.resetNewsList();
    document.title = '小熊新闻'
  }

  renderPageControl() {
    if (typeof window.orientation !== 'undefined') {
      // on mobile
      return (
        <div>
          <span>
            <Link to={`/news/${Number(this.props.news.id) + 1}`}><ArrowLeft /></Link>
          </span>
          <span className="page-control">
            <Link to={`/news/${Number(this.props.news.id) - 1}`}><ArrowRight /></Link>
          </span>
        </div>
      );
    }
    return (
      <div>
        <span>
          <Link to={`/news/${Number(this.props.news.id) + 1}`}><ArrowLeft /></Link>
        </span>
        <span className="page-control">
          <Link to={`/news/${Number(this.props.news.id) - 1}`}><ArrowRight /></Link>
        </span>
        <span className="page-control">
          <a href="#" onClick={browserHistory.goBack}>
            <ArrowBack />
          </a>
        </span>
      </div>
    );
  }
  render() {
    const news = this.props.news;
    if (this.props.hasErrored) {
      return <p>抱歉，读取文章出错，请刷新浏览器后再试试。</p>;
    }
    if (this.props.isLoading) {
      return <Loading type="bars" color="#e3e3e3" />;
    }

    document.title = this.props.news.title;
    return (
      <div>
        <ScrollToTopOnMount />
        {this.renderPageControl()}
        <p />
        <a href={news.url}><h2>{news.title}</h2></a>
        <p><span><CalendarIcon />{' '}</span>{news.create_date.substring(0, 10)}</p>
        <p><span><BarsIcon /> {' '}</span>{news.category}</p>
        <p><span><NewsPaperIcon />{' '}</span>{news.source}</p>
        <div dangerouslySetInnerHTML={{ __html: news.content_dirty }} />


        {this.renderPageControl()}

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
