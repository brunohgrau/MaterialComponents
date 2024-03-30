import React from "react";
import PostAuthor from "./PostAuthor";
import TimeAgo from "./TimeAgo";

const PostExcerpt = ({ post }) => {
  return (
    <>
      <article className="post-excerpt" key={post.id}>
        <h3>{post.title}</h3>
      </article>
    </>
  );
};

export default PostExcerpt;
