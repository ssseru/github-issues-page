import { FETCH_ISSEUES } from "../constants/issueConstants";
const initialState = {
  issues: [],
};
export const fetchIssuesReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_ISSEUES:
      return { ...state, issues: [...action.payload] };
    default:
      return state;
  }
};
