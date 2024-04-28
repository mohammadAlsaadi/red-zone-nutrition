import styled, { css } from "styled-components";
import Button from "./Button";
import { formatCurrency, formatPrice } from "../utils/helper";
import { useNavigate } from "react-router-dom";
import Banner from "./Banner";
import HasOffer from "./HasOffer";
import { useTranslation } from "react-i18next";
import { useProductSelection } from "../context/ProductSelectionContext";
import SaleBanner from "./SaleBanner";

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
      {/* {isNew && !hasOffer && (
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
      )} */}

      <StyledImage src={image} outOfStock={!inStock}>
        {hasOffer && (
          <BannerContainer>
            <SaleBanner />
          </BannerContainer>
        )}
      </StyledImage>
      <ProductInfo>
        <ProductName>
          {t(name)}{" "}
          {isNew && (
            <img
              src="https://spzjbqxdghtmflngjxqg.supabase.co/storage/v1/object/public/services-images/new.svg"
              alt="new"
              width={25}
              height={25}
            />
          )}
        </ProductName>
        <ProductCategory>{t(category)}</ProductCategory>

        {hasOffer ? (
          <OldNewPrice>
            <ProductPrice>
              <FromWord>{t("From")}</FromWord> {formatPrice(newPrice[0])}
            </ProductPrice>
            <HasOffer>{formatPrice(price[0])}</HasOffer>
          </OldNewPrice>
        ) : (
          <ProductPrice>
            {t("From")} {formatPrice(price[0])}
          </ProductPrice>
        )}
      </ProductInfo>
      <CardOption>
        <Button
          disabled={!inStock}
          variations="primary"
          color={!inStock && "var(--color-grey-500)"}
          size="tallerHerzontally"
          onClick={handleBuy}
        >
          {inStock ? t("Buy now") : t("SOLD OUT")}
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
  align-items: flex-start;
  justify-content: flex-start;
  border: 1px solid var(--color-grey-300);
  /* border-radius: 1rem; */
  padding: 0rem 1rem;
  box-shadow: 0 0 6px rgba(0, 0, 0, 0.2);
  /* transition: transform 0.5s ease-out;
  animation: fadeIn 1s ease-out forwards; */

  /* &:hover {
    transform: ${(props) => props.inStock && "scale(1.02)"};
  } */

  ${(props) =>
    !props.inStock &&
    css`
      filter: grayscale(100%);
    `}

  @media (max-width: 1100px) {
    width: 290px;
    height: 400px;
  }
  @media (max-width: 900px) {
    width: 250px;
    height: 350px;
  }
  @media (max-width: 700px) {
    width: 210px;
    height: 310px;
  }
  @media (max-width: 600px) {
    width: 200px;
    height: 310px;
  }
  @media (max-width: 500px) {
    width: 190px;
    height: 300px;
  }
`;

const ProductName = styled.span`
  font-weight: bold;
  font-size: 16px;
  @media (max-width: 700px) {
    font-size: 10px;
  }
  @media (min-width: 700px) {
    font-size: 12px;
  }
  @media (min-width: 900px) {
    font-size: 14px;
  }
  @media (min-width: 1200px) {
    font-size: 16px;
  }
`;
const ProductCategory = styled.span`
  font-weight: lighter;
  font-size: 10px;
  color: var(--color-grey-600);
  @media (max-width: 500px) {
    font-size: 8px;
  }
`;
const FromWord = styled.span`
  font-size: 9px;
  color: var(--color-grey-900);
  @media (max-width: 700px) {
    font-size: 9px;
  }
  @media (min-width: 700px) {
    font-size: 10px;
  }
  @media (min-width: 900px) {
    font-size: 11px;
  }
  @media (min-width: 1200px) {
    font-size: 12px;
  }
`;
const ProductPrice = styled.span`
  font-weight: 600;
  font-size: 9px;
  color: var(--color-grey-900);
  @media (max-width: 700px) {
    font-size: 10px;
  }
  @media (min-width: 700px) {
    font-size: 12px;
  }
  @media (min-width: 900px) {
    font-size: 14px;
  }
  @media (min-width: 1200px) {
    font-size: 16px;
  }
`;

const OldNewPrice = styled.div`
  display: flex;
  padding: 10px 0px 0px;
  align-items: flex-end;
  justify-content: space-between;
  gap: 1rem;
  width: 100%;
`;
const StyledImage = styled.div`
  width: 100%;
  height: 100%;
  background-image: ${(props) => `url(${props.src})`};
  background-size: cover;
  background-position: center;
  /* border-radius: 0.5rem; */

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
  align-items: flex-start;
  justify-content: center;
  height: 40%;
`;
const CardOption = styled.div`
  display: flex;
  align-items: flex-end;
  justify-content: center;
  height: 20%;
  width: 100%;
  padding-bottom: 1rem;
`;
const BannerContainer = styled.div`
  display: flex;
  width: 100%;
  /* position: absolute; */
  align-items: center;
  justify-content: flex-end;
  padding-top: 0.5rem;
`;
