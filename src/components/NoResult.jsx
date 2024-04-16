import styled from "styled-components";
import Heading from "./Heading";
import Button from "./Button";
import { useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";

function NoResult() {
  const navigate = useNavigate();
  const { t } = useTranslation();

  return (
    <StyledContainer>
      <Heading as="h2">{t("No Results Found")}</Heading>
      <Heading as="h4">
        {t("Sorry, we couldn't find any products matching your search.")}
      </Heading>
      <Button onClick={() => navigate(-1)}>{t("back")}</Button>
    </StyledContainer>
  );
}

export default NoResult;
const StyledContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 30rem;
  gap: 1rem;
`;
