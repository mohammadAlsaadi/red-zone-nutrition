import styled from "styled-components";
import Button from "../../components/Button";

function ArticleCard({ article }) {
  return (
    <StyledArticleCard>
      <StyledImg src={article.image} />
      <StyledArticleContant>
        <ArticleHeader>{article.name}</ArticleHeader>
        <ArticleBref>{article.bref}</ArticleBref>
        <StyledButton>
          <Button>Read more</Button>
        </StyledButton>
      </StyledArticleContant>
    </StyledArticleCard>
  );
}

export default ArticleCard;
const StyledArticleCard = styled.div`
  display: flex;
  width: 45rem;
  height: 22rem;
  background-color: var(--color-gold-100);
  padding: 1rem 0.6rem 0rem 0.6rem;
  border: 2px solid var(--color-grey-300);
  border-radius: 0.6rem;
  box-shadow: 0 0 8px rgba(0, 0, 0, 0.2);
  transition: transform 0.5s ease-out;
  animation: fadeIn 1s ease-out forwards;
  &:hover {
    transform: scale(1.02);
  }
  @media (max-width: 600px) {
    height: 20rem;
    width: 40rem;
  }
  /* @media (max-width: 600px) {
    height: 20rem;
    width: 40rem;
  } */
  @media (min-width: 600px) {
    height: 22rem;
    width: 48rem;
  }
  @media (min-width: 700px) {
    height: 25rem;
    width: 50rem;
  }
  @media (min-width: 900px) {
    height: 30rem;
    width: 60rem;
  }
  @media (min-width: 1100px) {
    height: 35rem;
    width: 70rem;
  }
`;
const StyledArticleContant = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: space-between;
  padding-bottom: 2rem;
  padding-left: 1rem;
`;
const ArticleHeader = styled.p`
  font-size: 12px;
  font-weight: 800;
  width: 100%;
  @media (max-width: 600px) {
    font-size: 10px;
  }
  @media (min-width: 600px) {
    font-size: 12px;
  }
  @media (min-width: 700px) {
    font-size: 14px;
  }
  @media (min-width: 900px) {
    font-size: 17px;
  }
  @media (min-width: 1100px) {
    font-size: 22px;
  }
`;
const ArticleBref = styled.p`
  font-size: 10px;
  font-weight: 600;
  @media (max-width: 600px) {
    font-size: 9px;
  }
  @media (min-width: 600px) {
    font-size: 12px;
  }
  @media (min-width: 700px) {
    font-size: 12px;
  }
  @media (min-width: 900px) {
    font-size: 15px;
  }
  @media (min-width: 1100px) {
    font-size: 18px;
  }
`;
const StyledButton = styled.div`
  display: flex;
  align-items: flex-end;
  justify-content: flex-end;
  width: 100%;
  padding: 2rem 2rem 0rem;
`;

const StyledImg = styled.img`
  /* width: 60%;
    height: 100%; */
`;
