import { combineReducers } from 'redux';
import NewsListReducer from './NewsListReducer';

const rootReducer = combineReducers({
  news: NewsListReducer,
});

export default rootReducer;
