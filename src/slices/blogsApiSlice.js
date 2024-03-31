import { BLOGS_URL } from "../constants.js";
import { apiSlice } from "./apiSlice";

export const blogsApiSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getBlogs: builder.query({
      query: () => BLOGS_URL,
    }),
    getBlogDetails: builder.query({
      query: (id) => ({
        url: `${BLOGS_URL}/${id}`,
      }),
      keepUnusedDataFor: 5,
    }),
  }),
});

export const { useGetBlogsQuery, useGetBlogDetailsQuery } = blogsApiSlice;
