import styled from "styled-components";
import { useDeviceWidth } from "../context/DeviceWidthContext";
import { useNavigate } from "react-router-dom";
const IMG_LOGO =
  "https://spzjbqxdghtmflngjxqg.supabase.co/storage/v1/object/public/product-nutrition-facts/redzone.png";
function Logo({ src, width, height }) {
  const { isDesktopDevice } = useDeviceWidth();
  const navigate = useNavigate();

  return (
    <StyledLogo>
      <Img
        onClick={() => {
          navigate("/home");
          window.scrollTo(0, 0);
        }}
        src={src || IMG_LOGO}
        alt="Logo"
        width={!width ? (isDesktopDevice ? 100 : 90) : width}
        height={!height ? (isDesktopDevice ? 100 : 90) : height}
      />
    </StyledLogo>
  );
}

export default Logo;

const StyledLogo = styled.div`
  text-align: center;
  padding-top: 2rem;
  padding-left: 1rem;
  cursor: pointer;
`;

const Img = styled.img`
  @media (max-width: 500px) {
    width: 120px;
    height: 50px;
  }
  @media (min-width: 500px) {
    width: 180px;
    height: 60px;
  }
  @media (min-width: 700px) {
    width: 250px;
    height: 70px;
  }
  @media (min-width: 900px) {
    width: 300px;
    height: 80px;
  }
`;
