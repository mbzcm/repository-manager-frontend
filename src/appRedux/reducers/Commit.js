import {INIT_URL,COMMIT_DATA, FETCH_ERROR , FETCH_ERROR_UPDATE} from "../../constants/ActionTypes";

const INIT_STATE = {
  initURL: '',

};

export default (state = INIT_STATE, action) => {
  switch (action.type) {


    case INIT_URL: {
      return {...state, initURL: action.payload};
    }

    case COMMIT_DATA: {
      return {
        ...state,
        commits: action.payload,
      };
    }





    case FETCH_ERROR: {
      return {
        ...state,
        couponError: action.payload,
      };
    }

    case FETCH_ERROR_UPDATE: {
      return {
        ...state,
        couponUpdateError: action.payload,
      };
    }



    default:
      return state;
  }
}
