import {
  GET_GIST_FOR_USERS_REQUEST,
  GET_GIST_FOR_USERS_SUCCESS,
  GET_GIST_FOR_USERS_FAILURE,
  GET_GIST_PUBLIC_REQUEST,
  GET_GIST_PUBLIC_SUCCESS,
  GET_GIST_PUBLIC_FAILURE,
  CLEAR_ALL_STATES,
} from "./ActionTypes";

const initialState = {
  //initializing states
  loading: false,
  gistPublicData: [],
  gistForUserData: [],
};
export default function Reducer(state = initialState, action) {
  switch (action.type) {
    // Using switch cases and returning store values 
    case GET_GIST_PUBLIC_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case GET_GIST_PUBLIC_SUCCESS:
      return {
        ...state,
        loading: false,
        gistPublicData: action.payload,
      };
    case GET_GIST_PUBLIC_FAILURE:
      return { ...state, loading: false };

    case GET_GIST_FOR_USERS_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case GET_GIST_FOR_USERS_SUCCESS:
      return {
        ...state,
        loading: false,
        gistForUserData: action.payload,
      };
    case GET_GIST_FOR_USERS_FAILURE:
      return { ...state, loading: false };

    case CLEAR_ALL_STATES:
      return { ...initialState };
    default:
      return state;
  }
}
