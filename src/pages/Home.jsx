import styled from "styled-components";
import SliderImages from "../components/SliderImages";
import "react-multi-carousel/lib/styles.css";
import ProductsList from "../featurs/product/ProductsList";
import Heading from "../components/Heading";
import ButtonText from "../components/ButtonText";
import { useNavigate } from "react-router-dom";
import OptionsBar from "../components/OptionsBar";

function Home() {
  const navigate = useNavigate();
  return (
    <StyledHome>
      <StyledContent>
        <OptionsBar />
        <SliderContainer>
          <SliderImages />
        </SliderContainer>
        <StyledLabel>
          <Heading as="h3">Productes</Heading>
          <ButtonText
            color="var(--color-red-500)"
            onClick={() => navigate("/products")}
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
  padding: 0px 10px;
  align-items: flex-start;
  justify-content: center;
  background-color: var(--color-grey-0);
`;
const SliderContainer = styled.div`
  width: 80%;
  height: 280px;
  @media (max-width: 900px) {
    width: 90%;
  }
`;
const StyledContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
`;
const StyledLabel = styled.div`
  display: flex;
  width: 100%;
  align-items: center;
  justify-content: space-between;
  padding: 0rem 5rem;
`;
