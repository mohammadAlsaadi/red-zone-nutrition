import { NavLink } from "react-router-dom";
import styled from "styled-components";
import {
  HiHomeModern,
  HiOutlineCalendarDays,
  HiOutlineCog6Tooth,
  HiOutlineHome,
  HiOutlineShoppingCart,
  HiOutlineSquares2X2,
  HiOutlineUser,
  HiOutlineUserPlus,
} from "react-icons/hi2";
import SwitchButton from "./SwitchButton";

const NavList = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 0.8rem;
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
    color: var(--color-grey-800);
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

function SideBarOptions() {
  return (
    <NavList>
      <li>
        <StyledNavLink to="/">
          <HiOutlineHome /> <span>Home</span>
        </StyledNavLink>
      </li>
      <li>
        <StyledNavLink to="products">
          <HiOutlineSquares2X2 />

          <span>Products</span>
        </StyledNavLink>
      </li>
      <li>
        <StyledNavLink to="cart">
          <HiOutlineShoppingCart />
          <span>Cart</span>
        </StyledNavLink>
      </li>
      <li>
        <StyledNavLink to="account">
          <HiOutlineUser />
          <span>Account</span>
        </StyledNavLink>
      </li>

      <li>
        <StyledNavLink to="settings">
          <HiOutlineCog6Tooth />
          <span>Settings</span>
        </StyledNavLink>
      </li>
      <li>
        <StyledNavLink>
          <span>Dark mode</span> <SwitchButton />
        </StyledNavLink>
      </li>
    </NavList>
  );
}

export default SideBarOptions;
