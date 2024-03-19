import styled, { css, keyframes } from "styled-components";
import SliderImages from "../components/SliderImages";
import "react-multi-carousel/lib/styles.css";
import ProductsList from "../featurs/product/ProductsList";
import Heading from "../components/Heading";
import ButtonText from "../components/ButtonText";
import { useNavigate } from "react-router-dom";
import Header from "../components/Header";
import { useScrolled } from "../context/ScrolledContext";
import CategoriesList from "../featurs/category/CategoriesList";
import Button from "../components/Button";
import useProducts from "../featurs/product/useProducts";
// import { useUser } from "../featurs/authentication/useUser";
// import Header from "../components/Header";
function Home() {
  const navigate = useNavigate();
  const { isScrolled } = useScrolled();
  // const { user, isAuthenticated } = useUser();
  // const { data, isLoading } = useProducts();

  return (
    <StyledHome>
      <SliderContainer>
        {/* <Header /> */}
        <SliderImages />
      </SliderContainer>
      <br />

      <ConsultationContainer>
        <StyledConsultationImg
          isscrolled={isScrolled}
          imgurl="https://spzjbqxdghtmflngjxqg.supabase.co/storage/v1/object/public/cover-images/saadi.jpg"
        ></StyledConsultationImg>
        <StyledDescription>
          <Heading as="h2">NOW YOU CAN COUNT YOUR CALORIES!</Heading>
          <Heading as="h6">
            You will also get recommended products based on your calorie intake.
          </Heading>
          <Button onClick={() => navigate("/calculate-calories")}>
            Calculate now!
          </Button>
        </StyledDescription>
      </ConsultationContainer>

      <StyledCategoriesContant>
        <StyledLabel>
          <Heading as="h3">Categories</Heading>

          <ButtonText
            color="var(--color-gold-500)"
            onClick={() => navigate("/categories")}
            fontSize="20px"
          >
            See all
          </ButtonText>
        </StyledLabel>
        <CategoriesList />
      </StyledCategoriesContant>
      <StyledContent>
        <StyledLabel>
          <Heading as="h3">Spectial Offers</Heading>
          <ButtonText
            color="var(--color-gold-500)"
            onClick={() => navigate("/spectial-offer")}
            fontSize="20px"
          >
            See all
          </ButtonText>
        </StyledLabel>
        <ProductsList offers={true} />
      </StyledContent>
      <StyledContent>
        <StyledLabel>
          <Heading as="h3">Productes</Heading>
          <ButtonText
            color="var(--color-gold-500)"
            onClick={() => navigate("/products/all")}
            fontSize="20px"
          >
            See all
          </ButtonText>
        </StyledLabel>
        <ProductsList />
      </StyledContent>
    </StyledHome>
  );
}

export default Home;

const StyledHome = styled.div`
  display: flex;
  flex-direction: column;
  /* padding: 0px 10px; */
  align-items: flex-start;
  justify-content: center;
  background-color: var(--color-grey-0);
`;
const SliderContainer = styled.div`
  width: 100%;
  height: 300px;
  padding-bottom: 20rem;
  /* @media (max-width: 900px) {
    width: 90%;
  } */
`;
const ConsultationContainer = styled.div`
  display: flex;
  width: 100%;
  height: 100%;

  align-items: center;
  justify-content: flex-start;
  gap: 2rem;
  @media (max-width: 600px) {
    flex-direction: column;
    gap: 0rem;
  }
`;
const StyledDescription = styled.div`
  width: 40%;
  padding-top: 5rem;

  gap: 1rem;
  height: 300px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  text-align: center;

  @media (max-width: 600px) {
    width: 50%;
    margin-left: 17rem;
    align-items: flex-start;
  }
  background-color: var(--color-grey-0);
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
    width: 70%;
    margin-right: 17rem;
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
  padding: 5rem 5rem 0rem 5rem;
`;
const StyledCategoriesContant = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  height: 100%;
`;
