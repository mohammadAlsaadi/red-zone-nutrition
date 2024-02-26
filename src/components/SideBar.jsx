import styled from "styled-components";
import ButtonIcon from "./ButtonIcon";
import { HiOutlineXMark } from "react-icons/hi2";
import { useShowSideBar } from "../context/ShowSideBar";
import Heading from "./Heading";
import SideBarOptions from "./SideBarOptions";
import { useOutsideClick } from "../hooks/useOutsideClick";
function Sidebar() {
  const { setShowSideBar } = useShowSideBar();
  function handleClose() {
    setShowSideBar((show) => false);
  }
  const { ref } = useOutsideClick(handleClose, true);

  return (
    <StyledSidebar ref={ref}>
      <StyleCloser>
        <ButtonIcon onClick={handleClose}>
          <HiOutlineXMark color="red" />
        </ButtonIcon>
      </StyleCloser>

      <Heading as="h2">Options</Heading>

      <SideBarOptions />
      {/* <Uploader /> */}
    </StyledSidebar>
  );
}

export default Sidebar;

const StyledSidebar = styled.aside`
  background-color: var(--color-grey-50);
  border: 1px solid var(--color-grey-100);
  grid-row: 1/-1;
  display: flex;
  justify-content: flex-start;
  gap: 4rem;
  height: 100%;
  /* @media (max-width: 900px) { */
  position: absolute;
  width: 30%;
  transition: width 100ms ease;
  /* } */

  flex-direction: column;
  align-items: center;
  z-index: 1;
`;

const StyleCloser = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  width: 100%;
  padding-top: 30px;
  padding-right: 20px;
  height: 1rem;
`;
