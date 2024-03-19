import React from "react";
import styled from "styled-components";
import Heading from "../components/Heading";

const AboutUs = () => {
  return (
    <AboutUsContainer>
      <AboutUsContent>
        <Heading color="var(--color-grey-100)" as="h2">
          Welcome to RedZone Nutrition
        </Heading>
        <Paragraph>
          Your ultimate destination for premium supplements tailored to fuel
          your fitness journey. At RedZone, we're dedicated to providing
          top-quality products designed to optimize your performance and support
          your health and wellness goals.
        </Paragraph>
        <Paragraph>
          Founded by fitness enthusiasts who understand the importance of
          quality nutrition in achieving peak performance, RedZone Nutrition is
          more than just a supplements store; it's a hub for individuals
          passionate about maximizing their potential. We believe that fitness
          is not just a hobby but a lifestyle, and our mission is to empower you
          with the tools you need to conquer your fitness goals, whether you're
          a seasoned athlete or just starting your journey.
        </Paragraph>
        <Paragraph>
          At RedZone Nutrition, we prioritize transparency and integrity,
          ensuring that each product meets the highest standards of quality and
          effectiveness. Backed by scientific research and formulated with
          premium ingredients, our supplements are trusted by athletes and
          fitness enthusiasts alike to fuel their workouts, optimize recovery,
          and support overall health.
        </Paragraph>
        <Paragraph>
          Join the RedZone community today and experience the difference in your
          fitness journey. With our unwavering commitment to excellence and
          passion for empowering individuals to reach their full potential,
          we're here to help you elevate your performance and achieve your
          fitness aspirations. Discover the power of premium supplements with
          RedZone Nutrition.
        </Paragraph>
      </AboutUsContent>
      <ImageContainer>
        <Image src="https://spzjbqxdghtmflngjxqg.supabase.co/storage/v1/object/public/product-nutrition-facts/redzoneWithoutbg.png" />
      </ImageContainer>
    </AboutUsContainer>
  );
};

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
`;

const AboutUsContent = styled.div`
  max-width: 800px;
  margin-bottom: 2rem;
  text-align: center;
`;

const Paragraph = styled.p`
  font-size: 1.3rem;
  line-height: 2;
  margin-bottom: 1rem;
  color: var(--color-grey-100);
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
