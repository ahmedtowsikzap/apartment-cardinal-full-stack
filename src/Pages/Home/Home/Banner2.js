import React from "react";
import Grid from "@mui/material/Grid";
import { Button, Typography, Container } from "@mui/material";
import { Box } from "@mui/system";
import hand from "../../../../src/images/confused.jpg";
import { Link } from "react-router-dom";

const verticleCenter = {
  display: "flex",
  alignItems: "center",
  height: 355,
};

const Banner2 = () => {
  return (
    <Container sx={{ flexGrow: 1 }}>
      <Grid container spacing={1}>
        <Grid
          sx={{ mb: 5, mt: 10 }}
          style={{ ...verticleCenter, textAlign: "left" }}
          item
          xs={12}
          md={6}
        >
          <img
            style={{ width: "80%", borderRadius: "20px" }}
            src={hand}
            alt=""
          />
        </Grid>
        <Grid
          style={{ ...verticleCenter, textAlign: "left" }}
          xs={12}
          sm={12}
          md={6}
        >
          <Box>
            <Typography style={{ color: "white" }} variant="h3">
              Whats waiting you? <br />
            </Typography>
            <Typography
              variant="h6"
              sx={{ my: 2, fontSize: 12, fontWeight: 300, color: "white" }}
            >
              Sign up & enjoy your deals!
            </Typography>
            <Link to="/register" style={{ textDecoration: "none" }}>
              <Button
                style={{ backgroundColor: "#a43e1c" }}
                variant="contained"
                size="large"
              >
                Register Now!
              </Button>
            </Link>
          </Box>
        </Grid>
      </Grid>
    </Container>
  );
};

export default Banner2;
