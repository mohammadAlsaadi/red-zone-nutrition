import styled from "styled-components";
import Heading from "../../components/Heading";
import StarRating from "../../components/StarRating";
import SpinnerMini from "../../components/SpinnerMini";
import Button from "../../components/Button";
import { useReviews } from "../../context/ReviewsContext";
import { useUser } from "../authentication/useUser";
import { useParams } from "react-router-dom";
import { useInsertReview } from "./useInsertReview";
import { useTranslation } from "react-i18next";
function ReviewForm({ onCloseModal }) {
  const { user } = useUser();
  const { insertReview, isLoading } = useInsertReview();
  const { productId } = useParams();
  const userId = user.id;
  const userName = user.user_metadata.fullName;
  const { starsRating, setStarsRating, comment, setComment } = useReviews();
  const { t } = useTranslation();
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
      <Heading as="h3">{t("Write A Review")}</Heading>
      <HorizontalBar />
      <div>
        <StarRating reting={starsRating} setRating={setStarsRating} />
      </div>
      <StyledCommentContainer onChange={(e) => setComment(e.target.value)}>
        <Heading as="h5">{t("Comment")}</Heading>
        <StyledTextArea type="text" placeholder={t("write a comment ..")} />
      </StyledCommentContainer>
      <StyledOptionsButton>
        <Button onClick={onCloseModal} variation="secondary">
          {t("Cancel")}
        </Button>
        <Button onClick={handleAddReview} variation="primary" size="small">
          {isLoading ? <SpinnerMini /> : t("Add Review")}
        </Button>
      </StyledOptionsButton>
    </StyledWriteReviw>
  );
}

export default ReviewForm;
const HorizontalBar = styled.div`
  display: flex;

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
