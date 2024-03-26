import styled from "styled-components";
import Heading from "./Heading";
import { useNavigate } from "react-router-dom";
// import { useOutsideClick } from "../hooks/useOutsideClick";
import { useTranslation } from "react-i18next";

function ProductResult({ item, setShowSearchBar, setSearchInput }) {
  const navigate = useNavigate();
  const { t } = useTranslation();

  const handleClick = () => {
    navigate(`details/${item.id}`);
    setShowSearchBar(false);
    setSearchInput("");
  };
  // const { ref } = useOutsideClick(handleClose, true);
  // function handleClose() {
  //   setShowSearchBar((show) => false);
  // }

  return (
    <CartItemContainer onClick={handleClick}>
      <CartItemSummary>
        <img src={item.image} width={50} height={50} alt="productSummary" />
        <InfoContainer>
          <Heading as="h6">{t(item.name)}</Heading>
          <Heading color="var(--color-grey-400)" as="h7">
            {t(item.category)}
          </Heading>
          <Heading color="var(--color-gold-700)" as="h7">
            {t(item.companyName)}
          </Heading>
        </InfoContainer>
      </CartItemSummary>
    </CartItemContainer>
  );
}

export default ProductResult;

const CartItemContainer = styled.div`
  display: flex;
  justify-content: space-between;
  border: 1px solid var(--color-grey-200);
  width: 100%;
  align-items: center;
  justify-content: flex-start;
  padding-left: 1rem;
  cursor: pointer;
  &:hover {
    background-color: var(--color-grey-100);
  }
`;
const CartItemSummary = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;
const InfoContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding-left: 0.6rem;
`;
