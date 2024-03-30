import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  selectAllPosts,
  fetchPosts,
  getPostStatus,
  getPostError,
} from "../../slices/postsSlices.js";
import PostExcerpt from "./PostExcerpt.js";

const PostsList = () => {
  const dispatch = useDispatch();
  const posts = useSelector(selectAllPosts);
  const postStatus = useSelector(getPostStatus);
  const error = useSelector(getPostError);

  useEffect(() => {
    if (postStatus === "idle") {
      dispatch(fetchPosts());
    }
  }, [postStatus, dispatch]);

  return (
    <>
      <section className="posts-list">
        <h2>Post List</h2>
        {console.log(posts)}
        {posts.map((post) => (
          <h1 key={post.id}>{post.title}</h1>
        ))}
      </section>
    </>
  );
};

export default PostsList;
