import styled from "styled-components";
import Heading from "../components/Heading";
import ButtonText from "../components/ButtonText";
import ProductCart from "./ProductCard";
import { HiOutlineChevronLeft, HiOutlineChevronRight } from "react-icons/hi2";
import { useState } from "react";
import Spinner from "../components/Spinner";
import { useTranslation } from "react-i18next";
function ListOfProducts({
  data,
  isLoading,
  itemsNumbersPerPage = 4,
  headerName = "All Categories",
}) {
  //   const { data: categories, isLoading } = useCategories();
  const [currentPage, setCurrentPage] = useState(1);
  const { t } = useTranslation();

  if (isLoading) return <Spinner />;
  const itemsPerPage = itemsNumbersPerPage;
  const totalPages = Math.ceil(data?.length / itemsPerPage);

  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;

  const displayedProducts = data?.slice(startIndex, endIndex);

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  const handlePrevPage = () => {
    setCurrentPage((prevPage) => Math.max(prevPage - 1, 1));
  };

  const handleNextPage = () => {
    setCurrentPage((prevPage) => Math.min(prevPage + 1, totalPages));
  };

  return (
    <ListOfProductsLayout>
      <StyledHeader>
        <Heading as="h3">{t(headerName)}</Heading>
        <ButtonText color="red" size="small">
          {t("Filter")}
        </ButtonText>
      </StyledHeader>
      <ProductsContainer>
        <ProductsList>
          {displayedProducts?.map((item) => (
            <ProductCart product={item} key={item.id} />
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
              isactive={index + 1 === currentPage}
            >
              {index + 1}
            </PageNumber>
          ))}
          <PageNumberArrow onClick={handleNextPage}>
            <HiOutlineChevronRight color="red" />
          </PageNumberArrow>
        </PaginationContainer>
      </ProductsContainer>
    </ListOfProductsLayout>
  );
}

export default ListOfProducts;

const ListOfProductsLayout = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  @media (min-width: 600px) {
    /* width: 60%; */
    padding: 0rem 5rem;
  }
  @media (min-width: 700px) {
    /* width: 60%; */
    padding: 0rem 0rem;
  }
  @media (min-width: 1000px) {
    /* width: 60%; */
    padding: 0rem 10rem;
  }
  @media (min-width: 1200px) {
    /* width: 60%; */
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
    grid-template-columns: repeat(2, 2fr);
    gap: 3rem;
  }
  /* @media (min-width: 1000px) {
    gap: 3rem;
  } */
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
  background-color: ${(props) => (props.isactive ? "red" : "white")};
  color: ${(props) => (props.isactive ? "white" : "black")};

  &:hover {
    background-color: ${(props) => (props.isactive ? "red" : "#f0f0f0")};
  }
`;

const PageNumberArrow = styled(PageNumber)`
  border: none;
  cursor: ${(props) => (props.disabled ? "not-allowed" : "pointer")};
  color: ${(props) => (props.disabled ? "#ccc" : "black")};
`;
