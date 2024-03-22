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
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormControl from "@mui/material/FormControl";
import FormLabel from "@mui/material/FormLabel";
import ArrowBackOutlinedIcon from "@mui/icons-material/ArrowBackOutlined";
import Grid from "@mui/material/Grid";

const steps = ["Shipping", "Payment", "Order"];

const PlaceOrder = () => {
  return (
    <Container sx={{ py: { xs: 14 } }}>
      <CssBaseline />
      {/* <Button
        variant="contained"
        startIcon={<ArrowBackOutlinedIcon />}
        href="/payment"
      >
        Back
      </Button> */}
      {/* Stepper */}
      <Container spacing={1} maxWidth="xs">
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
      </Container>
      <Grid container>
        {/* Product Detail Card */}
        <Grid item xs={12} md={2}>
          <Box></Box>
        </Grid>
        <Grid item xs={12} md={4} sx={{ mt: 5 }}>
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              alignItems: "left",
            }}
          >
            <Typography variant="h6" component="div" color="text.primary">
              Shipping
            </Typography>
            <Typography
              variant="body2"
              component="div"
              color="text.primary"
              sx={{ mt: 2 }}
            >
              Address: Avenida 123
            </Typography>
          </Box>
        </Grid>
      </Grid>
    </Container>
  );
};

export default PlaceOrder;
