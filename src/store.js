import { configureStore } from "@reduxjs/toolkit";
import postsReducer from "./slices/postsSlices";

export default configureStore({
  reducer: {
    posts: postsReducer,
  },
});
