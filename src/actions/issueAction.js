import { FETCH_ISSEUES } from "../constants/issueConstants";

export const fetchIssues = (page) => async (dispatch) => {
  // console.log("In issues action");
  const uri =
    "https://api.github.com/repos/facebook/create-react-app/issues?page=" +
    page;
  console.log("fetched page", page, "from github repo create-react-app");
  fetch(uri, {
    headers: {
      Accept: "application/vnd.github.v3+json",
    },
  })
    .then((response) => response.json()) //Converting the response to a JSON object
    // .then((res) => console.log(res))
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
