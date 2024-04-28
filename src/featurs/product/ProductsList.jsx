import React, { useState } from "react";
import styled from "styled-components";
import ProductCard from "../../components/ProductCard";
import Spinner from "../../components/Spinner";
import useProducts from "./useProducts";
import { HiMiniChevronLeft } from "react-icons/hi2";
import { HiMiniChevronRight } from "react-icons/hi2";

const ProductsList = ({ offers, isLoadingFetch, category, categoryList }) => {
  const { data, isLoading } = useProducts();
  const [currentIndex, setCurrentIndex] = useState(0);
  const [mouseDownX, setMouseDownX] = useState(null);
  const [mouseUpX, setMouseUpX] = useState(null);
  const [touchStart, setTouchStart] = useState(null);
  const [touchEnd, setTouchEnd] = useState(null);

  if (isLoading || isLoadingFetch) return <Spinner />;

  let products = [];
  if (offers) {
    products = data.filter((product) => product.hasOffer);
  } else if (categoryList) {
    products = data.filter((product) =>
      categoryList.includes(product.category)
    );
  } else if (category) {
    products = data.filter((product) => product.category === category);
  } else {
    products = data;
  }

  const responsive = {
    superLargeDesktop: { breakpoint: { max: 4000, min: 1400 }, items: 5 },
    desktop: { breakpoint: { max: 1400, min: 1100 }, items: 4 },
    notebook: { breakpoint: { max: 1100, min: 800 }, items: 3.1 },
    tablet: { breakpoint: { max: 800, min: 600 }, items: 2.8 },
    mobile: { breakpoint: { max: 600, min: 400 }, items: 2.4 },
    smallMobile: { breakpoint: { max: 400, min: 0 }, items: 1.7 },
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
    } else if (width >= responsive.mobile.breakpoint.min) {
      return responsive.mobile.items;
    } else {
      return responsive.smallMobile.items;
    }
  };

  const totalSlides = Math.ceil(products.length / getItemsPerSlide());
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

  const handleMouseDown = (e) => {
    setMouseDownX(e.clientX);
  };

  const handleMouseMove = (e) => {
    if (mouseDownX === null) return;
    setMouseUpX(e.clientX);
  };

  const handleMouseUp = () => {
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

  const handleTouchStart = (e) => {
    setTouchStart(e.touches[0].clientX);
  };

  const handleTouchMove = (e) => {
    setTouchEnd(e.touches[0].clientX);
  };

  const handleTouchEnd = () => {
    if (!touchStart || !touchEnd) return;
    const distance = touchStart - touchEnd;
    if (distance > 30) {
      goToNextSlide();
    } else if (distance < -30) {
      goToPrevSlide();
    }
    setTouchStart(null);
    setTouchEnd(null);
  };
  return (
    <Container dir="ltr">
      <SliderWrapper
        onMouseDown={handleMouseDown}
        onMouseMove={handleMouseMove}
        onMouseUp={handleMouseUp}
        onTouchStart={handleTouchStart}
        onTouchMove={handleTouchMove}
        onTouchEnd={handleTouchEnd}
      >
        <Slider currentIndex={currentIndex}>
          {products.map((product, index) => (
            <Slide key={index}>
              <ProductCard product={product} />
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
          disabled={currentIndex === totalSlides - 1}
          onClick={goToNextSlide}
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
};

export default ProductsList;

const Container = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
  padding: 1rem 0rem;
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
  @media (max-width: 800px) {
    margin: 0px 10px;
    flex: 0 0;
  }
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
