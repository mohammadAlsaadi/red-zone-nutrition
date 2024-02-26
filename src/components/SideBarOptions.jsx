import { NavLink } from "react-router-dom";
import styled from "styled-components";
import {
  HiOutlineCog6Tooth,
  HiOutlineHome,
  HiOutlineShoppingCart,
  HiOutlineSquares2X2,
  HiOutlineUser,
} from "react-icons/hi2";
import SwitchButton from "./SwitchButton";
import { useShowSideBar } from "../context/ShowSideBar";

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
  const { setShowSideBar } = useShowSideBar();
  const handleCloseSideBar = () => {
    setShowSideBar(false);
  };
  return (
    <NavList>
      <li>
        <StyledNavLink to="/" onClick={handleCloseSideBar}>
          <HiOutlineHome /> <span>Home</span>
        </StyledNavLink>
      </li>
      <li>
        <StyledNavLink to="products" onClick={handleCloseSideBar}>
          <HiOutlineSquares2X2 />

          <span>Products</span>
        </StyledNavLink>
      </li>
      <li>
        <StyledNavLink to="cart" onClick={handleCloseSideBar}>
          <HiOutlineShoppingCart />
          <span>Cart</span>
        </StyledNavLink>
      </li>
      <li>
        <StyledNavLink to="account" onClick={handleCloseSideBar}>
          <HiOutlineUser />
          <span>Account</span>
        </StyledNavLink>
      </li>

      <li>
        <StyledNavLink to="settings" onClick={handleCloseSideBar}>
          <HiOutlineCog6Tooth />
          <span>Settings</span>
        </StyledNavLink>
      </li>
      <li>
        {/* <li>
          <StyledNavLink>
            <Logout />
          </StyledNavLink>
        </li> */}
        <StyledNavLink>
          <span>Dark mode</span> <SwitchButton />
        </StyledNavLink>
      </li>
    </NavList>
  );
}

export default SideBarOptions;
