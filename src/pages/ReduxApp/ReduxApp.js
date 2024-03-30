import React from "react";
import Container from "@mui/material/Container";
import Grid from "@mui/system/Unstable_Grid/Grid";
import { useGetProductsQuery } from "../../slices/productsApiSlice";

const ReduxApp = () => {
  const { data: products, isLoading, isError } = useGetProductsQuery();

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
        <Grid
          container
          sx={{ display: "flex ", justifyContent: "space-between" }}
        >
          <Grid item>
            <h1> Hello</h1>
            {products?.map((product) => (
              <p key={product.id}>{product.name}</p>
            ))}
          </Grid>
        </Grid>
      </Container>
    </>
  );
};

export default ReduxApp;
