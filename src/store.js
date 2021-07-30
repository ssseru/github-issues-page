import { createStore, compose, applyMiddleware, combineReducers } from "redux";
import thunk from "redux-thunk";
import { fetchIssuesReducer } from "./reducers/issueReducer";
import { fetchCounter } from "./reducers/counterReducer";
const initialState = {};
const middleware = [thunk];
const reducer = combineReducers({
  listOfIssues: fetchIssuesReducer,
  fetchCounter: fetchCounter,
});
const store = createStore(
  reducer,
  initialState,
  compose(
    applyMiddleware(...middleware),
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  )
);
export default store;
