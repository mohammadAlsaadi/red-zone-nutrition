import styled from "styled-components";
import Header from "./Header";
import SideBar from "./SideBar";
import { Outlet, useLocation } from "react-router-dom";
import { useShowSideBar } from "../context/ShowSideBar";
import Footer from "./Footer";
import { useScrolled } from "../context/ScrolledContext";
import { useDeviceWidth } from "../context/DeviceWidthContext";
import { useBodyDirection } from "../context/BodyDirectionContext";
// import Heading from "./Heading";

function AppLayout() {
  const { showSideBar } = useShowSideBar();
  const { isDesktopDevice } = useDeviceWidth();
  const isContactUsPage = useLocation().pathname === "/contact-us";
  const isHomePage = useLocation().pathname === "/home";
  const { isScrolled } = useScrolled();
  const { isRtl } = useBodyDirection();
  return (
    <StyledAppLayout>
      {/* <AlertOffer>
        <Heading as="h4" color="var(--color-grey-700)">
          {t("Free delivery for orders over 70 JD")}
        </Heading>
      </AlertOffer> */}
      {showSideBar && <SideBar />}
      <StyledHeader
        isrtl={isRtl}
        showsidebar={showSideBar}
        isdesktopdevice={isDesktopDevice}
        showalert={isScrolled}
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
// const AlertOffer = styled.div`
//   display: flex;
//   align-items: center;
//   justify-content: center;
//   width: 100%;
//   height: 4rem;
//   background-color: var(--color-gold-500);
//   z-index: 1;
//   position: fixed;
// `;

const StyledHeader = styled.div`
  position: fixed;
  top: 0rem;
  /* top: ${(props) => (props.showalert ? "" : "4rem")}; */

  left: ${(props) =>
    props.showsidebar && !props.isdesktopdevice && !props.isrtl ? "0" : 0};
  right: ${(props) =>
    props.showsidebar && !props.isdesktopdevice && props.isrtl ? "0" : 0};
  z-index: 1;

  background-color: ${(props) =>
    props.isscrolled ? "var(--color-grey-0)" : ""};
  @media (max-width: 600px) {
    display: ${(props) => props.showsidebar && "none"};
  }
`;

const Main = styled.main`
  background-color: var(--color-grey-50);
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
