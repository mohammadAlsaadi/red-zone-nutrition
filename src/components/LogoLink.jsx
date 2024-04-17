import styled from "styled-components";
const LOGO_ICONS_FACEBOOK =
  "https://spzjbqxdghtmflngjxqg.supabase.co/storage/v1/object/public/product-nutrition-facts/Facebook.svg";
const LOGO_ICONS_INSTAGRAM =
  "https://spzjbqxdghtmflngjxqg.supabase.co/storage/v1/object/public/product-nutrition-facts/Instagram.svg";

function LogoLink() {
  return (
    <StyledContainer>
      <StyledNavLink href="https://www.instagram.com/redzonenutritionjo/?hl=en">
        <LogoLinkContainer>
          <LogoImageLink src={LOGO_ICONS_INSTAGRAM} width={50} height={50} />
          <P>redzonenutritionjo</P>
        </LogoLinkContainer>
      </StyledNavLink>
      <StyledNavLink href="https://www.facebook.com/Redzonejordan/">
        <LogoLinkContainer>
          <LogoImageLink src={LOGO_ICONS_FACEBOOK} width={50} height={50} />
          <P>Red Zone Nutrition Jordan</P>
        </LogoLinkContainer>
      </StyledNavLink>
    </StyledContainer>
  );
}

export default LogoLink;

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
    transition: all 0.3s;
  }

  &:hover,
  &:active,
  &.active:link,
  &.active:visited {
    scale: calc(1.1);
  }
`;
const LogoImageLink = styled.img`
  text-align: center;
  padding-top: 2rem;
  padding-left: 1rem;
`;
