import * as api from './api';

export const setThemeDark = () => dispatch => {
 dispatch({
  type: 'SET_THEME_DARK',
 })
}

export const getCaseList = (): TAction => ({
  type: 'GET_CASE_LIST',
  payload: api.getCaseList(),
});

export const setThemeLight = () => dispatch => {
 dispatch({
  type: 'SET_THEME_LIGHT',
 })
}
