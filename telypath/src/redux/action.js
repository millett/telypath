import * as api from './api';

export const setThemeDark = () => dispatch => {
 dispatch({
  type: 'SET_THEME_DARK',
 })
}
export const setThemeLight = () => dispatch => {
 dispatch({
  type: 'SET_THEME_LIGHT',
 })
}

export const getCaseList = () => dispatch => {
  const data = api.getCaseList();
  return dispatch({
    type: 'GET_CASE_LIST',
    payload: data
  });
}
