import { Container, Typography } from "@mui/material";
import React from "react";

const CustomerReview = ({ propertyReview }) => {
  const { displayName, review } = propertyReview;
  return (
    <Container
      style={{ color: "white" }}
      sx={{ m: 2, border: "2px solid gray", borderRadius: "5px", p: 2 }}
    >
      <Typography
        style={{ fontSize: 20 }}
        sx={{ display: "flex", justifyContent: "center" }}
        variant="subtitle1"
        gutterBottom
        component="div"
      >
        {displayName}
      </Typography>
      <Typography
        style={{ color: "grey", fontFamily: "cursive" }}
        sx={{ display: "flex", justifyContent: "center" }}
        variant="caption"
        display="block"
        gutterBottom
      >
        {review}
      </Typography>
    </Container>
  );
};

export default CustomerReview;
