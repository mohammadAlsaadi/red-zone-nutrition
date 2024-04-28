import React, { useState } from "react";
import styled from "styled-components";
import Heading from "../components/Heading";
import ButtonText from "../components/ButtonText";
import Spinner from "../components/Spinner";
import ProductCard from "../components/ProductCard";

import useProducts from "../featurs/product/useProducts";
import { HiOutlineChevronRight, HiOutlineChevronLeft } from "react-icons/hi2";
import { useParams } from "react-router-dom";
import { useTranslation } from "react-i18next";
import Modal from "../components/Modal";
import FilterContant from "../components/FilterContant";
import useFilterProductsPrice from "../featurs/product/useFilterProducts";
import NoResult from "../components/NoResult";

function Porducts() {
  const { data, isLoading, error } = useProducts();
  const { isLoading: isFiltering } = useFilterProductsPrice();
  const { categoryName } = useParams();
  const { t } = useTranslation();
  const [priceFrom, setPriceFrom] = useState(0);
  const [priceTo, setPriceTo] = useState(100);
  const [setFiltered] = useState(false);
  const [stock, setStock] = useState("All");
  const [currentPage, setCurrentPage] = useState(1);
  let products = [];
  console.log("stock on p,:", stock);

  if (error) console.log(error.message);
  if (isLoading || isFiltering) return <Spinner />;
  if (categoryName === "all") {
    products = data;
  } else {
    products = data.filter((product) => product.category === categoryName);
  }

  if (stock === "In Stock") {
    if (categoryName === "all") {
      products = data.filter(
        (product) =>
          (product.price[0] >= priceFrom && product.price[0] <= priceTo) ||
          (product.price[1] >= priceFrom &&
            product.price[1] <= priceTo &&
            product.inStock === true)
      );
    } else {
      const productsBeforeCategories = data.filter(
        (product) =>
          (product.price[0] >= priceFrom && product.price[0] <= priceTo) ||
          (product.price[1] >= priceFrom &&
            product.price[1] <= priceTo &&
            product.inStock === true)
      );
      products = productsBeforeCategories.filter(
        (product) => product.category === categoryName
      );
    }
  } else if (stock === "Out of stock") {
    if (categoryName === "all") {
      products = data.filter((product) => product.inStock === false);
    } else {
      products = data.filter(
        (product) =>
          product.category === categoryName && product.inStock === false
      );
    }
  } else {
    if (categoryName === "all") {
      products = data;
    } else {
      products = data.filter((product) => product.category === categoryName);
    }
  }

  const productsPerPage = 6;
  const totalPages = Math.ceil(products?.length / productsPerPage);

  const startIndex = (currentPage - 1) * productsPerPage;
  const endIndex = startIndex + productsPerPage;

  const displayedProducts = products?.slice(startIndex, endIndex);

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  const handlePrevPage = () => {
    setCurrentPage((prevPage) => Math.max(prevPage - 1, 1));
  };

  const handleNextPage = () => {
    setCurrentPage((prevPage) => Math.min(prevPage + 1, totalPages));
  };

  if (products.length === 0) return <NoResult />;

  return (
    <StyledProducts>
      <StyledHeader>
        <Heading as="h3">
          {categoryName && categoryName !== "all"
            ? t(categoryName)
            : t("All Products")}
        </Heading>

        {/* <ButtonText color="var(--color-gold-700)" size="small">
          <Modal>
            <Modal.Open opens="category-filter">
              <ButtonText color="red" size="small">
                {t("Filter")}
              </ButtonText>
            </Modal.Open>
            <Modal.Window name="category-filter">
              <FilterContant
                stock={stock}
                priceFrom={priceFrom}
                priceTo={priceTo}
                setPriceFrom={setPriceFrom}
                setPriceTo={setPriceTo}
                setStock={setStock}
                setFiltered={setFiltered}
              />
            </Modal.Window>
          </Modal>
        </ButtonText> */}
      </StyledHeader>
      <ProductsContainer>
        <ProductsList>
          {displayedProducts?.map((product) => (
            <ProductCard
              key={product.id}
              product={product}
              isLoading={isLoading}
            />
          ))}
        </ProductsList>
        <PaginationContainer>
          <PageNumberArrow onClick={handlePrevPage}>
            <HiOutlineChevronLeft color="var(--color-gold-700)" />
          </PageNumberArrow>
          {Array.from({ length: totalPages }).map((_, index) => (
            <PageNumber
              key={index + 1}
              onClick={() => handlePageChange(index + 1)}
              isactive={index + 1 === currentPage}
            >
              {index + 1}
            </PageNumber>
          ))}
          <PageNumberArrow onClick={handleNextPage}>
            <HiOutlineChevronRight color="var(--color-gold-700)" />
          </PageNumberArrow>
        </PaginationContainer>
      </ProductsContainer>
    </StyledProducts>
  );
}

export default Porducts;

const StyledProducts = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  @media (min-width: 600px) {
    padding: 0rem 5rem;
  }
  @media (min-width: 700px) {
    padding: 0rem 0rem;
  }
  @media (min-width: 1000px) {
    padding: 0rem 10rem;
  }
  @media (min-width: 1200px) {
    padding: 0rem 20rem;
  }
`;

const StyledHeader = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 10px 30px;
`;

const ProductsContainer = styled.div`
  height: 100%;
  background-color: var(--color-grey-50);
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const ProductsList = styled.div`
  display: grid;

  grid-template-columns: repeat(2, 2fr);
  gap: 6rem;

  @media (min-width: 700px) {
    grid-template-columns: repeat(3, 2fr);
    gap: 3rem;
  }

  padding: 20px;
`;

const PaginationContainer = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 20px;
`;

const PageNumber = styled.div`
  border: none;
  cursor: pointer;
  margin: 0 5px;
  padding: 8px;
  border-radius: 4px;
  background-color: ${(props) =>
    props.isactive ? "var(--color-gold-500)" : "white"};
  color: ${(props) => (props.isactive ? "white" : "black")};

  &:hover {
    background-color: ${(props) =>
      props.isactive ? "var(--color-gold-600)" : "var(--color-gold-100)"};
  }
`;

const PageNumberArrow = styled(PageNumber)`
  border: none;
  cursor: ${(props) => (props.disabled ? "not-allowed" : "pointer")};
  color: ${(props) => (props.disabled ? "#ccc" : "black")};
`;
