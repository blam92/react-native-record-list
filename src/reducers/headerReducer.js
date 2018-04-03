export default (state = 'Login', action) => {
  switch (action.type) {
    case 'SHOW_LOGIN':
      return 'Login';
    case 'SHOW_MUSIC':
      return 'Music';
    case 'SHOW_TECHSTACK':
      return 'Techstack';
    default:
      return state;
  }
};
