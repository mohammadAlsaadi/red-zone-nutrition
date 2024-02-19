import { useEffect, useState } from "react";
import styled, { css } from "styled-components";
import ButtonIcon from "./ButtonIcon";
import { HiChevronLeft, HiChevronRight } from "react-icons/hi2";
import { useShowSideBar } from "../context/ShowSideBar";

const TEMP_IMG_SLIDES = [
  { url: "slideImage1.jpg", title: "slideImage1" },
  { url: "slideImage2.jpg", title: "slideImage2" },
  { url: "slideImage3.jpg", title: "slideImage3" },
  { url: "slideImage4.jpg", title: "slideImage4" },
  { url: "slideImage5.jpg", title: "slideImage5" },
];
function SliderImages() {
  const [currIndex, setCurrIndex] = useState(0);
  const { showSideBar } = useShowSideBar();
  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrIndex((prevIndex) => (prevIndex + 1) % TEMP_IMG_SLIDES.length);
    }, 2000);

    return () => clearInterval(intervalId); // Cleanup the interval on component unmount
  }, []);
  const handlePrevClick = () => {
    if (currIndex !== 0) {
      setCurrIndex((prevIndex) => prevIndex - 1);
    }
  };

  const handleNextClick = () => {
    if (currIndex !== TEMP_IMG_SLIDES.length - 1) {
      setCurrIndex((prevIndex) => prevIndex + 1);
    }
  };
  return (
    <StyledSliderImages showSideBar={showSideBar}>
      <ButtonIcon onClick={handlePrevClick}>
        <HiChevronLeft color="red" />
      </ButtonIcon>
      <StyledImg src={`${TEMP_IMG_SLIDES[currIndex]?.url}`}></StyledImg>
      <ButtonIcon onClick={handleNextClick}>
        <HiChevronRight color="red" />
      </ButtonIcon>
    </StyledSliderImages>
  );
}

export default SliderImages;
const StyledSliderImages = styled.div`
  height: 100%;
  /* position: relative; */
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 2rem;
  ${(props) =>
    props.showSideBar
      ? css`
          @media (max-width: 600px) {
            width: 270px;
            display: flex;
            align-items: center;
            padding-left: 10rem;
            margin-left: 10rem;
            padding-right: 0;
            margin-right: 0;
          }
          @media (min-width: 900px) {
            display: flex;
            align-items: center;
            padding-left: 1rem;
          }
          display: flex;
          align-items: center;
          padding-left: 25rem;
        `
      : ""};
`;

const StyledImg = styled.img`
  @media (max-width: 600px) {
    height: 160px;
    width: 270px;
  }
  border-radius: 2rem;
  height: 220px;
  width: 400px;

  /* Add a nice fade-in, box-shadow, and scale effect */
  opacity: 0;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
  transition: opacity 1s ease-out 0.3s, box-shadow 0.5s ease-out,
    transform 0.5s ease-out;

  animation: fadeIn 1s ease-out forwards;

  &:hover {
    transform: scale(1.1);
  }

  @keyframes fadeIn {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }
`;
