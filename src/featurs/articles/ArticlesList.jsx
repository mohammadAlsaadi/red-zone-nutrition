import styled from "styled-components";
import Spinner from "../../components/Spinner";
import useFetchArticles from "./useFetchArticles";
import Carousel from "react-multi-carousel";
// import { useShowSideBar } from "../../context/ShowSideBar";
// import { useLocation } from "react-router-dom";
import ArticleCard from "./ArticleCard";

function ArticlesList() {
  const responsive = {
    superLargeDesktop: {
      breakpoint: { max: 4000, min: 3000 },
      items: 2,
    },
    desktop: {
      breakpoint: { max: 2000, min: 1200 },
      items: 1.7,
    },
    notebook: {
      breakpoint: { max: 1200, min: 950 },
      items: 1.5,
    },
    tablet: {
      breakpoint: { max: 950, min: 600 },
      items: 1.3,
    },
    mobile: {
      breakpoint: { max: 600, min: 400 },
      items: 1.2,
    },
    smallmobile: {
      breakpoint: { max: 400, min: 0 },
      items: 1,
    },
  };

  const { data, isLoading } = useFetchArticles();
  // const { showSideBar } = useShowSideBar();
  // const isDesktopDevice = useLocation().pathname === "/home";
  if (isLoading) return <Spinner />;
  return (
    <StyledArticlesList>
      <StyledCarousel
        arrows={false}
        responsive={responsive}
        autoPlay={false}
        // autoPlaySpeed={3500}
        pauseOnHover={true}
      >
        {data?.map((article) => (
          <ArticleCard article={article} key={article.id} />
        ))}
      </StyledCarousel>
    </StyledArticlesList>
  );
}

export default ArticlesList;
const StyledArticlesList = styled.div`
  width: 100%;
  height: 100%;
  padding: 1rem 1rem 2rem 1rem;
`;
const StyledCarousel = styled(Carousel)`
  height: 35rem;

  @media (max-width: 600px) {
    height: 22rem;
  }
  @media (min-width: 600px) {
    height: 22rem;
  }
  @media (min-width: 700px) {
    height: 28rem;
    padding-left: 2rem;
    padding-right: 2rem;
  }
  @media (min-width: 900px) {
    height: 30rem;
  }
  @media (min-width: 1100px) {
    height: 35rem;
  }
`;
