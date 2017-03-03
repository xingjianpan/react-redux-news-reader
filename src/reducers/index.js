import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form'
import NewsListReducer from './NewsListReducer';
import NewsItemReducer from './NewsItemReducer';
import NewsListFilterReducer from './NewsListFilterReducer';

const rootReducer = combineReducers({
  newsList: NewsListReducer,
  newsItem: NewsItemReducer,
  newsListFilter: NewsListFilterReducer,
  form: formReducer,
});

export default rootReducer;
