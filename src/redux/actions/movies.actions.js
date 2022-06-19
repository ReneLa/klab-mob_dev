import axios from "axios";

export const fetchPopularMovies = () => {
  return (dispatch) => {
    const key = "caff9ec5965f31529c1d69befe0ae0b0";

    dispatch({ type: "POP MOVIES FETCHING" });

    axios({
      method: "get",
      url: `https://api.themoviedb.org/3/movie/popular?api_key=${key}`,
    })
      .then((responseData) => {
        const { data } = responseData;
        console.log(responseData);
        dispatch({
          type: "POP MOVIES FETCH SUCCESSFUL",
          payload: data.results,
        });
      })
      .catch((err) => {
        console.log(err);
        dispatch({ type: "POP MOVIES FETCH FAILED", payload: err.message });
      });
  };
};
