// https://medium.com/@stowball/a-dummys-guide-to-redux-and-thunk-in-react-d8904a7005d3#.kcdd1ivn5

import {
  NEWS_LIST_IS_LOADING,
  FETCH_NEWS_LIST_SUCCESS,
  FETCH_NEWS_LIST_FAILED,
  SET_VISIBILITY_FILTERS,
  RESET_NEWS_LIST,
  SET_IGNORE_LAST_FETCH,
} from '../actions/types';

const INITIAL_STATE = {
  isLoading: true,
  newsList: [],
  hasErrored: false,
  filters: [],
  nextHref: null,
  prevHref: null,
  hasMoreNews: true,
  ignoreLastFetch: null,
};


export default (state = INITIAL_STATE, action) => {
  // console.log('action: ', action);
  switch (action.type) {
    case NEWS_LIST_IS_LOADING:
      return { ...state, isLoading: true };
    case FETCH_NEWS_LIST_SUCCESS:
      return { ...state,
        newsList: action.payload.data.results,
        isLoading: false,
        nextHref: action.payload.data.next,
        prevHref: action.payload.data.previous,
        ignoreLastFetch: false,
      };
    case FETCH_NEWS_LIST_FAILED:
      return { ...state, hasErrored: true };
    case SET_VISIBILITY_FILTERS:
      return { ...state, filter: action.payload };
    case RESET_NEWS_LIST:
      return INITIAL_STATE;
    case SET_IGNORE_LAST_FETCH:
      return { ...state, ignoreLastFetch: true };
    default:
      return state;
  }
};
