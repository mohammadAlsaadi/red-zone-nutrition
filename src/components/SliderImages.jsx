import { useEffect, useState } from "react";
import styled, { css } from "styled-components";
import ButtonIcon from "./ButtonIcon";
import { HiChevronLeft, HiChevronRight } from "react-icons/hi2";
import { useShowSideBar } from "../context/ShowSideBar";
import Heading from "./Heading";
import Button from "./Button";

const TEMP_IMG_SLIDES = [
  {
    url: "https://spzjbqxdghtmflngjxqg.supabase.co/storage/v1/object/public/cover-images/cover6.jpg",
    title: "slideImage6",
  },
  {
    url: "https://spzjbqxdghtmflngjxqg.supabase.co/storage/v1/object/public/cover-images/cover3.jpg",
    title: "slideImage1",
  },
  {
    url: "https://spzjbqxdghtmflngjxqg.supabase.co/storage/v1/object/public/cover-images/cover2.jpg",
    title: "slideImage2",
  },
  {
    url: "https://spzjbqxdghtmflngjxqg.supabase.co/storage/v1/object/public/cover-images/cover4.jpg",
    title: "slideImage3",
  },
  {
    url: "https://spzjbqxdghtmflngjxqg.supabase.co/storage/v1/object/public/cover-images/cover1.jpg",
    title: "slideImage4",
  },
  {
    url: "https://spzjbqxdghtmflngjxqg.supabase.co/storage/v1/object/public/cover-images/cover5.jpg",
    title: "slideImage5",
  },
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
    <StyledSliderImages showsidebar={showSideBar}>
      {/* <ButtonIcon onClick={handlePrevClick}>
        <HiChevronLeft color="red" />
      </ButtonIcon> */}

      <StyledImg
        imgurl={TEMP_IMG_SLIDES[currIndex]?.url}
        title={TEMP_IMG_SLIDES[currIndex]?.title}
      >
        <StyledHeading>
          <P1>Redzone nutrition's partnars </P1>
          <P2>Join our team and be a part of us</P2>
          <Button borderbutton="none" variation="transparent">
            <h4>JOIN US NOW</h4>{" "}
          </Button>
        </StyledHeading>
      </StyledImg>
      {/* <ButtonIcon onClick={handleNextClick}>
        <HiChevronRight color="red" />
      </ButtonIcon> */}
    </StyledSliderImages>
  );
}

export default SliderImages;
const P1 = styled.p`
  font-size: x-small;
  color: var(--color-grey-200);
  font-weight: bold;
`;
const P2 = styled.p`
  font-size: x-large;
  @media (max-width: 700px) {
    font-size: large;
  }
  @media (max-width: 600px) {
    font-size: medium;
  }
  color: var(--color-grey-200);
  font-weight: bold;
`;
const StyledSliderImages = styled.div`
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  /* gap: 2rem; */
  width: 100%;

  ${(props) =>
    props.showsidebar &&
    css`
      /* @media (max-width: 600px) {
        width: 270px;
        display: flex;
        align-items: center;
        padding-left: 10rem;
        margin-left: 10rem;
        padding-right: 0;
        margin-right: 0;
      } */
      /* @media (min-width: 900px) {
        display: flex;
        align-items: center;
        padding-left: 1rem;
      } */
    `}
`;
const StyledHeading = styled.div`
  position: absolute;
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  justify-content: flex-end;
  padding-top: 35rem;

  padding-left: 50%;
  @media (max-width: 900px) {
    padding-left: 40%;
  }
  gap: 1rem;
  /* bottom: 0rem;
  right: 6rem; */

  z-index: 1;
`;
const StyledImg = styled.div`
  height: 500px;
  width: 100%;
  background-image: ${(props) =>
    `linear-gradient(rgba(36, 42, 46, 0.8), rgba(36, 42, 46, 0.8)), url(${props.imgurl})`};
  background-size: cover;
  background-position: center;

  /* Add a nice fade-in, box-shadow, and scale effect */
  opacity: 0;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
  transform: scale(1); /* Add this line for initial scale */
  transition: opacity 1s ease-out 0.3s, box-shadow 0.5s ease-out,
    transform 0.5s ease-out;

  animation: fadeIn 1s ease-out forwards;

  /* &:hover {
    transform: scale(1.05); 
  } */

  @keyframes fadeIn {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }
`;
