import styled from "styled-components";
import DarkModeToggle from "./DarkModeToggle";
import ButtonIcon from "./ButtonIcon";
import { HiOutlineShoppingCart, HiOutlineUser } from "react-icons/hi2";
import SearchBar from "./SearchBar";
import { useDeviceWidth } from "../context/DeviceWidthContext";
import { HiOutlineBars3BottomLeft } from "react-icons/hi2";
import { useShowSideBar } from "../context/ShowSideBar";
import Logo from "./Logo";
import Heading from "./Heading";
import { Link, useNavigate } from "react-router-dom";
import CartIcon from "./CartIcon";
import { useUser } from "../featurs/authentication/useUser";
import UserCart from "../featurs/authentication/UserCart";
import Logout from "./Logout";

function Header() {
  // const { isDesktopDevice } = useDeviceWidth();
  const { showSideBar, setShowSideBar } = useShowSideBar();
  const { isAuthenticated } = useUser();
  const navigate = useNavigate();

  return (
    <StyledHeader>
      <LayerOne>
        <Link to="home">
          <Logo />
        </Link>
        <Heading as="h2">Company Name</Heading>
        <OptionsContainer>
          {isAuthenticated ? (
            <UserCart />
          ) : (
            <Signin onClick={() => navigate("/login")}>
              <P>Sign in</P>
            </Signin>
          )}
          <CartIcon />
        </OptionsContainer>
      </LayerOne>
      <LayerTwo>
        {!showSideBar && (
          <OptionIcon>
            <ButtonIcon
              width={30}
              height={30}
              onClick={() => setShowSideBar((show) => true)}
            >
              <HiOutlineBars3BottomLeft color="red" />
            </ButtonIcon>
          </OptionIcon>
        )}

        <SearchBar />
        {isAuthenticated && <Logout />}
      </LayerTwo>
    </StyledHeader>
  );
}

export default Header;
const StyledHeader = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-direction: column;
  gap: 1rem;
  background-color: var(--color-grey-50);
  height: 18rem; //15
  /* border-bottom: 1px solid var(--color-grey-200); */
`;
const OptionsContainer = styled.div`
  display: flex;
  gap: 20px;
`;
const OptionIcon = styled.div`
  /* Default styles for smaller screens */

  display: flex;
  /* padding-top: 2rem; */
  padding-bottom: 8rem;
  cursor: pointer;

  @media (min-width: 900px) {
    display: none;
  }
`;
const LayerOne = styled.div`
  margin-top: 3rem;
  height: 50%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  padding-left: 30px;
  padding-right: 30px;
`;
const LayerTwo = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  height: 50%; //temp
  width: 100%;
  padding: 0px 30px;
  /* padding-left: 10rem; */

  margin-top: 10px;
  @media (max-width: 900px) {
    /* justify-content: flex-end; */
    /* gap: 20rem; */
    /* padding: 0px 20px; */
    /* justify-content: space-between; */
    /* gap: 0rem; */
  }
`;
const Signin = styled.div`
  background-color: var(--color-grey-100);
  display: flex;
  align-items: center;
  justify-content: center;
  width: 8rem;
  height: 4rem;
  border: none;
  border-radius: 1rem;
  &:hover {
    background-color: var(--color-grey-200);
  }
  cursor: pointer;
`;
const P = styled.p`
  color: var(--color-red-500);
`;
