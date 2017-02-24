import axios from 'axios';
import {
  NEWS_LIST_IS_LOADING,
  FETCH_NEWS_LIST_SUCCESS,

} from './types';

const NEWS_LIST_URL = 'http://localhost:8888/api/news/';


export const newsListIsLoading = (bool) => {
  return {
    type: NEWS_LIST_IS_LOADING,
    payload: bool,
  };
};

export const fetchNewsList = (url) => {
  return (dispatch) => {
    dispatch(newsListIsLoading(true));

    axios.get(NEWS_LIST_URL)
      .then(response => dispatch(fetchNewsListSuccess(response)))
      .catch();
  };
};

export const fetchNewsListSuccess = (response) => {
  // console.log(response)
  return {
    type: FETCH_NEWS_LIST_SUCCESS,
    payload: response,
  };
};
