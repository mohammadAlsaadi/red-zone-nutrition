import { useEffect, useState } from "react";
import styled from "styled-components";
import { HiOutlinePlus, HiOutlineXMark } from "react-icons/hi2";
import useProduct from "../featurs/product/useProduct";
import { formatPrice } from "../utils/helper";
import Spinner from "../components/Spinner";
import Heading from "../components/Heading";
import DropDownList from "../components/DropDownList";
import Button from "../components/Button";
import { useCartContext } from "../context/CartContext";
import ButtonIcon from "../components/ButtonIcon";
import ProductsList from "../featurs/product/ProductsList";
import Reviews from "../featurs/reviews/Reviews";

import { v4 as uuidv4 } from "uuid";
import HasOffer from "../components/HasOffer";

function Details() {
  const [activeProductSize, setActiveProductSize] = useState(0);
  const [selectedFlavor, setSelectedFlavor] = useState(0);
  const [isHovered, setIsHovered] = useState(false);
  const [inStock, setInStock] = useState(true);
  const [isOpenDescription, setIsOpenDescription] = useState(false);
  const [isOpenNutritionFacts, setIsOpenNutritionFacts] = useState(false);

  // const [isOpenRating, setIsOpenRating] = useState(false);
  const {
    cart,
    addToCart,
    isLoading: isAdding,
    incrementItem,
    decrementItem,
  } = useCartContext();
  const { product, isLoading } = useProduct();

  useEffect(
    function () {
      if (product?.flavors[activeProductSize].length === 0) {
        setInStock(false);
      }
      setInStock(true);
    },
    [activeProductSize, product]
  );
  if (isLoading) return <Spinner />;

  const {
    id: productId,
    name,
    image,
    price,
    productSizes,
    flavors,
    nutritionFactsImage,
    category,
    description,
    isNew,
    hasOffer,
    newPrice,
    companyName,
    country,
    companyIcon,
  } = product;

  function handleAddToCart() {
    const newItem = {
      id: uuidv4(),
      productId,
      price: hasOffer ? newPrice[activeProductSize] : price[activeProductSize],
      count: 1,
      flavor: flavors[activeProductSize][selectedFlavor],
      companyName,
      country,
      category,
      name,
      image,
      hasOffer,
      newPrice,
      productSize: productSizes[activeProductSize],
    };

    // Log newItem for debugging

    // const existingItem = cart?.find(
    //   (item) =>
    //     item.id === id &&
    //     item.flavor === flavors[selectedFlavor] &&
    //     item.productSize === productSizes[activeProductSize]
    // );
    // const existingItem = cart?.map((i) =>
    //   i.productSize?.includes(productSizes[activeProductSize])
    // );
    // console.log(product);
    // console.log(
    //   productSizes[activeProductSize],
    //   flavors[activeProductSize][selectedFlavor]
    // );
    const existingItem = cart?.find(
      (item) =>
        item.productId === productId &&
        item.productSize === productSizes[activeProductSize] &&
        item.flavor === flavors[activeProductSize][selectedFlavor]
    );
    if (existingItem) {
      console.log("update count item");
      // If the item already exists, increment its count
      console.log(existingItem.id);
      incrementItem(existingItem.id);
    } else {
      console.log(newItem);

      console.log("add new item");
      addToCart(newItem);
    }
  }
  return (
    <DetailsLayout>
      <ProductOptions>
        <ImageContainer>
          <StyledImg
            src={isHovered ? nutritionFactsImage : image}
            alt=""
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
          />
        </ImageContainer>
        <StyledOptions>
          <StyledIcon src={companyIcon} />
          <Heading as="h3">{name}</Heading>
          {hasOffer && (
            <HasOffer>
              {price.length > 1
                ? `${formatPrice(price[0])} –  ${formatPrice(price[1])}`
                : formatPrice(price[0])}
            </HasOffer>
          )}

          {hasOffer ? (
            <Heading as="h4">
              {newPrice.length > 1
                ? `${formatPrice(newPrice[0])} –  ${formatPrice(newPrice[1])}`
                : formatPrice(newPrice[0])}
            </Heading>
          ) : (
            <Heading as="h4">
              {price.length > 1
                ? `${formatPrice(price[0])} –  ${formatPrice(price[1])}`
                : formatPrice(price[0])}
            </Heading>
          )}
          <StyledInStock instock={inStock}>
            {inStock ? "In Stock" : "Out of Stock"}
          </StyledInStock>

          <DropDownList
            setter={setActiveProductSize}
            value={activeProductSize}
            options={productSizes}
            labelText="Size"
          />
          <DropDownList
            setter={setSelectedFlavor}
            // value={selectedFlavor}
            options={flavors[activeProductSize]}
            labelText="Flavor"
            additionIcon={true}
          />
          <PriceContainer>
            <Heading as="h3">
              {hasOffer
                ? formatPrice(newPrice[activeProductSize])
                : formatPrice(price[activeProductSize])}
            </Heading>
          </PriceContainer>
          <ButtonPosition>
            <Button
              size="tallerHerzontally"
              variation="primary"
              onClick={handleAddToCart}
              // disabled={isAdding}
            >
              Add to cart
            </Button>
          </ButtonPosition>
        </StyledOptions>
      </ProductOptions>
      <ProductDescription>
        <StyledLabel onClick={() => setIsOpenDescription((opened) => !opened)}>
          <Heading as="h3">Product description</Heading>
          <ButtonIcon width="14" height="14">
            {isOpenDescription ? <HiOutlineXMark /> : <HiOutlinePlus />}{" "}
          </ButtonIcon>
        </StyledLabel>
        <UnderLine />
        {isOpenDescription && <p>{description}</p>}
      </ProductDescription>
      <ProductNutritionFacts>
        <StyledLabel
          onClick={() => setIsOpenNutritionFacts((opened) => !opened)}
        >
          <Heading as="h3">Nutrition Facts</Heading>
          <ButtonIcon width="14" height="14">
            {isOpenNutritionFacts ? <HiOutlineXMark /> : <HiOutlinePlus />}
          </ButtonIcon>
        </StyledLabel>
        <UnderLine />
        {isOpenNutritionFacts && <StyledImg src={nutritionFactsImage} />}
      </ProductNutritionFacts>
      <Heading as="h2">Other Top Related Products</Heading>
      <ProductsList category={category} />
      <Reviews />
    </DetailsLayout>
  );
}

