import styled, { css, keyframes } from "styled-components";
import SliderImages from "../components/SliderImages";
import "react-multi-carousel/lib/styles.css";
import ProductsList from "../featurs/product/ProductsList";
import Heading from "../components/Heading";
import ButtonText from "../components/ButtonText";
import { useNavigate } from "react-router-dom";
import { useScrolled } from "../context/ScrolledContext";
import CategoriesList from "../featurs/category/CategoriesList";
import Button from "../components/Button";
import { useTranslation } from "react-i18next";
import ArticlesList from "../featurs/articles/ArticlesList";

function Home() {
  const navigate = useNavigate();
  const { isScrolled } = useScrolled();
  const { t } = useTranslation();

  return (
    <StyledHome>
      <SliderContainer>
        <SliderImages />
      </SliderContainer>

      <ConsultationContainer>
        <StyledConsultationImg
          isscrolled={isScrolled}
          imgurl="https://spzjbqxdghtmflngjxqg.supabase.co/storage/v1/object/public/cover-images/saadi.jpg"
        ></StyledConsultationImg>
        <StyledDescription>
          <Heading as="h2">{t("NOW YOU CAN COUNT YOUR CALORIES!")}</Heading>
          <Heading as="h6">
            {t(
              "You will also get recommended products based on your calorie intake."
            )}
          </Heading>
          <Button
            onClick={() => {
              window.scrollTo(0, 0);

              navigate("/calculate-calories");
            }}
          >
            {t("Calculate now!")}
          </Button>
        </StyledDescription>
      </ConsultationContainer>

      <StyledCategoriesContant>
        <StyledLabel>
          <Heading as="h3">{t("Categories")}</Heading>

          <ButtonText
            color="var(--color-gold-500)"
            onClick={() => {
              navigate("/categories");
              window.scrollTo(0, 0);
            }}
            fontSize="20px"
          >
            {t("See all")}
          </ButtonText>
        </StyledLabel>
        <CategoriesList />
      </StyledCategoriesContant>
      <StyledContent>
        <StyledLabel>
          <Heading as="h3">{t("Special Offers")}</Heading>
          <ButtonText
            color="var(--color-gold-500)"
            onClick={() => {
              navigate("/special-offer");
              window.scrollTo(0, 0);
            }}
            fontSize="20px"
          >
            {t("See all")}
          </ButtonText>
        </StyledLabel>
        <ProductsList offers={true} />
      </StyledContent>
      <StyledContent>
        <StyledLabel>
          <Heading as="h3">{t("All Products")}</Heading>
          <ButtonText
            color="var(--color-gold-500)"
            onClick={() => {
              navigate("/products/all");
              window.scrollTo(0, 0);
            }}
            fontSize="20px"
          >
            {t("See all")}
          </ButtonText>
        </StyledLabel>
        <ProductsList />
      </StyledContent>
      <StyledContent>
        <StyledLabel>
          <Heading as="h3">{t("Red Zone Article")}</Heading>
          <ButtonText
            color="var(--color-gold-500)"
            onClick={() => navigate("/articles")}
            fontSize="20px"
          >
            {t("See all")}
          </ButtonText>
        </StyledLabel>
        <ArticlesList />
      </StyledContent>
    </StyledHome>
  );
}

export default Home;
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
const StyledHome = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  background-color: var(--color-grey-0);
  animation: ${fadeIn} 1s ease-out;
`;
const SliderContainer = styled.div`
  width: 100%;
  height: 300px;
  padding-bottom: 25rem;
`;
const ConsultationContainer = styled.div`
  display: flex;
  width: 100%;
  height: 100%;

  align-items: center;
  justify-content: flex-start;
  gap: 1rem;
  @media (max-width: 600px) {
    flex-direction: column;
    gap: 0rem;
  }
`;
const StyledDescription = styled.div`
  width: 40%;
  padding-top: 5rem;
  background-color: var(--color-grey-0);
  gap: 1rem;
  height: 300px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  text-align: center;
  @media (max-width: 600px) {
    padding-top: 2rem;
    height: 240px;
    width: 55%;
    margin-left: 30%;
  }
  @media (min-width: 600px) {
    width: 40%;
  }
`;
const zoomoutSlow = keyframes`
  from {
    transform: scale(1);
  }
  to {
    transform: scale(0.9);
  }
`;
const StyledConsultationImg = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: flex-end;
  height: 320px;
  width: 60%;
  background-image: ${(props) =>
    `linear-gradient(rgba(36, 42, 46, 0.8), rgba(36, 42, 46, 0.8)), url(${props.imgurl})`};
  background-size: cover;
  ${(props) =>
    props.isscrolled &&
    css`
      animation: ${zoomoutSlow} 15s ease forwards;
    `}
  @media (max-width: 600px) {
    width: 80%;

    margin-right: 20%;
    margin-left: 10%;
  }
  @media (min-width: 600px) {
    width: 70%;
  }
  @media (min-width: 900px) {
    width: 50%;
    left: 50rem;
  }
  @media (min-width: 1200px) {
    width: 1000px;
    margin-left: 10rem;
    height: 500px;

    background-size: cover;
  }
`;

const StyledContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  height: 100%;
`;
const StyledLabel = styled.div`
  display: flex;
  width: 100%;
  align-items: center;
  justify-content: space-between;
  padding: 0rem 4rem 0rem 2.5rem;
`;
const StyledCategoriesContant = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  height: 100%;
`;
