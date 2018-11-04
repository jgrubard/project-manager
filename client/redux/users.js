import axios from 'axios';

const FETCH_USERS = 'FETCH_USERS';

const fetchUsers = users => ({ type: FETCH_USERS, users });

export const fetchUsersFromServer = () => {
  // console.log('pre-dispatch');
  return dispatch => {
    // console.log('pre-axios');
    return axios.get('/api/users')
      .then(res => {
        // console.log('res.data', res.data)
        return res.data
      })
      .then(users => dispatch(fetchUsers(users)))
      .catch(err => console.log(err));
      // try {
        // console.log('try');
        // const response = await axios.get('/api/users');
        // console.log(response);
        // const users = response.data;
        // console.log(users);
        // dispatch(fetchUsers(users));
      // } catch(err) {
        // console.log('catch');
        // console.log(err);
      // }
  }
}

const store = (state = [], action) => {
  switch (action.type) {
    case FETCH_USERS:
      // console.log('case hit');
      return action.users;
    default:
      // console.log('case not hit')
      return state;
  }
}

export default store;