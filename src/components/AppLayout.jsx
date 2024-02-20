import styled from "styled-components";
import Header from "./Header";
import SideBar from "./SideBar";
import { Outlet } from "react-router-dom";
import { useShowSideBar } from "../context/ShowSideBar";
import Footer from "./Footer";

function AppLayout() {
  const { showSideBar } = useShowSideBar();

  return (
    <StyledAppLayout>
      <Header />
      {showSideBar && <SideBar />}
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
  @media (max-width: 900px) {
    background-color: var(--color-grey-0);
    display: flex;
    flex-direction: column;
    height: 100vh;
    overflow: scroll;
    scrollbar-width: thin;
    scrollbar-color: var(--color-grey-300) var(--color-grey-400);

    &::-webkit-scrollbar {
      width: 12px;
    }

    &::-webkit-scrollbar-thumb {
      background-color: var(--color-grey-300);
      border-radius: 8px;
    }

    &::-webkit-scrollbar-track {
      background-color: var(--color-grey-300);
    }
  }
`;
const Main = styled.main`
  background-color: var(--color-grey-50);
  padding: 1rem 2.8rem 1.4rem;
  height: 100%;
`;
const Container = styled.div`
  max-width: 120rem;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  gap: 3.2rem;
`;
