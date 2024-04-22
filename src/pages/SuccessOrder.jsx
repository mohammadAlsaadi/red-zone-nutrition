import styled from "styled-components";
import Button from "../components/Button";

import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router-dom";

function SuccessOrder() {
  const { t } = useTranslation();
  const navigate = useNavigate();

  return (
    <Container>
      <StyledSuccessOrder>
        <HeaderContainer>
          <StyledHeader>{t("Payment Submitted Successfully")} </StyledHeader>
          <img
            src="https://spzjbqxdghtmflngjxqg.supabase.co/storage/v1/object/public/services-images/checkIcon.png"
            alt="checkIcon"
            width={40}
            height={40}
          />
        </HeaderContainer>

        <Paragraph>{t("Thank you for choosing us!")}</Paragraph>
        <Paragraph>
          {t("Your order has been processed successfully.")}
        </Paragraph>
        <StyledButtons>
          <Button
            size="tallerHerzontally"
            variation="primary"
            onClick={() => navigate("/orders")}
          >
            {t("See orders")}
          </Button>
          <Button
            size="tallerHerzontally"
            variation="secondary"
            onClick={() => navigate("/home")}
          >
            {t("Back to home")}
          </Button>
        </StyledButtons>
      </StyledSuccessOrder>
    </Container>
  );
}

export default SuccessOrder;

const Container = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: var(--color-grey-0);
  padding: 5rem 10rem;
  @media (max-width: 700px) {
    padding: 1rem;
  }
`;

const StyledSuccessOrder = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 3rem;
  width: 90%;
  height: 60%;
  padding: 3rem 7rem;
  background-color: var(--color-grey-50);
  border: 1px solid var(--color-grey-300);
  border-radius: 16px;
  @media (max-width: 700px) {
    width: 100%;
    padding: 3rem;
  }
`;

const HeaderContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 1rem;
`;
const StyledHeader = styled.p`
  font-size: medium;
  font-weight: bold;
  @media (max-width: 600px) {
    font-size: 12px;
  }
`;
const Paragraph = styled.p`
  font-size: 16px;
  line-height: 1.5;
  color: var(--color-grey-600);
  margin-top: 1rem;
  @media (max-width: 600px) {
    font-size: x-small;
    font-weight: 600;
  }
`;

const StyledButtons = styled.div`
  display: flex;
  flex-direction: column;
  padding-top: 5rem;
  width: 60%;
  height: 200px;
  @media (max-width: 850px) {
    width: 100%;
    height: 150px;
  }
`;
