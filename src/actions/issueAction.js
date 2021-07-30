import axios from "axios";
import { FETCH_ISSEUES } from "../constants/issueConstants";

export const fetchIssues = () => async (dispatch) => {
  console.log("In issues action");
  fetch("https://api.github.com/repos/facebook/create-react-app/issues", {
    headers: {
      Accept: "application/vnd.github.v3+json",
    },
  })
    .then((response) => response.json()) //Converting the response to a JSON object
    .then((data) => dispatch({ type: FETCH_ISSEUES, payload: data }))
    .catch((error) => console.error(error));

  // const { data } = await axios.get(
  //   "https://github.com/ssseru/campaignform/issues",
  //   {
  //     headers: { accept: "application/vnd.github.v3+json" },
  //   }
  // );
  // console.log(data);
  // dispatch({ type: FETCH_ISSEUES, payload: {} });
};
