import styled from "styled-components";
import Heading from "../../components/Heading";
import StarRating from "../../components/StarRating";
import SpinnerMini from "../../components/SpinnerMini";
import Button from "../../components/Button";
import { HiOutlinePencilSquare } from "react-icons/hi2";
import { useReviews } from "../../context/ReviewsContext";
import { useUser } from "../authentication/useUser";
import { useParams } from "react-router-dom";
import { useInsertReview } from "./useInsertReview";
import { useState } from "react";
function ReviewForm({ onCloseModal }) {
  const { user, isAuthenticated } = useUser();
  const { insertReview, isLoading } = useInsertReview();
  const { productId } = useParams();
  const userId = user.id;
  const userName = user.user_metadata.fullName;
  const { starsRating, setStarsRating, comment, setComment } = useReviews();
  const newReview = {
    productId,
    rating: starsRating,
    comment,
    userId,
    userName,
  };

  function handleAddReview(e) {
    e.preventDefault();
    insertReview(newReview);
    onCloseModal();
  }
  return (
    <StyledWriteReviw>
      <Heading as="h3">Write A Review</Heading>
      <HorizontalBar />
      <div>
        <StarRating reting={starsRating} setRating={setStarsRating} />
      </div>
      <StyledCommentContainer onChange={(e) => setComment(e.target.value)}>
        <Heading as="h5">Comment</Heading>
        <StyledTextArea type="text" placeholder="write a commint .." />
      </StyledCommentContainer>
      <StyledOptionsButton>
        <Button onClick={onCloseModal} variation="secondary">
          Cancle
        </Button>
        <Button onClick={handleAddReview} variation="primary" size="small">
          {isLoading ? <SpinnerMini /> : "Add Review"}
        </Button>
      </StyledOptionsButton>
    </StyledWriteReviw>
  );
}

export default ReviewForm;
const HorizontalBar = styled.div`
  display: flex;
  /* min-width: 230px; */
  /* padding-left: 15px;
  margin-left: 15px; */
  position: absolute;
  top: 7rem;
  border-bottom: 2px solid var(--color-grey-300);
  text-align: left;
  width: 200px;
`;
const StyledWriteReviw = styled.div`
  display: flex;
  flex-direction: column;
  gap: 3rem;
  align-items: flex-start;
  justify-content: center;
  width: 100%;
`;
const StyledCommentContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
`;
const StyledTextArea = styled.textarea`
  width: 170px;
  height: 100px;
  text-align: start;
  font-size: small;
  resize: none;
  border: 1px solid var(--color-grey-300);
  border-radius: 1rem;
  outline: none;
`;
const StyledOptionsButton = styled.div`
  display: flex;
  gap: 3rem;
`;
