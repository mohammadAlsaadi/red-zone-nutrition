import { useParams } from "react-router-dom";
import styled, { keyframes } from "styled-components";
import Spinner from "../components/Spinner";
import useFetchArticles from "../featurs/articles/useFetchArticles";
import Heading from "../components/Heading";
import ProductsList from "../featurs/product/ProductsList";
import { useTranslation } from "react-i18next";

function Article() {
  const { articleId } = useParams();
  const { data, isLoading } = useFetchArticles();
  const { t } = useTranslation();
  if (isLoading) return <Spinner />;
  const article = data.filter((art) => art.id === Number(articleId));
  const { bref, name, category, contant, contantHeading, image, references } =
    article[0];
  return (
    <StyledArticle>
      <StyledHeader></StyledHeader>
      <ImgContainer img={image}>
        <Heading color="var(--color-gold-500)" as="h2">
          {t(name)}
        </Heading>
        <Heading color="var(--color-grey-50)" as="h4">
          {t(bref)}
        </Heading>
      </ImgContainer>
      {contantHeading.map((headerContant, index) => (
        <StyledContant>
          <Heading as="h3">{t(headerContant)}</Heading>
          <StyledContentParagraph>{t(contant[index])}</StyledContentParagraph>
        </StyledContant>
      ))}
      <StyledReferences>
        <Heading as="h3">{t("References")}</Heading>
        {references?.map((reference) => (
          <li>{reference}</li>
        ))}
      </StyledReferences>
      <ProductsContainer>
        <Heading as="h4">{t("Products has related")}</Heading>
        <ProductsList categoryList={[category]} />
      </ProductsContainer>
    </StyledArticle>
  );
}

export default Article;
const fadeIn = keyframes`
  from {
    opacity: 0;
    transform: translateY(-20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`;
const StyledArticle = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  height: 100%;
  animation: ${fadeIn} 1s ease-out;
`;
const StyledContentParagraph = styled.p`
  font-size: medium;
  font-weight: 400;
  @media (max-width: 600px) {
    font-size: small;
  }
`;
const StyledHeader = styled.div`
  display: flex;
  width: 100%;
  align-items: center;
  justify-content: center;
  padding: 2rem;
`;
const ImgContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 0rem 3rem;
  gap: 6rem;
  width: 100%;
  height: 40rem;
  background-image: ${(props) =>
    `linear-gradient(rgba(36, 42, 46, 0.8), rgba(36, 42, 46, 0.8)), url(${props.img})`};
  background-size: cover;
  background-position: center;
  text-align: center;

  box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
`;
const StyledContant = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  align-items: flex-start;
  padding: 1rem 3rem;
`;
const StyledReferences = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  width: 100%;
  gap: 1rem;
  padding: 2rem 4rem;
`;
const ProductsContainer = styled.div`
  width: 100%;
  background-color: var(--color-grey-50);
  display: flex;
  flex-direction: column;
`;
