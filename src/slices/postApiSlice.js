import { POSTS_URL } from "../constants.js";
import { apiSlice } from "./apiSlice";

export const postApiSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getPosts: builder.query({
      query: () => "/fakeApi/posts",
      providesTags: (result = [], error, arg) => [
        "Post",
        ...result.map(({ id }) => ({ type: "Post", id })),
      ],
    }),

    getPost: builder.query({
      query: (postId) => ({
        url: `/fakeApi/posts/${postId}`,
        providesTags: (result, error, arg) => [{ type: "Post", id: "LIST" }],
      }),
    }),
    addNewPost: builder.mutation({
      query: (initialPost) => ({
        url: "/fakeApi/posts",
        method: "POST",
        // Include the entire post object as the body of the request
        body: initialPost,
      }),
      invalidatesTags: ["Post"],
    }),
    editPost: builder.mutation({
      query: (post) => ({
        url: `/fakeApi/posts/${post.id}`,
        method: "PATCH",
        body: post,
      }),
      invalidatesTags: (result, error, arg) => [{ type: "Post", id: arg.id }],
    }),
  }),
});

export const {
  useGetPostsQuery,
  useGetPostQuery,
  useAddNewPostMutation,
  useEditPostMutation,
} = postApiSlice;
