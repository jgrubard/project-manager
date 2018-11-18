import axios from 'axios';

import { FETCH_PROJECTS, CREATE_PROJECT } from './constants';

const fetchProjects = projects => ({ type: FETCH_PROJECTS, projects });
const createProject = project => ({ type: CREATE_PROJECT, project });

export const fetchProjectsFromServer = (userId) => async dispatch => {
  if(!userId) return null;
  try {
    const response = await axios.get(`/api/projects/${userId}`);
    const projects = await response.data;
    await dispatch(fetchProjects(projects));
  } catch(err) {
    console.log('ERROR GETTING PRODUCTS ON CLIENT', err);
  }
}

export const createProjectOnServer = (proj, userId) => async dispatch => {
  console.log(proj, userId)
  try {
    const response = await axios.post(`/api/projects/${userId}`, proj);
    const project = response.data;
    dispatch(createProject(project));
  } catch(err) {
    console.log('ERROR CREATING PROJECT', err);
  }
}

const store = (state = [], action) => {
  switch(action.type) {
    case FETCH_PROJECTS:
      return action.projects;
    case CREATE_PROJECT:
      return [ ...state, action.project ];
    default:
      return state;
  }
}

export default store;