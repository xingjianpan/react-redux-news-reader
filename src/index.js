import React from 'react';
import ReactDOM from 'react-dom';
import reduxThunk from 'redux-thunk';
import ReduxPromise from 'redux-promise';
import { Provider } from 'react-redux';
import { Router, Route, IndexRoute, browserHistory } from 'react-router';
import { createStore, applyMiddleware } from 'redux';
import AddCategoryFilter from './components/AddCategoryFilter';
import App from './components/app';
import About from './components/About';
import NewsList from './components/NewsList';
import NewsItem from './components/NewsItem';
import reducers from './reducers';
import './style.css';

const createStoreWithMiddleware = applyMiddleware(ReduxPromise, reduxThunk)(createStore);
const store = createStoreWithMiddleware(
  reducers,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
  );



ReactDOM.render(
  <Provider store={store}>
    <Router history={browserHistory}>
      <Route path="/" component={App}>
        <IndexRoute component={NewsList} />
        <Route path="/topics" component={AddCategoryFilter} />
        <Route path="/news/:newsId" component={NewsItem} />
        <Route path="/news" component={NewsList} />
        <Route path="/about" component={About} />
      </Route>
    </Router>
  </Provider>
  , document.querySelector('.container'));
