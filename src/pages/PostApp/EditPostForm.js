import React, { useState } from "react";

import Container from "@mui/material/Container";
import Grid from "@mui/system/Unstable_Grid/Grid";

const EditPostForm = () => {
  return (
    <>
      <Container>
        <Grid container>
          <Grid item>
            <section>
              <h2>Edit Post</h2>
              <form>
                <label htmlFor="postTitle">Post Title:</label>
                <input
                  type="text"
                  id="postTitle"
                  name="postTitle"
                  placeholder="What's on your mind?"
                />
                <label htmlFor="postContent">Content:</label>
                <textarea id="postContent" name="postContent" />
              </form>
              <button type="button">Save Post</button>
            </section>
          </Grid>
        </Grid>
      </Container>
    </>
  );
};

export default EditPostForm;
