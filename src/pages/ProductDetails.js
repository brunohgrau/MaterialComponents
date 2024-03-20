import React from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Card from "@mui/material/Card";
import Chip from "@mui/material/Chip";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Link from "@mui/material/Link";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import DeleteIcon from "@mui/icons-material/Delete";
import ArrowBackOutlinedIcon from "@mui/icons-material/ArrowBackOutlined";
import ImageList from "@mui/material/ImageList";
import ImageListItem from "@mui/material/ImageListItem";

const ProductDetails = () => {
  return (
    <Container id="product-details" sx={{ py: { xs: 16 } }}>
      <Button
        variant="contained"
        startIcon={<ArrowBackOutlinedIcon />}
        href="/"
      >
        Back
      </Button>
      <Grid container spacing={1}>
        <Grid item xs={12} md={4} sx={{ mt: 5 }}>
          <img
            src="../../images/airpods.jpg"
            alt="airpods"
            style={{ width: "350px", height: "300px" }} // Or use Material-UI styles
          />
          {/*<Box sx={{ height: 140 }}>
          <img src="../../images/airpods.jpg" alt="airpods" />
          </Box>*/}
        </Grid>
        <Grid item xs={12} md={5} sx={{ mt: 5 }}>
          <Typography> Product Detail Card</Typography>
        </Grid>
        <Grid item xs={12} md={3} sx={{ mt: 5 }}>
          <Typography> Add to Cart Card</Typography>
        </Grid>
      </Grid>
      <Grid container spacing={1}>
        <Grid item xs={12} md={5} sx={{ mt: 5 }}>
          <Typography>Reviews</Typography>
        </Grid>
      </Grid>
    </Container>
  );
};

export default ProductDetails;
