import axios from 'axios';
import {
  NEWS_LIST_IS_LOADING,
  FETCH_NEWS_LIST_SUCCESS,
  FETCH_NEWS_LIST_FAILED,
  NEWS_ITEM_IS_LOADING,
  FETCH_NEWS_ITEM_SUCCESS,
  FETCH_NEWS_ITEM_FAILED,
  SET_VISIBILITY_FILTERS,
  RESET_NEWS_LIST,
  SET_IGNORE_LAST_FETCH,
  ADD_FILTER,
  REMOVE_KEYWORD_FROM_FILTER,
} from './types';


const NEWS_LIST_URL = 'https://api.quantnote.cn/api/news/';


export const setIgnoreLastFetch = (bool) => {
  return {
    type: SET_IGNORE_LAST_FETCH,
    payload: bool,
  };
};

export const newsListIsLoading = (bool) => {
  return {
    type: NEWS_LIST_IS_LOADING,
    payload: bool,
  };
};

export const fetchNewsList = (url) => {
  return (dispatch) => {
    dispatch(newsListIsLoading(true));

    axios.get(url)
      .then(response => dispatch(fetchNewsListSuccess(response)))
      .catch(() => dispatch(fetchNewsListFailed(true)));
  };
};


export const fetchNewsListSuccess = (response) => {
  // console.log(response)
  return {
    type: FETCH_NEWS_LIST_SUCCESS,
    payload: response,
  };
};

export const fetchNewsListFailed = (bool) => {
  return {
    type: FETCH_NEWS_LIST_FAILED,
    payload: bool,
  };
};




export const newsItemIsLoading = (bool) => {
  return {
    type: NEWS_ITEM_IS_LOADING,
    payload: bool,
  };
};

export const fetchNewsItem = (id) => {
  return (dispatch) => {
    dispatch(newsItemIsLoading(true));

    axios.get(`${NEWS_LIST_URL}${id}/`)
      .then(response => dispatch(fetchNewsItemSuccess(response)))
      .catch(()=> dispatch(fetchNewsItemFailed(true)));
  };
};

export const fetchNewsItemSuccess = (response) => {
  // console.log(response)
  return {
    type: FETCH_NEWS_ITEM_SUCCESS,
    payload: response,
  };
};

export const fetchNewsItemFailed = (bool) => {
  return {
    type: FETCH_NEWS_ITEM_FAILED,
    payload: bool,
  };
};


export const setVisibilityFilters = (filters) => {
  return {
    type: SET_VISIBILITY_FILTERS,
    payload: filters,
  };
};

export const resetNewsList = () => {
  return {
    type: RESET_NEWS_LIST,
  };
};

export const addFilter = (text) => {
  return {
    type: ADD_FILTER,
    payload: text,
  };
};

export const removeKeywordFromFilter = (text) => {
  return {
    type: REMOVE_KEYWORD_FROM_FILTER,
    payload: text,
  };
};
