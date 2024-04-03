import styled from "styled-components";
import Button from "./Button";
import { formatCurrency, formatPrice } from "../utils/helper";
import ButtonText from "./ButtonText";
import Spinner from "./Spinner";

import { useCartContext } from "../context/CartContext";
import { useTranslation } from "react-i18next";

function CartItem({ item }) {
  const { incrementItem, decrementItem, removeItem } = useCartContext();
  const { t } = useTranslation();

  if (!item) return null;
  const {
    image,
    name,
    category,
    price,
    count,

    id,
    flavor,
    productSize,
  } = item;
  return (
    <StyledCartItem>
      <StyledProductInfo>
        {!image ? (
          <Spinner />
        ) : (
          <img src={image} alt={`${image}`} width={100} height={100} />
        )}
        <StyledName>
          {t(name)}
          <br /> <StyledCategory>{t(category)}</StyledCategory>
          {t(flavor)} <p>{t(productSize)}</p>
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
            disabled={count === 1}
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
            {t("Remove")}
          </ButtonText>
        </StyledOptins>
        <StyledPrice>{formatPrice(price)}</StyledPrice>
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
  /* padding: 0rem 2rem; */

  margin: 1rem 0rem 2rem;
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
  padding: 0rem 3rem;
  /* margin-right: 10px; */
  @media (max-width: 600px) {
  }
`;
