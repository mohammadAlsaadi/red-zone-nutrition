import styled from "styled-components";
import Heading from "../components/Heading";
import { useTranslation } from "react-i18next";
import useFetchArticles from "../featurs/articles/useFetchArticles";
import { useState } from "react";
import ArticleCard from "../featurs/articles/ArticleCard";
import { HiOutlineChevronLeft, HiOutlineChevronRight } from "react-icons/hi2";
import Spinner from "../components/Spinner";

function Articles() {
  const { data: articles, isLoading } = useFetchArticles();
  const [currentPage, setCurrentPage] = useState(1);

  const { t } = useTranslation();
  const articlesPerPage = 4;
  const totalPages = Math.ceil(articles?.length / articlesPerPage);

  const startIndex = (currentPage - 1) * articlesPerPage;
  const endIndex = startIndex + articlesPerPage;

  const displayedArticles = articles?.slice(startIndex, endIndex);

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  const handlePrevPage = () => {
    setCurrentPage((prevPage) => Math.max(prevPage - 1, 1));
  };

  const handleNextPage = () => {
    setCurrentPage((prevPage) => Math.min(prevPage + 1, totalPages));
  };
  if (isLoading) return <Spinner />;
  return (
    <StyledArticles>
      <StyledHeader>
        <Heading as="h3">{t("Red Zone Articles")}</Heading>
      </StyledHeader>
      <ArticleContainer>
        <ArticleList>
          {displayedArticles?.map((article) => (
            <ArticleCard article={article} key={article.id} />
          ))}
        </ArticleList>
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
      </ArticleContainer>
    </StyledArticles>
  );
}

export default Articles;
const StyledArticles = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
`;
const StyledHeader = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 10px 30px;
`;
const ArticleContainer = styled.div`
  height: 100%;
  background-color: var(--color-grey-50);
  display: flex;
  flex-direction: column;
  align-items: center;
`;
const ArticleList = styled.div`
  display: grid;

  grid-template-columns: repeat(1, 2fr);
  gap: 6rem;

  @media (min-width: 700px) {
    grid-template-columns: repeat(1, 1fr);
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
