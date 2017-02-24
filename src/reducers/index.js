import { combineReducers } from 'redux';
import NewsListReducer from './NewsListReducer';
import NewsItemReducer from './NewsItemReducer';

const rootReducer = combineReducers({
  newsList: NewsListReducer,
  newsItem: NewsItemReducer,
});

export default rootReducer;
