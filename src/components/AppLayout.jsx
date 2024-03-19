import styled from "styled-components";
import Header from "./Header";
import SideBar from "./SideBar";
import { Outlet, useLocation } from "react-router-dom";
import { useShowSideBar } from "../context/ShowSideBar";
import Footer from "./Footer";
import { useScrolled } from "../context/ScrolledContext";
import { useDeviceWidth } from "../context/DeviceWidthContext";

function AppLayout() {
  const { showSideBar } = useShowSideBar();
  const { isDesktopDevice } = useDeviceWidth();

  const isHomePage = useLocation().pathname === "/home";
  const calculateCalories = useLocation().pathname === "/calculate-calories";

  const { isScrolled } = useScrolled();
  return (
    <StyledAppLayout>
      {/* <Header /> */}
      {showSideBar && <SideBar />}
      <StyledHeader
        showsidebar={showSideBar}
        isdesktopdevice={isDesktopDevice}
        isscrolled={isHomePage ? isScrolled : true}
      >
        <Header />
      </StyledHeader>
      <Main>
        <Container>
          <Outlet />
        </Container>
        <Footer />
      </Main>
    </StyledAppLayout>
  );
}

export default AppLayout;

const StyledAppLayout = styled.div`
  /* @media (max-width: 900px) { */
  background-color: var(--color-grey-0);
  display: flex;
  flex-direction: column;
  overflow: hidden;
  height: 100%;
  /* overflow: scroll; */
  /* scrollbar-width: thin; */
  /* scrollbar-color: var(--color-grey-300) var(--color-grey-400);

  &::-webkit-scrollbar {
    width: 12px;
  }

  &::-webkit-scrollbar-thumb {
    background-color: var(--color-grey-300);
    border-radius: 8px;
  }

  &::-webkit-scrollbar-track {
    background-color: var(--color-grey-300);
  } */
  /* } */
`;
const StyledHeader = styled.div`
  position: fixed;
  top: 0;
  left: ${(props) => (props.showsidebar && !props.isdesktopdevice ? "30%" : 0)};
  right: 0;
  z-index: 1;

  background-color: ${(props) =>
    props.isscrolled ? "var(--color-grey-0)" : ""};
`;

const Main = styled.main`
  background-color: var(--color-grey-50);
  /* padding: 1rem 2.8rem 1.4rem; */
  height: 100%;
  width: 100%;
  padding-top: 10rem;
`;
const Container = styled.div`
  width: 100%;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  gap: 3.2rem;
`;
