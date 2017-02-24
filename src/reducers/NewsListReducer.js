import {
  NEWS_LIST_IS_LOADING,
  FETCH_NEWS_LIST_SUCCESS,
} from '../actions/types';

const INITIAL_STATE = {
  isLoading: false,
  newsList: [],
};


export default (state = INITIAL_STATE, action) => {
  console.log('action: ', action);
  switch (action.type) {
    case NEWS_LIST_IS_LOADING:
      return { ...state, isLoading: true };
    case FETCH_NEWS_LIST_SUCCESS:
      return { ...state, newsList: action.payload.data.results };
    default:
      return state;
  }
};
