import styled from "styled-components";
import Button from "./Button";
import { formatCurrency } from "../utils/helper";
import useAddItemToCart from "../featurs/cart/useAddItemToCart";
import { useCartContext } from "../context/CartContext";
function ProductCard({ product }) {
  const { isLoading } = useAddItemToCart();
  const { name, image, category, price, isNew } = product;
  const { addToCart } = useCartContext();
  return (
    <StyledProductCart>
      {isNew && (
        <NewIcon>
          <img src="new.svg" alt="new" width={50} height={50} />
        </NewIcon>
      )}
      <StyledImage src={image}></StyledImage>
      <ProductInfo>
        <ProductName>{name}</ProductName>
        <ProductCategory>{category}</ProductCategory>
        <ProductPrice>{formatCurrency(price)}</ProductPrice>
      </ProductInfo>
      <CardOption>
        <Button
          disabled={isLoading}
          variations="primary"
          size="small"
          onClick={() => addToCart(product)}
        >
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
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
  transition: transform 0.5s ease-out;
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
const ProductName = styled.span`
  font-weight: bold;
  font-size: 16px;
  @media (max-width: 900px) {
    font-size: 10px;
  }
`;
const ProductCategory = styled.span`
  font-weight: lighter;
  font-size: 10px;
  color: var(--color-grey-600);
`;
const ProductPrice = styled.span`
  font-weight: bold;
  font-size: 16px;
  color: red;
  padding: 10px 0px;
`;
const StyledImage = styled.img`
  width: 80%;
  /* height: 30%; */
  border-radius: 0.5rem;
  border: none;
`;
const ProductInfo = styled.div`
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
