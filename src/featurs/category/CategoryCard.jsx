import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import Button from "../../components/Button";

function CategoryCard({ categoryItem }) {
  const { image, category } = categoryItem;
  const navigate = useNavigate();

  return (
    <StyledCategoryCart onClick={() => navigate(`/products/${category}`)}>
      <StyledImage imgurl={image}>
        <ButtonPosition>
          {/* <Heading color="var(--color-grey-50)" as="h3">
            {name}
          </Heading> */}
          <Button borderbutton="none" variation="transparent">
            <h4>Browse</h4>{" "}
          </Button>
        </ButtonPosition>
      </StyledImage>
    </StyledCategoryCart>
  );
}

export default CategoryCard;

const StyledCategoryCart = styled.div`
  width: 250px;
  height: 250px;
  display: flex;
  flex-direction: column;
  align-items: center;
  border: 2px solid var(--color-grey-300);
  border-radius: 1rem;
  /* padding: 3rem 2rem; */
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
  transition: transform 0.5s ease-out;
  animation: fadeIn 1s ease-out forwards;
  &:hover {
    transform: scale(1.05);
    /* height: 240px; */
  }
  /* @media (min-width: 800px) {
    width: 250px;
    height: 280px;
    &:hover {
      height: 300px;
    }
  }
  @media (min-width: 1000px) {
    width: 300px;
    height: 450px;
    &:hover {
      height: 280px;
    }
  } */

  /* @media (max-width: 800px) {
    width: 220px;
    height: 250px;
    &:hover {
      height: 280px;
    }
  } */
`;
// const ProductName = styled.span`
//   font-weight: bold;
//   font-size: 16px;
//   @media (max-width: 900px) {
//     font-size: 10px;
//   }
// `;

const StyledImage = styled.div`
  height: 500px;
  width: 100%;
  background-image: ${(props) => ` url(${props.imgurl})`};
  background-size: cover;
  background-position: center;
`;
//linear-gradient(rgba(36, 42, 46, 0.8), rgba(36, 42, 46, 0.8)),
const ButtonPosition = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  /* position: relative; */
  justify-content: flex-end;
  padding-bottom: 3.5rem;
  /* padding-right: 1rem; */
  width: 100%;
  height: 100%;
  /* top: 15rem;
  left: 4rem; */
`;
