import React, { useState } from "react";
import styled from "styled-components";
import Heading from "../components/Heading";
import ButtonText from "../components/ButtonText";
import Spinner from "../components/Spinner";
import ProductCard from "../components/ProductCard";

import useProducts from "../featurs/product/useProducts";
import { HiOutlineChevronRight, HiOutlineChevronLeft } from "react-icons/hi2";

function Porducts() {
  const { data: products, isLoading, error } = useProducts();
  const [currentPage, setCurrentPage] = useState(1);
  if (error) console.log(error.message);
  if (isLoading) return <Spinner />;

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

  console.log(products);
  return (
    <StyledProducts>
      <StyledHeader>
        <Heading as="h3">All Products</Heading>
        <ButtonText color="red" size="small">
          Filter
        </ButtonText>
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
            <HiOutlineChevronLeft color="red" />
          </PageNumberArrow>
          {Array.from({ length: totalPages }).map((_, index) => (
            <PageNumber
              key={index + 1}
              onClick={() => handlePageChange(index + 1)}
              isActive={index + 1 === currentPage}
            >
              {index + 1}
            </PageNumber>
          ))}
          <PageNumberArrow onClick={handleNextPage}>
            <HiOutlineChevronRight color="red" />
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
`;

const ProductsList = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 20px;
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
  background-color: ${(props) => (props.isActive ? "red" : "white")};
  color: ${(props) => (props.isActive ? "white" : "black")};

  &:hover {
    background-color: ${(props) => (props.isActive ? "red" : "#f0f0f0")};
  }
`;

const PageNumberArrow = styled(PageNumber)`
  border: none;
  cursor: ${(props) => (props.disabled ? "not-allowed" : "pointer")};
  color: ${(props) => (props.disabled ? "#ccc" : "black")};
`;
