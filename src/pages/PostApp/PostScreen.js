import React from "react";
import Container from "@mui/material/Container";
import PostsList from "../../components/PostApp/PostsList";
import AddPostForm from "../../components/PostApp/AddPostForm";
import Grid from "@mui/system/Unstable_Grid/Grid";

const PostScreen = () => {
  return (
    <>
      <Container
        fixed
        id="products"
        sx={{
          py: { xs: 16 },
          position: "relative",
          display: "flex",
          flexDirection: "column",

          //gap: { xs: 3, sm: 6 },
        }}
      >
        <Grid
          Container
          sx={{ display: "flex ", justifyContent: "space-between" }}
        >
          <Grid item>
            <PostsList />
          </Grid>
          <Grid item>
            <AddPostForm />
          </Grid>
        </Grid>
      </Container>
    </>
  );
};

export default PostScreen;
