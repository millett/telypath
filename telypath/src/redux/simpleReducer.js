export default (state = {isDark: false}, action) => {
 switch (action.type) {
  case 'SET_THEME_DARK':
    return {
      isDark: true,
    };
  case 'SET_THEME_LIGHT':
    return {
      isDark: false,
    };
  default:
   return state
 }
}
