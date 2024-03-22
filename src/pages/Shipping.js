import React from "react";
import Container from "@mui/material/Container";
import CssBaseline from "@mui/material/CssBaseline";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import Step from "@mui/material/Step";
import StepLabel from "@mui/material/StepLabel";
import Stepper from "@mui/material/Stepper";

const steps = ["Shipping", "Payment", "Order"];

const Shipping = () => {
  return (
    <Container sx={{ py: { xs: 14 } }} maxWidth="xs">
      <CssBaseline />

      {/* Stepper */}

      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          mb: 4,
          //alignItems: "flex-end",
          //flexGrow: 1,
          // height: 150,
        }}
      >
        <Stepper
          id="desktop-stepper"
          // activeStep={activeStep}
          sx={{
            width: "100%",
            height: 10,
          }}
        >
          {steps.map((label) => (
            <Step
              sx={{
                ":first-child": { pl: 0 },
                ":last-child": { pr: 0 },
              }}
              key={label}
            >
              <StepLabel>{label}</StepLabel>
            </Step>
          ))}
        </Stepper>
      </Box>

      {/* Page Header */}

      <Typography
        component="h4"
        variant="h4"
        color="text.primary"
        //sx={{ mb: 1 }}
      >
        Shipping
      </Typography>

      {/* Form */}

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
            href="/payment"
          >
            Continue
          </Button>
        </Box>
      </Box>
    </Container>
  );
};

export default Shipping;
