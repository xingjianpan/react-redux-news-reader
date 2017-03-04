// https://medium.com/@stowball/a-dummys-guide-to-redux-and-thunk-in-react-d8904a7005d3#.kcdd1ivn5

import {
  ADD_FILTER,
  REMOVE_KEYWORD_FROM_FILTER,
} from '../actions/types';

const INITIAL_STATE = {
  filters: [],
};


export default (state = INITIAL_STATE, action) => {
  // console.log('action: ', action);
  switch (action.type) {
    case ADD_FILTER:
      return { ...state, filters: [...state.filters, action.payload] };
    case REMOVE_KEYWORD_FROM_FILTER:
      return { ...state, filters: state.filters.filter(element => element !== action.payload)};
    default:
      return state;
  }
};
