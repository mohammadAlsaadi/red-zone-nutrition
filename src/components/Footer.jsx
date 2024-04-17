import styled from "styled-components";
import Heading from "./Heading";
import LogoLink from "./LogoLink";
import { HiOutlineEnvelope, HiOutlinePhone } from "react-icons/hi2";
import { useLocation, useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";
const FOOTER_LOGO_REDZONE =
  "https://spzjbqxdghtmflngjxqg.supabase.co/storage/v1/object/public/product-nutrition-facts/logo-redzone.png";
function Footer() {
  const { t } = useTranslation();
  const isContactUsPage = useLocation().pathname === "/contact-us";
  const navigate = useNavigate();
  if (isContactUsPage) return null;

  return (
    <StyledFooter isContactUsPage={isContactUsPage}>
      <StyledContent>
        <StyledLogo
          onClick={() => {
            navigate("/home");
            window.scrollTo(0, 0);
          }}
          src={FOOTER_LOGO_REDZONE}
        />

        <StyledContactUs>
          <StyledHeadind>
            <Heading color="#f3f4f6" as="h5">
              {t("Contact Us")}
            </Heading>
          </StyledHeadind>
          <ContactElement>
            <HiOutlinePhone color="#f3f4f6" />
            <P>+962 7 0000 0000</P>
          </ContactElement>
          <ContactElement>
            <HiOutlineEnvelope color="#f3f4f6" />
            <P>info@xx.com</P>
          </ContactElement>
        </StyledContactUs>
        <StyledStayUpdated>
          <StyledHeadind>
            <Heading color="#f3f4f6" as="h5">
              {t("Stay updated")}
            </Heading>
          </StyledHeadind>
          <LogoLink />
        </StyledStayUpdated>
      </StyledContent>
      <StyledCopyRight>
        <P>Copyright © 2024 dev.Mohammad Alsaadi.</P>
      </StyledCopyRight>
    </StyledFooter>
  );
}

export default Footer;
const StyledFooter = styled.footer`
  width: 100%;
  height: 30%;
  position: relative;
  border-top: 1px solid var(--color-grey-200);

  background-color: var(--color-grey-footer);
`;
const StyledLogo = styled.img`
  width: 20%;
  height: 20%;
  cursor: pointer;
`;
const StyledContent = styled.div`
  display: flex;
  gap: 15rem;
  @media (max-width: 700px) {
    gap: 7rem;
  }
  @media (min-width: 1000px) {
    justify-content: space-between;
    padding: 0rem 10rem;
  }
  align-items: center;
  height: 100%;
`;
const StyledHeadind = styled.div`
  border-bottom: 1px solid var(--color-grey-100);
`;
const StyledContactUs = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
`;
const StyledStayUpdated = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
`;
const ContactElement = styled.div`
  display: flex;
  align-items: center;
  gap: 3px;
  padding-top: 20px;
`;
const P = styled.p`
  font-size: small;
  color: #f3f4f6;
`;
const StyledCopyRight = styled.div`
  width: 100%;
  background-color: var(--color-grey-footer);
  border-top: 1px solid;
  padding: 10px 20px;
`;
