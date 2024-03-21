import React from "react";
import Container from "@mui/material/Container";
import CssBaseline from "@mui/material/CssBaseline";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";

const Shipping = () => {
  return (
    <Container sx={{ py: { xs: 16 } }} maxWidth="xs">
      <CssBaseline />
      <Typography
        component="h4"
        variant="h4"
        color="text.primary"
        sx={{ mb: 2 }}
      >
        Shipping
      </Typography>

      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <Box component="form" noValidate sx={{ mt: 1 }}>
          <TextField
            margin="normal"
            required
            fullWidth
            id="address"
            label="Address"
            name="address"
            autoComplete="address"
            autoFocus
          />
          <TextField
            margin="normal"
            required
            fullWidth
            name="city"
            label="City"
            // type="password"
            id="city"
            //autoComplete="current-password"
          />
          <TextField
            margin="normal"
            required
            fullWidth
            name="postalcode"
            label="Postal Code"
            // type="password"
            id="postalcode"
            //autoComplete="current-password"
          />
          <TextField
            margin="normal"
            required
            fullWidth
            name="country"
            label="Country"
            // type="password"
            id="country"
            //autoComplete="current-password"
          />

          <Button
            type="submit"
            fullWidth
            variant="contained"
            sx={{ mt: 3, mb: 2 }}
          >
            Continue
          </Button>
        </Box>
      </Box>
    </Container>
  );
};

export default Shipping;
