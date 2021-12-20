import { Container, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import CustomerReview from "../../Dashboard/CustomerReview/CustomerReview";

const HomeReviews = () => {
  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    fetch("https://apartment-cardinal.herokuapp.com/reviews")
      .then((res) => res.json())
      .then((data) => setReviews(data));
  }, []);
  console.log(reviews);
  return (
    <Container>
      <Typography
        style={{ color: "white" }}
        sx={{ mt: 7 }}
        variant="h4"
        gutterBottom
        component="div"
      >
        Customer Reviews
      </Typography>
      {reviews.map((propertyReview) => (
        <CustomerReview
          key={propertyReview._id}
          propertyReview={propertyReview}
        ></CustomerReview>
      ))}
    </Container>
  );
};

export default HomeReviews;
