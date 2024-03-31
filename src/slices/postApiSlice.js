import { POSTS_URL } from "../constants.js";
import { apiSlice } from "./apiSlice";

export const postApiSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getPosts: builder.query({
      query: () => POSTS_URL,
    }),

    getPost: builder.query({
      query: (postId) => ({
        url: `${POSTS_URL}/${postId}`,
      }),
      keepUnusedDataFor: 5,
    }),
  }),
});

export const { useGetPostsQuery, useGetPostQuery } = postApiSlice;
