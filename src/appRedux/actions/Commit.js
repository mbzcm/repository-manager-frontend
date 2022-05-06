import {
  FETCH_ERROR,
  FETCH_START,
  FETCH_SUCCESS,
  INIT_URL,
  COMMIT_DATA
} from "../../constants/ActionTypes";
import axios from '../../util/Api';

export const setInitUrl = (url) => {
  return {
    type: INIT_URL,
    payload: url
  };
};


export const getCommits = () => {
  return (dispatch,getState) => {
    dispatch({type: FETCH_START});
    axios.get('/api/commit',
    ).then(({data}) => {
      console.log("getCommits: ", data);
      if (data) {
        dispatch({type: FETCH_SUCCESS });
        dispatch({type: COMMIT_DATA, payload: data.data});
      } else {
        dispatch({type: FETCH_ERROR, payload: data});
      }
    }).catch(function (error) {
      dispatch({type: FETCH_ERROR, payload: error.message});
      console.log("Error****:", error.message);
    });
  }
};


export const ResetStates = (couponCode) => {
  return (dispatch,getState) => {
    dispatch({type: COMMIT_DATA, payload: []});

  }
};



