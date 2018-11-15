import axios from 'axios';

import { GOT_USER } from './constants';
import { addUser } from './users';

const gotUser = user => ({ type: GOT_USER, user });

export const signup = (credentials) => async dispatch => {
  try {
    const response = await axios.post('/api/sessions/signup', credentials)
    const token = response.data;
    window.localStorage.setItem('token', token);
    const user = await dispatch(getUserFromToken(token));
    await dispatch(addUser(user));
  } catch(err) {
    const errors = err.response.data.errors;
    errors.forEach(error => console.log(error.value, '--', error.message));
  }

}

export const attemptLogin = (credentials, history) => async dispatch => {
  console.log(history)
  try {
    const response = await axios.post('/api/sessions/login', credentials)
    const token = response.data;
    window.localStorage.setItem('token', token);
    await dispatch(getUserFromToken(token, history));
  } catch (err) {
    window.localStorage.removeItem('token');
  }
}

export const getUserFromToken = (token, history) => async dispatch => {
  console.log(history)
  const response = await axios.get(`/api/sessions/${token}`)
  const user = response.data;
  await dispatch(gotUser(user));
  if(history) history.push('/projects');
  return user;
}

export const logoutUser = () => dispatch => {
  window.localStorage.removeItem('token');
  dispatch(gotUser({}));
}

const store = (state = {}, action) => {
  switch(action.type) {
    case GOT_USER:
      return action.user;
    default:
      return state;
  }
}

export default store;