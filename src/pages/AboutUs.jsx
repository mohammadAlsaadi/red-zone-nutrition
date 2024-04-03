import React, { useState, useEffect } from "react";
import styled, { keyframes } from "styled-components";
import Heading from "../components/Heading";
import { useTranslation } from "react-i18next";

// Import your Spinner component here
import Spinner from "../components/Spinner";

const AboutUs = () => {
  const { t } = useTranslation();
  const language = window.localStorage.getItem("language");
  const isArLanguage = language === "ar";
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setIsLoading(false);
    }, 1000); // Display the spinner for 2 seconds before setting isLoading to false

    return () => clearTimeout(timeout);
  }, []);

  // If still loading, render Spinner component
  if (isLoading) {
    return <Spinner />;
  }

  return (
    <AboutUsContainer>
      <AboutUsContent>
        <Heading color="var(--color-grey-100)" as="h2">
          {t("About RedZone Nutrition")}
        </Heading>
        <Paragraph isar={isArLanguage}>{t("redZoneP1")}</Paragraph>
        <Paragraph isar={isArLanguage}>{t("redZoneP2")}</Paragraph>
        <Paragraph isar={isArLanguage}>{t("redZoneP3")}</Paragraph>
        <Paragraph isar={isArLanguage}>{t("redZoneP4")}</Paragraph>
      </AboutUsContent>
      <ImageContainer>
        <Image src="https://spzjbqxdghtmflngjxqg.supabase.co/storage/v1/object/public/product-nutrition-facts/redzoneWithoutbg.png" />
      </ImageContainer>
    </AboutUsContainer>
  );
};
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
const AboutUsContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 2rem;
  background-image: url("https://spzjbqxdghtmflngjxqg.supabase.co/storage/v1/object/public/cover-images/redZoneCover.jpg");
  background-size: cover;
  background-position: center;
  height: 100vh;
  animation: ${fadeIn} 1s ease-out;
`;

const AboutUsContent = styled.div`
  max-width: 800px;
  margin-bottom: 2rem;
  text-align: center;
`;

const Paragraph = styled.p`
  padding: 0.4rem 0rem;
  font-size: ${(props) => (props.isar ? "1.6rem" : " 1.3rem")};
  line-height: 2;
  margin-bottom: 1rem;
  color: var(--color-grey-100);
  @media (max-width: 600px) {
    font-size: 1rem;
  }
`;

const ImageContainer = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
`;

const Image = styled.img`
  width: 50%;
  /* border-radius: 8px; */
  height: 100%;
`;

export default AboutUs;
