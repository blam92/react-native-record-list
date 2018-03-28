export default (state = 0, action) => {
  alert(`reducer, ${state}, action: ${JSON.stringify(action)}`);
  switch (action.type) {
    case 'CHANGE_SELECTED':
      return action.selectedId;
    default:
      return state;
  }
};
