import React, { Component } from 'react';
import { connect } from 'react-redux';
import Loading from 'react-loading';

// icons
import ArrowRight from 'react-icons/lib/fa/angle-double-right';
import ArrowLeft from 'react-icons/lib/fa/angle-double-left';

// relative import
import { fetchNewsList, resetNewsList, setIgnoreLastFetch } from '../actions';
import NewsItemLink from './NewsItemLink';

const NEWS_LIST_URL = 'http://123.56.168.1:8080/api/news/';

class NewsList extends Component {
  componentDidMount() {
    if (!this.props.ignoreLastFetch) {
      this.props.fetchNewsList(NEWS_LIST_URL);
    }
    // console.log('props', this.props)
  }

  componentWillUnmount() {
    // this.props.resetNewsList();
    this.props.setIgnoreLastFetch(true);
  }

  fetchMore(url) {
    this.props.fetchNewsList(url);
  }

  newsCategoryFilter(news) {
    if (this.props.filters.indexOf(news.category) === -1) {
      return true;
    }
    return false;
  }

  newsItemRender() {
    return (
      <div className="list-group">
        {this.props.newsList.filter(item => this.newsCategoryFilter(item)).map(item => this.renderNewsItem(item)) }
      </div>
    );
  }

  renderNewsItem(newsItem) {
    // console.log(newsItem);
    return (
      <NewsItemLink
        key={newsItem.id}
        link={newsItem.link}
        title={newsItem.title}
        category={newsItem.category}
        source={newsItem.source}
      />
    );
  }

  renderButton() {
    if (this.props.nextHref && this.props.prevHref) {
      return (
        <div>
          <span>
            <a href="#" onClick={() => { this.fetchMore(this.props.prevHref); }}>
              <ArrowLeft />
            </a>
          </span>
          <span className="page-control">
            <a href="#" onClick={() => { this.fetchMore(this.props.nextHref); }}>
              <ArrowRight />
            </a>
          </span>
        </div>
      );
    } else if (this.props.nextHref) {
      return <a href="#" onClick={() => { this.fetchMore(this.props.nextHref); }}><ArrowRight /></a>
    }
    return <p>No more news</p>;
  }


  render() {
    if (this.props.hasErrored) {
      return <p>Sorry! There was an error loading the items</p>;
    }
    if (this.props.isLoading) {
      return <Loading type="bars" color="#e3e3e3" />;
    }
    return (
      <div>
        <div>
          {this.renderButton()}
          <p />
        </div>
        <div>
          {this.newsItemRender()}
        </div>
        <div>
          <p />
          {this.renderButton()}
        </div>
      </div>

    );
  }
}

const mapStateToPros = (state) => {
  const { isLoading, newsList, hasErrored,
          nextHref, prevHref, hasMoreNews,
          ignoreLastFetch,
        } = state.newsList;
  const { filters } = state.newsListFilter;
  // console.log(newsList)
  // debugger
  return {
    isLoading,
    newsList,
    hasErrored,
    nextHref,
    prevHref,
    hasMoreNews,
    ignoreLastFetch,
    filters,
  };
};

export default connect(mapStateToPros,
  { fetchNewsList, resetNewsList, setIgnoreLastFetch })(NewsList);
