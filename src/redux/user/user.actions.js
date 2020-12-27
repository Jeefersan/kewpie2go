import UserActionTypes from './user.types';
import { login, logout } from '../../services/authentication-service';
import {
  setUserDropdownHidden,
  setLoginHidden,
} from '../../redux/header/header.actions';

export const loginStart = () => ({
  type: UserActionTypes.LOG_IN_START,
});

export const loginStartAsync = (credentials) => {
  return async (dispatch) => {
    dispatch(loginStart());
    await login(credentials)
      .then((response) => {
        console.log(response);
        dispatch(loginSuccess());
        dispatch(setCurrentUser(response));
      })
      .catch((e) => {
        console.log(e.message);
        dispatch(loginFailure('Your username/password is incorrect'));
      });
  };
};

export const loginSuccess = () => ({
  type: UserActionTypes.LOG_IN_SUCCESS,
});

export const loginFailure = (message) => ({
  type: UserActionTypes.LOG_IN_FAILURE,
  payload: message,
});

export const setCurrentUser = (user) => ({
  type: UserActionTypes.SET_CURRENT_USER,
  payload: user,
});

export const logoutAsync = () => ({
  type: UserActionTypes.LOG_OUT_START,
});

export const logoutStartAsync = () => {
  return async (dispatch) => {
    dispatch(logoutAsync());
    await logout().then(() => {
      dispatch(logoutSuccess());
      dispatch(setUserDropdownHidden());
      dispatch(setLoginHidden());
    });
  };
};

export const logoutSuccess = () => ({
  type: UserActionTypes.LOG_OUT_SUCCESS,
});
