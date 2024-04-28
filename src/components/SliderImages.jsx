import { useEffect, useState } from "react";
import styled from "styled-components";
import { useShowSideBar } from "../context/ShowSideBar";
import Button from "./Button";
import { useTranslation } from "react-i18next";
import { useBodyDirection } from "../context/BodyDirectionContext";
import { useNavigate } from "react-router-dom";
import Spinner from "./Spinner";

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
  const [imageLoaded, setImageLoaded] = useState(false);
  const { showSideBar } = useShowSideBar();
  const navigate = useNavigate();
  const { t } = useTranslation();
  const { isRtl } = useBodyDirection();

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrIndex((prevIndex) => (prevIndex + 1) % TEMP_IMG_SLIDES.length);
    }, 2000);

    return () => clearInterval(intervalId);
  }, []);

  const handleImageLoad = () => {
    setImageLoaded(true);
  };

  return (
    <StyledSliderImages showsidebar={showSideBar}>
      <StyledImg
        imgurl={TEMP_IMG_SLIDES[currIndex]?.url}
        loaded={imageLoaded}
        onLoad={handleImageLoad}
      >
        <StyledHeading isrtl={isRtl}>
          <P1>{t("Redzone nutrition's partnars")}</P1>
          <P2>{t("Join our team and be a part of us")}</P2>
          <Button
            borderbutton="none"
            variation="transparent"
            onClick={() => {
              window.scrollTo(0, 0);
              navigate("/contact-us");
            }}
          >
            <h4>{t("CONTACT US NOW")}</h4>
          </Button>
        </StyledHeading>
      </StyledImg>
    </StyledSliderImages>
  );
}

export default SliderImages;

const P1 = styled.p`
  font-size: x-small;
  color: var(--color-grey-200);
  font-weight: bold;
  @media (min-width: 700px) {
    font-size: 14px;
  }
  @media (max-width: 600px) {
    font-size: 8px;
  }
`;

const P2 = styled.p`
  font-size: 20px;
  color: var(--color-grey-200);
  font-weight: bold;
  @media (min-width: 600px) {
    font-size: 17px;
  }
  @media (min-width: 800px) {
    font-size: 20px;
  }
  @media (min-width: 900px) {
    font-size: 25px;
  }
  @media (min-width: 1100px) {
    font-size: 30px;
  }
  @media (max-width: 600px) {
    font-size: 12px;
  }
`;

const StyledSliderImages = styled.div`
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
`;

const StyledHeading = styled.div`
  position: fixed;
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  justify-content: ${(props) => (props.isrtl ? "flex-start" : "flex-end")};
  padding-top: 35rem;
  width: ${(props) => (props.isrtl ? "90%" : "95%")};
  @media (max-width: 900px) {
    padding-left: ${(props) => (props.isrtl ? "0" : "50%")};
  }

  gap: 1rem;
  z-index: 1;

  & > p {
    animation-duration: 3s;
    animation-name: fadeInOut, moveLeft300px, bounce;
    animation-duration: 1.5s, 2s;
    animation-iteration-count: 1, 1, 1;
  }

  @keyframes slidein {
    from {
      margin-left: 100%;
      width: 300%;
    }
    to {
      margin-left: 0%;
      width: 100%;
    }
  }
  @keyframes fadeInOut {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }

  @keyframes bounce {
    0%,
    100% {
      transform: translateY(0);
    }
    50% {
      transform: translateY(-20px);
    }
  }
`;

const StyledImg = styled.div`
  height: 500px;
  width: 100%;
  background-image: ${(props) =>
    `linear-gradient(rgba(36, 42, 46, 0.8), rgba(36, 42, 46, 0.8)), url(${props.imgurl})`};
  background-size: cover;
  background-position: center;
  opacity: ${(props) => (props.loaded ? 1 : 0)};
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
  transform: scale(1);
  transition: opacity 1s ease-out, box-shadow 0.5s ease-out,
    transform 0.5s ease-out;
  animation: fadeIn 1s ease-out forwards;
  @keyframes fadeIn {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }
`;
