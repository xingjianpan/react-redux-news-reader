import { combineReducers } from 'redux';
import NewsListReducer from './NewsListReducer';

const rootReducer = combineReducers({
  newsList: NewsListReducer,
});

export default rootReducer;
