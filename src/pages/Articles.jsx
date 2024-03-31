import styled from "styled-components";
import Heading from "../components/Heading";
import { useTranslation } from "react-i18next";

function Articles() {
  const { t } = useTranslation();

  return (
    <StyledArticles>
      <StyledHeader>
        <Heading as="h3">{t("Red Zone Articles")}</Heading>
      </StyledHeader>
    </StyledArticles>
  );
}

export default Articles;
const StyledArticles = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
`;
const StyledHeader = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 10px 30px;
`;
