import { BLOGS_URL } from "../constants.js";
import { apiSlice } from "./apiSlice";

export const blogsApiSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getBlogs: builder.query({
      query: () => BLOGS_URL,
    }),
  }),
});

export const { useGetBlogsQuery } = blogsApiSlice;
