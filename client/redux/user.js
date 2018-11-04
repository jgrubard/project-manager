import axios from 'axios';

const GOT_USER = 'GOT_USER';

const gotUser = user => ({ type: GOT_USER, user });

export const attemptLogin = (credentials) => async dispatch => {
  const response = await axios.post('/api/sessions', credentials)
  const token = response.data;
  window.localStorage.setItem('token', token);
  await dispatch(getUserFromToken(token));
}

export const getUserFromToken = (token) => async dispatch => {
  const response = await axios.get(`/api/sessions/${token}`)
  const user = response.data;
  dispatch(gotUser(user));
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