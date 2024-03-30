import React from "react";
import { useSelector } from "react-redux";
import Container from "@mui/material/Container";
import Grid from "@mui/system/Unstable_Grid/Grid";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import PostAuthor from "../../components/PostApp/PostAuthor";
import { selectPostById } from "../../slices/postsSlices.js";

const SinglePostPage = () => {
  const { postId } = useParams();

  const post = useSelector((state) => selectPostById(state, postId));

  if (!post) {
    return (
      <section>
        <h2>Post not found!</h2>
      </section>
    );
  }

  return (
    <Container
      fixed
      id="products"
      sx={{
        py: { xs: 8 },
        position: "relative",
        display: "flex",
        flexDirection: "column",

        //gap: { xs: 3, sm: 6 },
      }}
    >
      <Grid container>
        <Grid item>
          <article className="post">
            <h2>{post.title}</h2>
            <p className="post-content">{post.content}</p>
            <Link to={`/editPost/${post.id}`} className="button">
              Edit Post
            </Link>
            <PostAuthor userId={post.user} />
          </article>
        </Grid>
      </Grid>
    </Container>
  );
};

export default SinglePostPage;
