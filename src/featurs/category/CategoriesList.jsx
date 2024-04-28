import "react-multi-carousel/lib/styles.css";
import styled from "styled-components";
import CategoryCard from "./CategoryCard";
import Spinner from "../../components/Spinner";
import useCategories from "./useCategories";
import React, { useState } from "react";
import { HiMiniChevronLeft } from "react-icons/hi2";
import { HiMiniChevronRight } from "react-icons/hi2";

function CategoriesList() {
  const { data: categories, isLoading } = useCategories();
  const [currentIndex, setCurrentIndex] = useState(0);
  const [mouseDownX, setMouseDownX] = useState(null);
  const [mouseUpX, setMouseUpX] = useState(null);

  if (isLoading) return <Spinner />;

  const responsive = {
    superLargeDesktop: { breakpoint: { max: 4000, min: 1400 }, items: 5 },
    desktop: { breakpoint: { max: 1400, min: 1100 }, items: 4 },
    notebook: { breakpoint: { max: 1100, min: 800 }, items: 3.5 },
    tablet: { breakpoint: { max: 800, min: 600 }, items: 3 },
    mobile: { breakpoint: { max: 600, min: 0 }, items: 2.2 },
  };

  const getItemsPerSlide = () => {
    const width = window.innerWidth;
    if (width >= responsive.superLargeDesktop.breakpoint.min) {
      return responsive.superLargeDesktop.items;
    } else if (width >= responsive.desktop.breakpoint.min) {
      return responsive.desktop.items;
    } else if (width >= responsive.notebook.breakpoint.min) {
      return responsive.notebook.items;
    } else if (width >= responsive.notebook.breakpoint.min) {
      return responsive.notebook.items;
    } else if (width >= responsive.tablet.breakpoint.min) {
      return responsive.tablet.items;
    } else {
      return responsive.mobile.items;
    }
  };

  const totalSlides = Math.ceil(categories.length / getItemsPerSlide());

  const goToPrevSlide = () => {
    if (currentIndex > 0) {
      setCurrentIndex(currentIndex - 1);
    }
  };

  const goToNextSlide = () => {
    if (currentIndex !== totalSlides) {
      setCurrentIndex(currentIndex + 1);
    }
  };

  const goToSlide = (index) => {
    setCurrentIndex(index);
  };

  const onMouseDown = (e) => {
    setMouseDownX(e.clientX);
  };

  const onMouseMove = (e) => {
    if (mouseDownX === null) return;
    setMouseUpX(e.clientX);
  };

  const onMouseUp = () => {
    if (!mouseDownX || !mouseUpX) return;
    const distance = mouseDownX - mouseUpX;
    if (distance > 30) {
      goToNextSlide();
    } else if (distance < -30) {
      goToPrevSlide();
    }

    setMouseDownX(null);
    setMouseUpX(null);
  };
  return (
    <Container dir="ltr">
      <SliderWrapper
        onMouseDown={onMouseDown}
        onMouseMove={onMouseMove}
        onMouseUp={onMouseUp}
      >
        <Slider currentIndex={currentIndex}>
          {categories.map((category, index) => (
            <Slide key={index}>
              <CategoryCard categoryItem={category} />
            </Slide>
          ))}
        </Slider>
      </SliderWrapper>

      <Pagination>
        <ArrowLeft
          disabled={currentIndex === 0}
          onClick={goToPrevSlide}
          title="Previous"
        >
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
          disabled={currentIndex === totalSlides - 1}
          onClick={goToNextSlide}
          title="Next"
        >
          <HiMiniChevronRight
            color={
              currentIndex === totalSlides - 1
                ? "var(--color-grey-300)"
                : "var(--color-grey-800)"
            }
          />
        </ArrowRight>
      </Pagination>
    </Container>
  );
}

export default CategoriesList;

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
