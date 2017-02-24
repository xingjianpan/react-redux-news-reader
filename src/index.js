import React from 'react';
import ReactDOM from 'react-dom';
import reduxThunk from 'redux-thunk'
import ReduxPromise from 'redux-promise'
import { Provider } from 'react-redux';
import {Router, Route, IndexRoute, browserHistory} from 'react-router'
import { createStore, applyMiddleware } from 'redux';
import Feature from './components/Feature';
import App from './components/app';
import NewsList from './components/NewsList';
import reducers from './reducers';

const createStoreWithMiddleware = applyMiddleware(ReduxPromise, reduxThunk)(createStore);
const store = createStoreWithMiddleware(
  reducers,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
  );



ReactDOM.render(
  <Provider store={store}>
    <Router history={browserHistory}>
      <Route path="/" component={App}>
        <IndexRoute component={NewsList}/>
        <Route path="/feature" component={Feature} />
      </Route>
    </Router>
  </Provider>
  , document.querySelector('.container'));
