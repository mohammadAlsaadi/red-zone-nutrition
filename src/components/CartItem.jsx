import styled from "styled-components";
import Button from "./Button";
import { formatCurrency } from "../utils/helper";
import ButtonText from "./ButtonText";
import Spinner from "./Spinner";
import { useCartContext } from "../context/CartContext";

function CartItem({ item }) {
  const { image, name, category, price, count, id } = item;
  const { incrementItem, decrementItem, removeItem } = useCartContext();
  console.log(image);
  return (
    <StyledCartItem>
      <StyledProductInfo>
        {!image ? (
          <Spinner />
        ) : (
          <img src={image} alt={`${image}`} width={100} height={100} />
        )}
        <StyledName>
          {name}
          <br /> <StyledCategory>{category}</StyledCategory>
        </StyledName>
      </StyledProductInfo>
      <OptionsContainer>
        <StyledOptins>
          <Button
            variation="secondary"
            border="circle"
            size="x-small"
            onClick={() => incrementItem(id)}
          >
            <StyledButtonContant>+</StyledButtonContant>
          </Button>
          <StyledButtonContant>{count}</StyledButtonContant>
          <Button
            variation="secondary"
            border="circle"
            size="x-small"
            onClick={() => decrementItem(id)}
          >
            <StyledButtonContant>-</StyledButtonContant>
          </Button>
          <ButtonText
            fontSize="small"
            color="var(--color-red-500)"
            textDecoration="underLine"
            onClick={() => removeItem(id)}
          >
            Remove
          </ButtonText>
        </StyledOptins>
        <StyledPrice>{formatCurrency(price)}</StyledPrice>
      </OptionsContainer>
    </StyledCartItem>
  );
}

export default CartItem;

const StyledCartItem = styled.li`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;

  margin-bottom: 2rem;
  background-color: var(--color-grey-100);
  border-radius: 7px;
  border-bottom: 1px solid var(--color-grey-500);
`;
const StyledProductInfo = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  height: 120px;
  gap: 10px;
  margin-left: 10px;
  @media (max-width: 600px) {
    width: 35%;
    margin-left: 2px;
  }
`;
const StyledOptins = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  gap: 5px;
  @media (max-width: 600px) {
    gap: 1px;
  }
`;
const StyledName = styled.p`
  font-weight: bold;
  color: var(--color-grey-700);
  @media (max-width: 600px) {
    font-size: x-small;
    font-weight: lighter;
    color: var(--color-grey-900);
  }
`;
const StyledCategory = styled.p`
  color: var(--color-grey-400);
  font-size: small;
  @media (max-width: 600px) {
    font-size: x-small;
  }
`;
const StyledButtonContant = styled.p`
  font-size: 15px;
  padding: 3px 7px;
  /* font-weight: bold; */
  @media (max-width: 600px) {
    font-size: x-small;
  }
`;
const StyledPrice = styled.p`
  font-weight: bold;
  padding-right: 5px;
  @media (max-width: 600px) {
    font-size: small;
  }
`;
const OptionsContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  justify-content: center;
  gap: 1rem;
  margin-right: 10px;
  @media (max-width: 600px) {
  }
`;
