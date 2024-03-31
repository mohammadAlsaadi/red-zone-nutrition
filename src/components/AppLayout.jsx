import styled from "styled-components";
import Header from "./Header";
import SideBar from "./SideBar";
import { Outlet, useLocation } from "react-router-dom";
import { useShowSideBar } from "../context/ShowSideBar";
import Footer from "./Footer";
import { useScrolled } from "../context/ScrolledContext";
import { useDeviceWidth } from "../context/DeviceWidthContext";
import { useBodyDirection } from "../context/BodyDirectionContext";

function AppLayout() {
  const { showSideBar } = useShowSideBar();
  const { isDesktopDevice } = useDeviceWidth();
  const isContactUsPage = useLocation().pathname === "/contact-us";
  const isHomePage = useLocation().pathname === "/home";
  console.log(isContactUsPage);
  const { isScrolled } = useScrolled();
  const { isRtl } = useBodyDirection();
  return (
    <StyledAppLayout>
      {/* <Header /> */}
      {showSideBar && <SideBar />}
      <StyledHeader
        isrtl={isRtl}
        showsidebar={showSideBar}
        isdesktopdevice={isDesktopDevice}
        isscrolled={isHomePage || isContactUsPage ? isScrolled : true}
      >
        <Header />
      </StyledHeader>
      <Main iscontactuspage={isContactUsPage}>
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
  background-color: var(--color-grey-0);
  display: flex;
  flex-direction: column;
  overflow: hidden;
  height: 100%;
`;
const StyledHeader = styled.div`
  position: fixed;
  top: 0;
  left: ${(props) =>
    props.showsidebar && !props.isdesktopdevice && !props.isrtl ? "30%" : 0};
  right: ${(props) =>
    props.showsidebar && !props.isdesktopdevice && props.isrtl ? "30%" : 0};
  z-index: 1;

  background-color: ${(props) =>
    props.isscrolled ? "var(--color-grey-0)" : ""};
`;

const Main = styled.main`
  background-color: var(--color-grey-50);
  /* padding: 1rem 2.8rem 1.4rem; */
  height: 100%;
  width: 100%;
  padding-top: ${(props) => (props.iscontactuspage ? "0rem" : "10rem")};
  @media (min-width: 900px) {
    padding-top: ${(props) => (props.iscontactuspage ? "0rem" : "15rem")};
  }
`;
const Container = styled.div`
  width: 100%;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  gap: 3.2rem;
`;
