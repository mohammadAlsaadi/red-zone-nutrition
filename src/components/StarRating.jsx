import React from "react";
import styled from "styled-components";
import { Rating } from "react-simple-star-rating";

const StarRatingWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  pointer-events: ${(props) => props.readable && "none"};
`;

function StarRating({ rating, setRating, readable, size = 20 }) {
  const handleRating = (rate) => {
    setRating(rate);
  };

  return (
    <StarRatingWrapper readable={readable}>
      <Rating
        size={size}
        onClick={handleRating}
        disableFillHover={true}
        initialValue={rating}
      />
    </StarRatingWrapper>
  );
}

export default StarRating;
