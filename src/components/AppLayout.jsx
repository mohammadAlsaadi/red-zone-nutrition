import styled from "styled-components";
import Header from "./Header";
import SideBar from "./SideBar";
import { Outlet } from "react-router-dom";
import { useShowSideBar } from "../context/ShowSideBar";

function AppLayout() {
  const { showSideBar } = useShowSideBar();

  return (
    <StyledAppLayout showen={showSideBar}>
      <Header />
      {showSideBar && <SideBar />}
      <Main>
        <Container>
          <Outlet />
        </Container>
      </Main>
    </StyledAppLayout>
  );
}

export default AppLayout;

const StyledAppLayout = styled.div`
  @media (max-width: 900px) {
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

  ${(props) =>
    props.showen
      ? `
      display: grid;
      grid-template-columns: 26rem 1fr;
      grid-template-rows: auto 1fr;
      height: 100vh;
    `
      : "display: none;"};
`;
const Main = styled.main`
  background-color: var(--color-grey-50);
  padding: 1rem 2.8rem 6.4rem;
  height: 100%;
`;
const Container = styled.div`
  max-width: 120rem;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  gap: 3.2rem;
`;
