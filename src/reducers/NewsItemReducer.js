// https://medium.com/@stowball/a-dummys-guide-to-redux-and-thunk-in-react-d8904a7005d3#.kcdd1ivn5

import {
  NEWS_ITEM_IS_LOADING,
  FETCH_NEWS_ITEM_SUCCESS,
  FETCH_NEWS_ITEM_FAILED,
} from '../actions/types';

const INITIAL_STATE = {
  isLoading: true,
  news: {},
  hasErrored: false,
};


export default (state = INITIAL_STATE, action) => {
  // console.log('action: ', action);
  switch (action.type) {
    case NEWS_ITEM_IS_LOADING:
      return { ...state, isLoading: true };
    case FETCH_NEWS_ITEM_SUCCESS:
      return { ...state, news: action.payload.data, isLoading: false };
    case FETCH_NEWS_ITEM_FAILED:
      return { ...state, hasErrored: true };
    default:
      return state;
  }
};
