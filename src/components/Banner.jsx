import styled from "styled-components";

function Banner({ src, width = 50, height = 50 }) {
  return (
    <StyledBanner>
      <img src={src} alt="new" width={width} height={height} />
    </StyledBanner>
  );
}

export default Banner;
const StyledBanner = styled.div`
  z-index: 1;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  height: 0%;
`;
