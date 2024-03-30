import { createSlice, createAsyncThunk, nanoid } from "@reduxjs/toolkit";
import axios from "axios";
const POST_URL = "https://jsonplaceholder.typicode.com/posts";

const initialState = {
  posts: [],
  status: "idle",
  error: null,
};

export const fetchPosts = createAsyncThunk("users/fetchPosts", async () => {
  const response = await axios.get("/api/posts");
  return response.data;
});

const postsSlice = createSlice({
  name: "posts",
  initialState,
  reducers: {
    postAdded: {
      reducer(state, action) {
        state.posts.push(action.payload);
      },
      prepare(title, content, userId) {
        return {
          payload: {
            id: nanoid(),
            title,
            content,
            date: new Date().toISOString(),
            userId,
            user: userId,
          },
        };
      },
    },

    postUpdated(state, action) {
      const { id, title, content } = action.payload;
      const existingPost = state.posts.find((post) => post.id === id);
      if (existingPost) {
        existingPost.title = title;
        existingPost.content = content;
      }
    },

    extraReducers(builder) {
      builder
        .addCase(fetchPosts.pending, (state, action) => {
          state.status = "loading";
        })
        .addCase(fetchPosts.fulfilled, (state, action) => {
          state.status = "succeeded";
          // Add any fetched posts to the array
          const loadedPosts = action.payload.map((post) => {
            return post;
          });

          state.posts = state.posts.concat(loadedPosts);
        })
        .addCase(fetchPosts.rejected, (state, action) => {
          state.status = "failed";
          state.error = action.error.message;
        });
    },
  },
});

export const selectAllPosts = (state) => state.posts.posts;
export const getPostStatus = (state) => state.posts.status;
export const getPostError = (state) => state.posts.error;
export const selectPostById = (state, postId) =>
  state.posts.posts.find((post) => post.id === postId);

export const { postAdded, postUpdated, reactionAdded } = postsSlice.actions;

export default postsSlice.reducer;
