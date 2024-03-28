import React from "react";
import Container from "@mui/material/Container";
import Box from "@mui/material/Box";
import PostsList from "../components/PostApp/PostsList";

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
        <Box>
          <PostsList />
        </Box>
      </Container>
    </>
  );
};

export default PostScreen;
