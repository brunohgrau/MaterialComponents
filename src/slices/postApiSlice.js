import { POSTS_URL } from "../constants.js";
import { apiSlice } from "./apiSlice";

export const postApiSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getPosts: builder.query({
      query: () => POSTS_URL,
      providesTags: ["Post"],
    }),

    /* 
    
    postAdded: {
      reducer(state, action) {
        state.push(action.payload)
      },
      prepare(title, content) {
        return {
          payload: {
            id: nanoid(),
            title,
            content
          }
        }
      }
    } 

    postUpdated(state, action) {
      const { id, title, content } = action.payload
      const existingPost = state.find(post => post.id === id)
      if (existingPost) {
        existingPost.title = title
        existingPost.content = content
      }
    }

     reactionAdded(state, action) {
      const { postId, reaction } = action.payload
      const existingPost = state.find(post => post.id === postId)
      if (existingPost) {
        existingPost.reactions[reaction]++
      }
    }



  */

    getPost: builder.query({
      query: (postId) => ({
        url: `${POSTS_URL}/${postId}`,
      }),
      keepUnusedDataFor: 5,
    }),
    addNewPost: builder.mutation({
      query: (initialPost) => ({
        url: POSTS_URL,
        method: "POST",
        // Include the entire post object as the body of the request
        body: initialPost,
      }),
      invalidatesTags: ["Post"],
    }),
  }),
});

export const { useGetPostsQuery, useGetPostQuery, useAddNewPostMutation } =
  postApiSlice;
