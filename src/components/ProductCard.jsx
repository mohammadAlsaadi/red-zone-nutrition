import styled from "styled-components";
import Button from "./Button";

function ProductCard({ product }) {
  return (
    <StyledProductCart>
      {product.isNew && (
        <NewIcon>
          <img src="new.svg" alt="new" width={50} height={50} />
        </NewIcon>
      )}
      <StyledImage src={product.img}></StyledImage>
      <ProductName>
        <span>{product.name}</span> {product.category}
        <span>{product.price}</span>
      </ProductName>
      <CardOption>
        <Button variations="primary" size="small">
          Add to card
        </Button>
      </CardOption>
    </StyledProductCart>
  );
}

export default ProductCard;
const StyledProductCart = styled.div`
  width: 300px;
  height: 400px;
  display: flex;
  flex-direction: column;
  align-items: center;
  border: 2px solid var(--color-grey-300);
  border-radius: 1rem;
  padding: 3rem 2rem;
  opacity: 0;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
  transition: opacity 1s ease-out 0.3s, box-shadow 0.5s ease-out,
    transform 0.5s ease-out;
  animation: fadeIn 1s ease-out forwards;

  &:hover {
    transform: scale(1.1);
    height: 370px;
  }
  @media (max-width: 700px) {
    width: 160px;
    height: 280px;
    &:hover {
      height: 280px;
    }
  }
`;
const StyledImage = styled.img`
  width: 80%;
  /* height: 30%; */
  border-radius: 0.5rem;
  border: none;
`;
const ProductName = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
`;
const CardOption = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;
const NewIcon = styled.div`
  z-index: 1;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  height: 0%;
`;
