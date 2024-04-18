import styled from "styled-components";
import Button from "../../components/Button";
import { useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";

function ArticleCard({ article }) {
  const navigate = useNavigate();
  const { t } = useTranslation();
  const { image, name, bref, id: articleId } = article;
  return (
    <StyledArticleCard>
      <StyledImg src={image} />
      <StyledArticleContant>
        <ArticleHeader>{t(name)}</ArticleHeader>
        <ArticleBref>{t(bref)}</ArticleBref>
        <StyledButton>
          <Button
            onClick={() => {
              navigate(`/articles/${articleId}`);
              window.scrollTo(0, 0);
            }}
          >
            {t("Read more")}
          </Button>
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
  padding: 1rem 0.6rem 0.5rem 0.6rem;
  border: 2px solid var(--color-grey-300);
  border-radius: 0.6rem;
  box-shadow: 0 0 8px rgba(0, 0, 0, 0.2);
  transition: transform 0.5s ease-out;
  animation: fadeIn 1s ease-out forwards;
  gap: 1.2rem;
  &:hover {
    transform: scale(1.02);
  }
  @media (max-width: 500px) {
    height: 18rem;
    width: 32rem;
    gap: 0.6rem;
  }

  @media (min-width: 500px) {
    height: 18rem;
    width: 38rem;
    gap: 0.6rem;
  }
  @media (min-width: 600px) {
    height: 22rem;
    width: 40rem;
  }
  @media (min-width: 700px) {
    height: 25rem;
    width: 50rem;
  }
  @media (min-width: 800px) {
    height: 27rem;
    width: 57rem;
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

  @media (max-width: 500px) {
    font-size: 9px;
  }
  @media (min-width: 500px) {
    font-size: 10px;
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
  @media (max-width: 500px) {
    font-size: 7px;
  }
  @media (min-width: 500px) {
    font-size: 9px;
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
  @media (max-width: 500px) {
    height: 15rem;
    width: 31rem;
  }
`;
