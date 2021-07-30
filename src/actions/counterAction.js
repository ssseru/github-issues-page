import {
  INCREMENT_FORK,
  INCREMENT_WATCH,
  INCREMENT_STAR,
} from "../constants/counterConstants";

export const incrementFork = () => async (dispatch) => {
  dispatch({ type: INCREMENT_FORK });
};
export const incrementWatch = () => async (dispatch) => {
  dispatch({ type: INCREMENT_WATCH });
};
export const incrementStar = () => async (dispatch) => {
  dispatch({ type: INCREMENT_STAR });
};
