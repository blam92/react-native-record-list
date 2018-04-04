import { START_LOADING, FINISH_LOADING } from '../actions/types';

export default (state = false, action) => {
  switch (action.type) {
    case START_LOADING:
      return true;
    case FINISH_LOADING:
      return false;
    default:
      return state;
  }
};
