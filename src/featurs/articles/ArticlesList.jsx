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
/*
import React, { useState } from "react";
import styled from "styled-components";
import ArticleCard from "./ArticleCard";
import Spinner from "../../components/Spinner";
import useFetchArticles from "./useFetchArticles";
import { HiMiniChevronLeft, HiMiniChevronRight } from "react-icons/hi2";

function ArticlesList() {
  const { data: articles, isLoading } = useFetchArticles();
  const [currentIndex, setCurrentIndex] = useState(0);

  if (isLoading) return <Spinner />;

  const goToPrevSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? articles.length - 1 : prevIndex - 1
    );
  };

  const goToNextSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === articles.length - 1 ? 0 : prevIndex + 1
    );
  };

  const goToSlide = (index) => {
    setCurrentIndex(index);
  };

  const responsive = {
    superLargeDesktop: { breakpoint: { max: 4000, min: 3000 }, items: 1 },
    desktop: { breakpoint: { max: 2000, min: 1200 }, items: 1 },
    notebook: { breakpoint: { max: 1200, min: 950 }, items: 1 },
    tablet: { breakpoint: { max: 950, min: 600 }, items: 1 },
    mobile: { breakpoint: { max: 600, min: 400 }, items: 1 },
    smallmobile: { breakpoint: { max: 400, min: 0 }, items: 1 },
  };

  const getItemsPerSlide = () => {
    const width = window.innerWidth;
    if (width >= responsive.superLargeDesktop.breakpoint.min) {
      return responsive.superLargeDesktop.items;
    } else if (width >= responsive.desktop.breakpoint.min) {
      return responsive.desktop.items;
    } else if (width >= responsive.notebook.breakpoint.min) {
      return responsive.notebook.items;
    } else if (width >= responsive.tablet.breakpoint.min) {
      return responsive.tablet.items;
    } else {
      return responsive.mobile.items;
    }
  };

  const totalSlides = Math.ceil(articles.length / getItemsPerSlide());

  return (
    <Container>
      <SliderWrapper>
        <Slider currentIndex={currentIndex}>
          {articles.map((article, index) => (
            <Slide key={index}>
              <ArticleCard article={article} />
            </Slide>
          ))}
        </Slider>
      </SliderWrapper>

      <Pagination>
        <ArrowLeft disabled={currentIndex === 0} onClick={goToPrevSlide}>
          <HiMiniChevronLeft
            color={
              currentIndex === 0
                ? "var(--color-grey-300)"
                : "var(--color-grey-800)"
            }
          />
        </ArrowLeft>
        {[...Array(totalSlides)].map((_, index) => (
          <Dot
            key={index}
            active={index === currentIndex}
            onClick={() => goToSlide(index)}
          />
        ))}
        <ArrowRight
          disabled={currentIndex + 1 === totalSlides}
          onClick={goToNextSlide}
        >
          <HiMiniChevronRight
            color={
              currentIndex + 1 === totalSlides
                ? "var(--color-grey-300)"
                : "var(--color-grey-800)"
            }
          />
        </ArrowRight>
      </Pagination>
    </Container>
  );
}

export default ArticlesList;

const Container = styled.div`
  position: relative;
  width: 100%;
  margin: 0;
`;

const SliderWrapper = styled.div`
  overflow: hidden;
`;

const Slider = styled.div`
  display: flex;
  transition: transform 0.5s ease;
  transform: ${({ currentIndex }) => `translateX(-${currentIndex * 100}%)`};
`;

const Slide = styled.div`
  flex: 0 0;
  margin: 0px 15px;
`;

const Pagination = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 10px;
`;

const Dot = styled.div`
  width: ${({ active }) => (active ? "25px" : "10px")};
  height: 10px;
  background-color: ${({ active }) =>
    active ? "var(--color-grey-800)" : "var(--color-grey-200)"};
  border-radius: 7px;
  margin: 0 5px;
  cursor: pointer;
`;

const ArrowLeft = styled.button`
  background: none;
  border: none;
  font-size: 24px;
  cursor: pointer;
`;

const ArrowRight = styled.button`
  background: none;
  border: none;
  font-size: 24px;
  cursor: pointer;
`;
*/
