import styled, { keyframes } from "styled-components";
import Heading from "../components/Heading";
import { useTranslation } from "react-i18next";
import { HiMiniLink, HiOutlineEnvelope, HiOutlinePhone } from "react-icons/hi2";
import LogoLink from "../components/LogoLink";

function ContactUs() {
  const { t } = useTranslation();
  return (
    <StyledContactUs>
      <StyledHeader />
      <StyledBody>
        <Heading as="h2" color="var(--color-grey-100)">
          {t("Our branches in Jordan")}
        </Heading>
        <ContactContainer>
          <Heading as="h3" color="var(--color-gold-500)">
            {t("Rabieh Branch")}
          </Heading>
          <LabelValue>
            <Label>{t("Location")} :</Label>
            <Value>{t("Seqeleyah St. 16-20,Rabiah, Amman")}</Value>
          </LabelValue>
          <LabelValue>
            <Label>{t("Location in google maps")} :</Label>
            <Value>
              <A href="https://www.google.com/maps?q=RED+ZONE+NUTRITION+RABIEH+%D8%B1%D9%8A%D8%AF%D8%B2%D9%88%D9%86+%D9%86%D9%8A%D9%88%D8%AA%D8%B1%D9%8A%D8%B4%D9%86+%D8%A7%D9%84%D8%B1%D8%A7%D8%A8%D9%8A%D8%A9,+Seqeleyah+St.+16-20,+Amman&ftid=0x151ca156c4730f3d:0x2feb8aa0c9c1f3f8&hl=en-JO&gl=jo&entry=gps&lucs=,47071704,47069508&g_ep=CAISDDYuODcuMC4xNjY5MBgAINeCAyoSLDQ3MDcxNzA0LDQ3MDY5NTA4QgJKTw%3D%3D&g_st=iw">
                {t("Follow location")} <HiMiniLink />
              </A>
            </Value>
          </LabelValue>
        </ContactContainer>
        <ContactContainer>
          <Heading as="h3" color="var(--color-gold-500)">
            {t("Gardens branch")}
          </Heading>

          <LabelValue>
            <Label>{t("Location")} :</Label>
            <Value>{t("Ayman Ramadan St.,Gardens, Amman")}</Value>
          </LabelValue>
          <LabelValue>
            <Label>{t("Location in google maps")} :</Label>
            <Value>
              <A href="https://www.google.com/maps?q=RED+ZONE+NUTRITION+GARDENZ+%D8%B1%D9%8A%D8%AF+%D8%B2%D9%88%D9%86+%D9%86%D9%8A%D9%88%D8%AA%D8%B1%D9%8A%D8%B4%D9%86+%D8%A7%D9%84%D8%AC%D8%A7%D8%B1%D8%AF%D9%86%D8%B2,+Amman&ftid=0x151ca03cffa78dc5:0x39d5312a417f87&hl=en-JO&gl=jo&entry=gps&lucs=,94216395,47071704,47069508&g_ep=CAISDDYuODcuMC4xNjY5MBgAINeCAyobLDk0MjE2Mzk1LDQ3MDcxNzA0LDQ3MDY5NTA4QgJKTw%3D%3D&g_st=iw">
                {t("Follow location")}
              </A>{" "}
              <HiMiniLink />
            </Value>
          </LabelValue>
        </ContactContainer>

        <Heading as="h2" color="var(--color-grey-100)">
          {t("Contact Us")}
        </Heading>
        <ContactContainer>
          <LabelValue>
            <Label>{t("Email")} :</Label>
            <ContactElement>
              <HiOutlineEnvelope color="var(--color-gold-700)" />
              <Value>info@xx.com</Value>
            </ContactElement>
          </LabelValue>
          <LabelValue>
            <Label>{t("Phone")} :</Label>
            <ContactElement>
              <HiOutlinePhone color="var(--color-gold-700)" />
              <Value>+962 7 0000 0000</Value>
            </ContactElement>
          </LabelValue>
        </ContactContainer>
        <Heading as="h2" color="var(--color-grey-100)">
          {t("Stay updated")}
        </Heading>
        <ContactContainer>
          <LogoLink />
        </ContactContainer>
      </StyledBody>
      <StyledFooter />
    </StyledContactUs>
  );
}

export default ContactUs;
const fadeIn = keyframes`
  from {
    opacity: 0;
    transform: translateY(-20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`;
const StyledContactUs = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  /* gap: 4rem; */
  width: 100%;
  height: 170vh;
  background-color: var(--color-grey-footer);
  animation: ${fadeIn} 1s ease-out;
`;
const StyledHeader = styled.div`
  display: flex;
  padding-top: 15rem;
  width: 100%;
  height: 30vh;
  align-items: center;
  justify-content: center;
  background-image: ${(props) =>
    `linear-gradient(rgba(14, 18, 20, 0.8), rgba(22, 25, 28, 0.8)), url(https://spzjbqxdghtmflngjxqg.supabase.co/storage/v1/object/public/services-images/contact.jpg)`};
  background-size: cover;
  background-position: center;
`;

const StyledBody = styled.div`
  position: relative; /* Required for absolute positioning of overlay */
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  padding: 3rem 6rem;
  gap: 4rem;
  width: 100%;
  /* height: 100%; */
`;
const ContactContainer = styled.div`
  width: 60%;
  height: 100%;
  /* background-color: var(--color-grey-100); */
  display: flex;
  flex-direction: column;
  padding: 1rem;
  border-bottom: 1px solid var(--color-grey-700);
  @media (max-width: 800px) {
    width: 90%;
  }
  &:last-child {
    border-bottom: none;
  }
`;
const LabelValue = styled.div`
  display: flex;
  width: 100%;
  align-items: center;
  justify-content: flex-start;
  gap: 7rem;
  padding: 1rem 4rem;
`;
const Label = styled.p`
  font-size: 16px;
  color: var(--color-grey-50);
  font-weight: 600;
  @media (max-width: 700px) {
    font-size: 12px;
  }
`;
const Value = styled.p`
  font-size: 14px;
  color: var(--color-gold-700);
  font-weight: 400;
  @media (max-width: 700px) {
    font-size: 10px;
  }
`;
const A = styled.a`
  color: var(--color-gold-700);
  font-weight: bold;
  &:hover {
    color: var(--color-gold-500);
  }
`;
const ContactElement = styled.div`
  display: flex;
  align-items: center;
  gap: 6px;
  /* padding-top: 20px; */
`;
const StyledFooter = styled.footer`
  width: 100%;
  height: 30%;
  background-image: ${(props) =>
    `linear-gradient(rgba(14, 18, 20, 0.8), rgba(22, 25, 28, 0.8)), url(https://spzjbqxdghtmflngjxqg.supabase.co/storage/v1/object/public/cover-images/cover6.jpg)`};
  background-size: cover;
  background-position: center;
`;
