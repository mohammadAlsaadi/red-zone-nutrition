import styled from "styled-components";
import Button from "./Button";

function ProductCard({ product }) {
  return (
    <StyledProductCart>
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
  height: 250;

  display: flex;
  flex-direction: column;
  align-items: center;
  border: 2px solid var(--color-grey-300);
  border-radius: 1rem;
`;
const StyledImage = styled.img`
  width: 80%;
  height: 30%;
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
