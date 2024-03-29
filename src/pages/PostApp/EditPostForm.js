import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { postUpdated, selectPostById } from "../../slices/postsSlices";
import Container from "@mui/material/Container";
import Grid from "@mui/system/Unstable_Grid/Grid";

const EditPostForm = () => {
  const { postId } = useParams();

  const post = useSelector((state) => selectPostById(state, postId));

  const [title, setTitle] = useState(post.title);
  const [content, setContent] = useState(post.content);

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const onTitleChanged = (e) => setTitle(e.target.value);
  const onContentChanged = (e) => setContent(e.target.value);

  const onSavePostClicked = () => {
    if (title && content) {
      dispatch(postUpdated({ id: postId, title, content }));
      navigate(`/posts/${postId}`);
    }
  };

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
                  value={title}
                  onChange={onTitleChanged}
                />
                <label htmlFor="postContent">Content:</label>
                <textarea
                  id="postContent"
                  name="postContent"
                  value={content}
                  onChange={onContentChanged}
                />
              </form>
              <button type="button" onClick={onSavePostClicked}>
                Save Post
              </button>
            </section>
          </Grid>
        </Grid>
      </Container>
    </>
  );
};

export default EditPostForm;
