import React from "react";
import Container from "@mui/material/Container";
import Grid from "@mui/system/Unstable_Grid/Grid";
import { useGetBlogsQuery } from "../../slices/blogsApiSlice";

const BlogPosts = () => {
  const { data: blogs } = useGetBlogsQuery();
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
        }}
      >
        <Grid container sx={{ display: "flex ", justifyContent: "center" }}>
          <Grid item>
            {blogs?.map((blog) => (
              <p key={blog.id}>{blog.title}</p>
            ))}
          </Grid>

          <Grid item></Grid>
        </Grid>
      </Container>
    </>
  );
};

export default BlogPosts;
