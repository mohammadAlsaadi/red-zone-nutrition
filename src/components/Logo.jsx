import styled from "styled-components";
import { useDeviceWidth } from "../context/DeviceWidthContext";
// import { useDarkMode } from "../context/DarkModeContext";

function Logo({ width, height }) {
  //   const { isDarkMode } = useDarkMode();
  //   const src = isDarkMode ? "/logo-dark.png" : "/logo-light.png";
  const { isDesktopDevice } = useDeviceWidth();
  return (
    <StyledLogo>
      <Img
        src="redzone.jpg"
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
  padding-bottom: 2rem;
  padding-left: 1rem;
`;

const Img = styled.img`
  /* height: 6.6rem;
    width: auto; */
  border-radius: 5rem;
`;
