import { NavLink } from "react-router-dom";
import styled from "styled-components";
import SwitchButton from "./SwitchButton";

function Options() {
  return (
    <StyledOptions>
      <li>
        <StyledNavLink to="/">
          <span>Home</span>
        </StyledNavLink>
      </li>
      |
      <li>
        <StyledNavLink to="/products">
          <span>Products</span>
        </StyledNavLink>
      </li>
      |
      <li>
        <StyledNavLink to="cart">
          <span>Cart</span>
        </StyledNavLink>
      </li>
      |
      <li>
        <StyledNavLink to="account">
          <span>Account</span>
        </StyledNavLink>
      </li>
      |
      <li>
        <StyledNavLink to="settings">
          <span>Settings</span>
        </StyledNavLink>
      </li>
      |
      <DarkModeToggleContainer>
        <DarkModeText>Dark mode</DarkModeText> <SwitchButton />
      </DarkModeToggleContainer>
    </StyledOptions>
  );
}

export default Options;
const StyledOptions = styled.ul`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.8rem;
`;
const DarkModeToggleContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
  padding: 1rem;
`;
const DarkModeText = styled.div`
  color: var(--color-grey-600);
  cursor: auto;
`;
const StyledNavLink = styled(NavLink)`
  &:link,
  &:visited {
    display: flex;
    align-items: center;
    gap: 1.2rem;

    color: var(--color-grey-600);
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
    color: var(--color-red-500);
    background-color: var(--color-grey-50);
    border-radius: var(--border-radius-sm);
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
