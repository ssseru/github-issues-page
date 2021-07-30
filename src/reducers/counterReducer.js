import {
  INCREMENT_FORK,
  INCREMENT_WATCH,
  INCREMENT_STAR,
} from "../constants/counterConstants";
const initialState = {
  watch: 0,
  star: 0,
  fork: 0,
};
export const fetchCounter = (state = initialState, action) => {
  switch (action.type) {
    case INCREMENT_STAR:
      return { ...state, star: state.star + 1 };
    case INCREMENT_WATCH:
      return { ...state, watch: state.watch + 1 };
    case INCREMENT_FORK:
      return { ...state, fork: state.fork + 1 };
    default:
      return state;
  }
};
