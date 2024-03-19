import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import styled from "styled-components";
import CategoryCard from "./CategoryCard";
import Spinner from "../../components/Spinner";
import useCategories from "./useCategories";
import { useShowSideBar } from "../../context/ShowSideBar";
import { useDeviceWidth } from "../../context/DeviceWidthContext";

function CategoriesList() {
  const { data: categories, isLoading } = useCategories();
  const { showSideBar } = useShowSideBar();
  const { isDesktopDevice } = useDeviceWidth();
  // const { showSideBar } = useShowSideBar();
  const responsive = {
    superLargeDesktop: {
      breakpoint: { max: 4000, min: 1400 },
      items: 5,
    },
    desktop: {
      breakpoint: { max: 1400, min: 1100 },
      items: 4,
    },
    notebook: {
      breakpoint: { max: 1100, min: 800 },
      items: 3,
    },
    tablet: {
      breakpoint: { max: 800, min: 700 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 700, min: 0 },
      items: 2,
    },
  };
  if (isLoading) return <Spinner />;
  else {
    return (
      <StyledList>
        <Carousel
          arrows={showSideBar && !isDesktopDevice ? false : true}
          responsive={responsive}
          autoPlay={true}
          autoPlaySpeed={1500}
        >
          {categories.map((category) => (
            <CategoryCard categoryItem={category} key={category.id} />
          ))}
        </Carousel>
      </StyledList>
    );
  }
}

export default CategoriesList;
const StyledList = styled.div`
  width: 100%;
  margin: 3rem 0rem;
`;