export default Details;
const DetailsLayout = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
  padding-bottom: 10rem;
  padding-top: 20px;
  background-color: var(--color-grey-0);

  @media (max-width: 700px) {
    gap: 1rem;
  }
`;
const ProductOptions = styled.div`
  display: flex;
  align-items: center;
  gap: 1.5rem;
  justify-content: space-between;
  background-color: var(--color-grey-0);
  @media (max-width: 700px) {
    flex-direction: column;
    justify-content: flex-start;
    height: 50%;
    padding-bottom: 10rem;
  }
  height: 60%;
  width: 100%;
`;
const ImageContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 50%;
  height: 90%;
  @media (max-width: 700px) {
    width: 300px;
    height: 300px;
  }
`;
const StyledOptions = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  width: 50%;
  height: 90%;
  @media (max-width: 700px) {
    width: 400px;
    height: 300px;
  }
`;
const PriceContainer = styled.div`
  padding-left: 10px;
  border-bottom: 1px solid var(--color-grey-300);
  /* border-radius: 5px; */
  width: 90%;
`;
const StyledImg = styled.img`
  /* width: 200px;
  height: 300px; */
  width: 300px;
  height: 330px;
  object-fit: cover;
  @media (max-width: 700px) {
    width: 400px;
    height: 300px;
    object-fit: cover;
  }
  /* &:hover {
    transform: scale(1.6);
  } */
`;
const ButtonPosition = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  padding-top: 1rem;
  width: 100%;
`;
const StyledInStock = styled.p`
  padding-top: 10px;
  color: ${(props) => (props.instock ? "green" : "red")};
  font-size: medium;
  font-weight: bold;
`;
const StyledIcon = styled.img`
  object-fit: cover;
  width: 25%;
`;
const ProductDescription = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 2rem 0rem;

  width: 100%;
`;
const UnderLine = styled.div`
  border-bottom: 1.5px solid var(--color-grey-300);
  width: 45%;
  @media (max-width: 700px) {
    width: 60%;
  }
`;
const ProductNutritionFacts = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  width: 100%;
  padding: 2rem 0rem;
`;
const StyledLabel = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 45%;
  @media (max-width: 700px) {
    width: 60%;
  }
  cursor: pointer;
`;
