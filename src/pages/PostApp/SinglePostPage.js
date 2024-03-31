import React from "react";
import Container from "@mui/material/Container";
import Grid from "@mui/system/Unstable_Grid/Grid";
import { useGetPostQuery } from "../../slices/postApiSlice";
import { useParams } from "react-router-dom";

const SinglePostPage = () => {
  const { postId } = useParams();
  const { data: post, isFetching, isSuccess } = useGetPostQuery(postId);

  let content;
  if (isFetching) {
    content = <h2> Spiner</h2>;
  } else if (isSuccess) {
    content = (
      <article className="post" key={postId}>
        <h2>{post.title}</h2>
        {postId}
      </article>
    );
  }

  return (
    <Container
      fixed
      id="products"
      sx={{
        py: { xs: 16 },
        position: "relative",
        display: "flex",
        flexDirection: "column",
      }}
    >
      <Grid container>
        <Grid item>
          <h2>Single Post</h2>
          {content}
          {postId}
        </Grid>
      </Grid>
    </Container>
  );
};

export default SinglePostPage;
