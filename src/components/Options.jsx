import { NavLink, useLocation } from "react-router-dom";
import styled from "styled-components";
import SwitchButton from "./SwitchButton";
import { useScrolled } from "../context/ScrolledContext";

function Options() {
  const { isScrolled } = useScrolled();
  const isHomePagePath = useLocation().pathname === "/home";

  return (
    <>
      {isHomePagePath ? (
        <StyledOptionsHomePage
          ishomepagepath={isHomePagePath}
          isscrolled={isScrolled}
        >
          <li>
            <StyledNavLink isscrolled={isScrolled} to="/">
              <span>Home</span>
            </StyledNavLink>
          </li>

          <li>
            <StyledNavLink to="/products/all" isscrolled={isScrolled}>
              <span>Products</span>
            </StyledNavLink>
          </li>

          <li>
            <StyledNavLink to="/cart" isscrolled={isScrolled}>
              <span>Cart</span>
            </StyledNavLink>
          </li>

          <li>
            <StyledNavLink to="/account" isscrolled={isScrolled}>
              <span>Account</span>
            </StyledNavLink>
          </li>

          <li>
            <StyledNavLink to="/settings" isscrolled={isScrolled}>
              <span>Settings</span>
            </StyledNavLink>
          </li>

          {/* <DarkModeToggleContainer>
        <DarkModeText>Dark mode</DarkModeText> <SwitchButton />
      </DarkModeToggleContainer> */}
        </StyledOptionsHomePage>
      ) : (
        <StyledOptions ishomepagepath={isHomePagePath} isscrolled={isScrolled}>
          <li>
            <StyledNavLink to="/">
              <span>Home</span>
            </StyledNavLink>
          </li>

          <li>
            <StyledNavLink to="/products/all" isscrolled={isScrolled}>
              <span>Products</span>
            </StyledNavLink>
          </li>

          <li>
            <StyledNavLink to="/cart" isscrolled={isScrolled}>
              <span>Cart</span>
            </StyledNavLink>
          </li>

          <li>
            <StyledNavLink to="/account" isscrolled={isScrolled}>
              <span>Account</span>
            </StyledNavLink>
          </li>

          <li>
            <StyledNavLink to="/settings" isscrolled={isScrolled}>
              <span>Settings</span>
            </StyledNavLink>
          </li>

          {/* <DarkModeToggleContainer>
        <DarkModeText>Dark mode</DarkModeText> <SwitchButton />
      </DarkModeToggleContainer> */}
        </StyledOptions>
      )}
    </>
  );
}

export default Options;
const StyledOptionsHomePage = styled.ul`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.8rem;
  color: ${(props) =>
    !props.isscrolled ? "var(--color-grey-100)" : "var(--color-grey-800)"};
`;
const StyledOptions = styled.ul`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.8rem;
  color: var(--color-grey-800);
`;

const StyledNavLink = styled(NavLink)`
  &:link,
  &:visited {
    display: flex;
    align-items: center;
    gap: 1.2rem;

    font-size: 1.6rem;
    font-weight: 500;
    padding: 1.2rem 2.4rem;
    transition: all 0.3s;
  }

  /* This works because react-router places the active class on the active NavLink */
  &:hover,
  &:active,
  &.active:link,
  &.active:visited {
    color: var(--color-gold-500);

    /* background-color: var(--color-grey-50);
    border-radius: var(--border-radius-sm); */
  }

  & svg {
    width: 2.4rem;
    height: 2.4rem;
    color: var(--color-grey-400);
    transition: all 0.3s;
  }

  &:hover svg,
  &:active svg,
  &.active:link svg,
  &.active:visited svg {
    color: var(--color-red-500);
  }
`;
