import styled from "styled-components";
import Logo from "./Logo";

function LogoLink() {
  return (
    <StyledContainer>
      <StyledNavLink href="https://www.instagram.com/redzonenutritionjo/?hl=en">
        <LogoLinkContainer>
          <Logo src="Instagram.svg" width={30} height={35} />
          <P>redzonenutritionjo</P>
        </LogoLinkContainer>
      </StyledNavLink>
      <StyledNavLink href="https://www.facebook.com/Redzonejordan/">
        <LogoLinkContainer>
          <Logo src="Facebook.svg" width={30} height={35} />
          <P>Red Zone Nutrition Jordan</P>
        </LogoLinkContainer>
      </StyledNavLink>
    </StyledContainer>
  );
}

export default LogoLink;

// const StyledLogoLink = styled.a`
//   cursor: pointer;
//   height: 10px;
// `;
const LogoLinkContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
`;
const P = styled.p`
  font-size: small;
  color: #f3f4f6;
  padding-top: 10px;
`;
const StyledContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  /* gap: 3rem; */
`;
const StyledNavLink = styled.a`
  &:link,
  &:visited {
    display: flex;
    align-items: center;
    gap: 1.2rem;

    color: var(--color-grey-600);
    font-size: 1.6rem;
    font-weight: 500;
    /* padding: 1.2rem 2.4rem; */
    transition: all 0.3s;
  }

  /* This works because react-router places the active class on the active NavLink */
  &:hover,
  &:active,
  &.active:link,
  &.active:visited {
    /* color: var(--color-grey-800); */
    scale: calc(1.1);
    /* border-radius: var(--border-radius-sm); */
  }
`;
