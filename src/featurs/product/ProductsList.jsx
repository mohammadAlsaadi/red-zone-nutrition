import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import ProductCard from "../../components/ProductCard";
import styled from "styled-components";
import useProducts from "./useProducts";
import Spinner from "../../components/Spinner";
import { useShowSideBar } from "../../context/ShowSideBar";
import { useDeviceWidth } from "../../context/DeviceWidthContext";

function ProductsList({ offers, isLoadingFetch, category, categoryList }) {
  let products;
  const { data, isLoading } = useProducts();
  const { showSideBar } = useShowSideBar();
  const { isDesktopDevice } = useDeviceWidth();

  const responsive = {
    superLargeDesktop: {
      breakpoint: { max: 4000, min: 3000 },
      items: 5,
    },
    desktop: {
      breakpoint: { max: 2000, min: 1200 },
      items: 4,
    },
    notebook: {
      breakpoint: { max: 1200, min: 950 },
      items: 3,
    },
    tablet: {
      breakpoint: { max: 950, min: 600 },
      items: 3,
    },
    mobile: {
      breakpoint: { max: 600, min: 0 },
      items: 2,
    },
  };

  if (isLoading || isLoadingFetch) return <Spinner />;
  const offersProducts = data?.filter((product) => product.hasOffer === true);

  if (offers) {
    products = offersProducts;
  } else if (categoryList) {
    products = data.filter(
      (product) =>
        product.category === categoryList[0] ||
        product.category === categoryList[1] ||
        product.category === categoryList[2]
    );
  } else if (category) {
    products = data.filter((product) => product.category === category);
  } else {
    products = data;
  }

  return (
    <StyledList>
      <StyledCarousel
        arrows={showSideBar && !isDesktopDevice ? false : true}
        responsive={responsive}
        autoPlay={true}
        autoPlaySpeed={1500}
        pauseOnHover={true}
      >
        {products.map((product) => (
          <ProductCard product={product} key={product.name} />
        ))}
      </StyledCarousel>
    </StyledList>
  );
}

export default ProductsList;

const StyledList = styled.div`
  width: 100%;
  height: 100%;
  /* margin: 3rem 0rem; */
`;
const StyledCarousel = styled(Carousel)`
  height: 45rem;
  @media (max-width: 600px) {
    height: 29rem;
  }
  @media (min-width: 600px) {
    height: 33rem;
  }
  @media (min-width: 700px) {
    height: 38rem;
    padding-left: 2rem;
    padding-right: 2rem;
  }
  @media (min-width: 900px) {
    height: 42rem;
  }
  @media (min-width: 1100px) {
    height: 45rem;
  }
`;
