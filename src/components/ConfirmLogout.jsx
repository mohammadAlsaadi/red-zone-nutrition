import styled from "styled-components";
import Heading from "./Heading";
import { useTranslation } from "react-i18next";
import Button from "./Button";
import { useLogout } from "../featurs/authentication/useLogout";
import SpinnerMini from "./SpinnerMini";

function ConfirmLogout({ onCloseModal, show }) {
  const { t } = useTranslation();
  const { logout, isLogingOut } = useLogout();

  const handleLogout = (e) => {
    e.preventDefault();
    logout();
    show(false);
  };
  return (
    <StyledConfirmLogout>
      <Heading as="h3">{t("Logout")}</Heading>
      <P>{t("Are you sure you want to logout?")}</P>
      <ButtonsContainer>
        <Button
          variation="secondary"
          onClick={() => {
            onCloseModal();
            show(false);
          }}
        >
          {t("cancel")}
        </Button>
        <Button variation="danger" onClick={handleLogout}>
          {isLogingOut ? <SpinnerMini /> : t("Logout")}
        </Button>
      </ButtonsContainer>
    </StyledConfirmLogout>
  );
}

export default ConfirmLogout;
const StyledConfirmLogout = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 90%;
  gap: 2rem;
`;
const P = styled.p`
  font-size: 14px;
  font-weight: 400;
`;
const ButtonsContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  width: 100%;
  gap: 1rem;
`;
