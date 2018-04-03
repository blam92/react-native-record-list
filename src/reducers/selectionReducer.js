export default (state = 0, action) => {
  switch (action.type) {
    case 'CHANGE_SELECTED':
      return action.selectedId;
    default:
      return state;
  }
};
