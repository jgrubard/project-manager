import axios from 'axios';

const FETCH_USERS = 'FETCH_USERS';

const fetchUsers = users => ({ type: FETCH_USERS, users });

export const fetchUsersFromServer = () => async dispatch => {
  try {
    const response = await axios.get('/api/users');
    const users = response.data;
    dispatch(fetchUsers(users));
  } catch(err) {
    console.log(err);
  }
}

const store = (state = [], action) => {
  switch (action.type) {
    case FETCH_USERS:
      return action.users;
    default:
      return state;
  }
}

export default store;