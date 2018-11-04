import axios from 'axios';

const GOT_USER = 'GOT_USER';

// const gotUser = user => ({ type: GOT_USER, user });

export const attemptLogin = (credentials) => async dispatch => {
  const response = await axios.post('/api/sessions', credentials)
  const token = response.data;
  console.log(token);
}