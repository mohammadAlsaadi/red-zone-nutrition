import styled from "styled-components";
import { useDeviceWidth } from "../context/DeviceWidthContext";
const IMG_LOGO =
  "https://spzjbqxdghtmflngjxqg.supabase.co/storage/v1/object/public/product-nutrition-facts/redzone.png";
// "https://spzjbqxdghtmflngjxqg.supabase.co/storage/v1/object/public/product-nutrition-facts/redzone.jpg";
function Logo({ src, width, height }) {
  const { isDesktopDevice } = useDeviceWidth();

  return (
    <StyledLogo>
      <Img
        src={src || IMG_LOGO} // Use the provided src or default to "redzone.jpg"
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
  /* padding-bottom: 2rem; */
  padding-left: 1rem;
`;

const Img = styled.img`
  /* border-radius: 5rem; */
`;
