import { useReducer, useState } from "react";
import { ACTION_TYPES } from "./PostActiontypes";
import { INITIAL_STATE, postReducer } from "./PostReducer"

const Post = () => {
    const [state, dispatch] = useReducer(postReducer, INITIAL_STATE);

  const handleFetch = () => {
    dispatch({ type: ACTION_TYPES.FETCH_START });
    fetch("")
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        dispatch({ type: ACTION_TYPES.FETCH_SUCCESS, payload: data });
      })
      .catch((err) => {
        dispatch({ type: ACTION_TYPES.FETCH_ERROR });
      });
  };

  return (
    <div>
    <button onClick={handleFetch}>
      {state.loading ? "Wait..." : "Fetch the post"}
    </button>
    <p>{state.post?.title}</p>
    <span>{state.error && "Something went wrong!"}</span>
  </div>
);
};

export default Post;