import styled from "styled-components";
import { useTranslation } from "react-i18next";

function SaleBanner() {
  const { t } = useTranslation();
  return (
    <StyledSaleBunner>
      <P>15% {t("off")}</P>
    </StyledSaleBunner>
  );
}

export default SaleBanner;
const StyledSaleBunner = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0.8rem 1.4rem;
  background-color: var(--color-grey-900);
  /* border-top-right-radius: 1px solid var(--color-gold-700); */
  background-color: #070722;
`;
const P = styled.p`
  font-size: x-small;
  color: var(--color-grey-0);
  color: var(--color-gold-500);
`;
