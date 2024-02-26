import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import ProductCard from "../../components/ProductCard";
import styled from "styled-components";
// import { useShowSideBar } from "../../context/ShowSideBar";
import useProducts from "./useProducts";
import Spinner from "../../components/Spinner";

function ProductsList() {
  const { data: FAKE_DATA = [], isLoading } = useProducts();

  // const { showSideBar } = useShowSideBar();
  const responsive = {
    superLargeDesktop: {
      breakpoint: { max: 4000, min: 3000 },
      items: 5,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };
  if (isLoading) return <Spinner />;
  return (
    <StyledList>
      <Carousel responsive={responsive} autoPlay={true} autoPlaySpeed={1500}>
        {FAKE_DATA.map((product) => (
          <ProductCard product={product} key={product.name} />
        ))}
      </Carousel>
    </StyledList>
  );
}
export default ProductsList;
const StyledList = styled.div`
  width: 100%;
  height: 450px;
  margin: 3rem 0rem;
`;
