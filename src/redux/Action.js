import {
  CLEAR_ALL_STATES,
  GET_GIST_FOR_USERS_FAILURE,
  GET_GIST_FOR_USERS_REQUEST,
  GET_GIST_FOR_USERS_SUCCESS,
  GET_GIST_PUBLIC_FAILURE,
  GET_GIST_PUBLIC_REQUEST,
  GET_GIST_PUBLIC_SUCCESS,
} from "./ActionTypes";
import { getGistForUser, getPublicGists } from "../services/gistService";

export const getGistPublicAction = () => async (dispatch) => {
  try {
    // dispatching request action
    dispatch(getGistPublicRequest());
    // await for response from API
    let response = await getPublicGists();
    // dispatching success action
    dispatch(getGistPublicSuccess(response?.data));
  } catch (error) {
    // dispatching failure action
    dispatch(getGistPublicFailure(error));
    // Clearing states using clear action
    dispatch(getClearStates());
  }
};

export const getGistForUserAction = (request) => async (dispatch) => {
  try {
    dispatch(getGistForUserRequest());
    let response = await getGistForUser(request);
    dispatch(getGistForUserSuccess(response?.data));
  } catch (error) {
    dispatch(getGistForUserFailure(error));
    dispatch(getClearStates());
  }
};

const getGistForUserRequest = () => {
  // Creating request action for GistForUser API

  return {
    type: GET_GIST_FOR_USERS_REQUEST,
  };
};

const getGistForUserSuccess = (responseData) => {
  // Creating success action for GistForUser API
  return {
    type: GET_GIST_FOR_USERS_SUCCESS,
    payload: responseData,
  };
};

const getGistForUserFailure = (error) => {
  // Creating failure action for GistForUser API

  return {
    type: GET_GIST_FOR_USERS_FAILURE,
    payload: error,
  };
};

const getGistPublicRequest = () => {
  // Creating request action for GistPublic API
  return {
    type: GET_GIST_PUBLIC_REQUEST,
  };
};

const getGistPublicSuccess = (responseDataPublic) => {
  // Creating success action for GistPublic API
  return {
    type: GET_GIST_PUBLIC_SUCCESS,
    payload: responseDataPublic,
  };
};

const getGistPublicFailure = (error) => {
  // Creating failure action for GistPublic API
  return {
    type: GET_GIST_PUBLIC_FAILURE,
    payload: error,
  };
};

const getClearStates = () => {
  // Creating clear states action
  return {
    type: CLEAR_ALL_STATES,
  };
};
