// https://medium.com/@stowball/a-dummys-guide-to-redux-and-thunk-in-react-d8904a7005d3#.kcdd1ivn5

import {
  NEWS_LIST_IS_LOADING,
  FETCH_NEWS_LIST_SUCCESS,
  FETCH_NEWS_LIST_FAILED,
} from '../actions/types';

const INITIAL_STATE = {
  isLoading: true,
  newsList: [],
  hasErrored: false,
};


export default (state = INITIAL_STATE, action) => {
  console.log('action: ', action);
  switch (action.type) {
    case NEWS_LIST_IS_LOADING:
      return { ...state, isLoading: true };
    case FETCH_NEWS_LIST_SUCCESS:
      return { ...state, newsList: action.payload.data, isLoading: false };
    case FETCH_NEWS_LIST_FAILED:
      return { ...state, hasErrored: true };
    default:
      return state;
  }
};
