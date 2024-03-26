import styled from "styled-components";
import Button from "../../components/Button";
import Modal from "../../components/Modal";
import {
  HiMiniExclamationTriangle,
  HiOutlinePencilSquare,
} from "react-icons/hi2";
import Heading from "../../components/Heading";
import { useUser } from "../authentication/useUser";

import ReviewForm from "./ReviewForm";
import { useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";

function WriteReview({ isUserReviewedBefore, onCloseModal }) {
  const { isAuthenticated } = useUser();
  const { t } = useTranslation();

  const navigate = useNavigate();
  function handleSignin() {
    navigate("/login");
    onCloseModal();
  }

  return (
    <Modal>
      <Modal.Open opens={"write-review"}>
        <Button variation="primary" size="medium">
          <StyledButtonText>
            <Heading as="h5" color="var(--color-grey-50)">
              {t("Write a review")}
            </Heading>
            <HiOutlinePencilSquare size={18} />
          </StyledButtonText>
        </Button>
      </Modal.Open>
      <Modal.Window name={"write-review"}>
        {isAuthenticated && !isUserReviewedBefore ? (
          <ReviewForm />
        ) : isUserReviewedBefore ? (
          <StyledWarningMessage>
            <StyledMessageHeader>
              <HiMiniExclamationTriangle
                size={50}
                color={"var(--color-gold-500)"}
              />
              <Heading as="h2">Warning !!</Heading>
            </StyledMessageHeader>
            <Heading as="h3">You already rated this product!</Heading>
          </StyledWarningMessage>
        ) : (
          <StyledWarningMessage>
            <StyledMessageHeader>
              <HiMiniExclamationTriangle
                size={50}
                color={"var(--color-gold-500)"}
              />
              <Heading as="h2">Warning !!</Heading>
            </StyledMessageHeader>
            <Heading as="h3">Please sign in to can rate this product !</Heading>
            <Button variation="primary" onClick={handleSignin}>
              Sign in
            </Button>
          </StyledWarningMessage>
        )}
      </Modal.Window>
    </Modal>
  );
}

export default WriteReview;

const StyledButtonText = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
  justify-content: center;
`;
const StyledWarningMessage = styled.div`
  display: flex;
  flex-direction: column;
  gap: 5rem;
`;
const StyledMessageHeader = styled.div`
  display: flex;
  gap: 2rem;
`;
