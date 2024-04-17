import styled, { css } from "styled-components";
import Button from "./Button";
import { formatCurrency } from "../utils/helper";
import { useNavigate } from "react-router-dom";
import Banner from "./Banner";
import HasOffer from "./HasOffer";
import { useTranslation } from "react-i18next";
import { useProductSelection } from "../context/ProductSelectionContext";

function ProductCard({ product }) {
  const {
    name,
    image,
    category,
    price,
    isNew,
    id,
    hasOffer,
    newPrice,
    inStock,
  } = product;
  const { t } = useTranslation();
  const navigate = useNavigate();
  const { setActiveProductSize, setSelectedFlavor } = useProductSelection();
  function handleBuy() {
    setActiveProductSize(0);
    setSelectedFlavor(0);
    navigate(`/details/${id}`);
    window.scrollTo(0, 0);
  }

  return (
    <StyledProductCart inStock={inStock}>
      {isNew && !hasOffer && (
        <Banner src="https://spzjbqxdghtmflngjxqg.supabase.co/storage/v1/object/public/product-nutrition-facts/new.svg" />
      )}
      {hasOffer && !isNew && (
        <Banner
          src="https://spzjbqxdghtmflngjxqg.supabase.co/storage/v1/object/public/services-images/discount1.png"
          width={40}
          height={40}
        />
      )}
      {hasOffer && isNew && (
        <Banner src="https://spzjbqxdghtmflngjxqg.supabase.co/storage/v1/object/public/product-nutrition-facts/new.svg" />
      )}
      <StyledImage src={image} outOfStock={!inStock}></StyledImage>
      <ProductInfo>
        <ProductName>{t(name)}</ProductName>
        <ProductCategory>{t(category)}</ProductCategory>

        {hasOffer ? (
          <OldNewPrice>
            <HasOffer>{formatCurrency(price[0])}</HasOffer>
            <ProductPrice>
              {t("From")} {formatCurrency(newPrice[0])}
            </ProductPrice>
          </OldNewPrice>
        ) : (
          <ProductPrice>
            {t("From")} {formatCurrency(price[0])}
          </ProductPrice>
        )}
      </ProductInfo>
      <CardOption>
        <Button
          disabled={!inStock}
          variations="primary"
          color={!inStock && "var(--color-grey-500)"}
          size="small"
          onClick={handleBuy}
        >
          {inStock ? t("Buy now") : t("Out of Stock")}
        </Button>
      </CardOption>
    </StyledProductCart>
  );
}

export default ProductCard;

const StyledProductCart = styled.div`
  width: 280px;
  height: 420px;
  display: flex;
  flex-direction: column;
  align-items: center;
  border: 2px solid var(--color-grey-300);
  border-radius: 1rem;
  padding: 3rem 2rem 0.3rem 2rem;
  box-shadow: 0 0 8px rgba(0, 0, 0, 0.2);
  transition: transform 0.5s ease-out;
  animation: fadeIn 1s ease-out forwards;

  &:hover {
    transform: ${(props) => props.inStock && "scale(1.02)"};
  }

  ${(props) =>
    !props.inStock &&
    css`
      filter: grayscale(100%);
    `}

  @media (max-width: 1100px) {
    width: 260px;
    height: 400px;
  }
  @media (max-width: 900px) {
    width: 230px;
    height: 350px;
  }
  @media (max-width: 700px) {
    width: 190px;
    height: 300px;
  }
  @media (max-width: 600px) {
    width: 150px;
    height: 270px;
  }
`;

const ProductName = styled.span`
  font-weight: bold;
  font-size: 16px;
  @media (max-width: 1000px) {
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
  font-size: 15px;
  color: var(--color-gold-700);
  padding: 5px 0px;
  @media (max-width: 900px) {
    font-size: 13px;
  }
`;

const OldNewPrice = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding-bottom: 0rem;
`;
const StyledImage = styled.img`
  width: 80%;
  border-radius: 0.5rem;
  border: none;
  ${(props) =>
    props.outOfStock &&
    css`
      filter: grayscale(100%);
    `}
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
  justify-content: flex-end;
  height: 100%;
`;
