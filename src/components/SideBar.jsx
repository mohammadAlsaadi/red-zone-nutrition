import styled from "styled-components";
import ButtonIcon from "./ButtonIcon";
import { HiOutlineXMark } from "react-icons/hi2";
import { useShowSideBar } from "../context/ShowSideBar";
import Heading from "./Heading";
import SideBarOptions from "./SideBarOptions";
import { useOutsideClick } from "../hooks/useOutsideClick";
import UserCard from "../featurs/authentication/UserCard";
import { useUser } from "../featurs/authentication/useUser";
import Logout from "./Logout";
import DropDownList from "./DropDownList";
import { useEffect, useState } from "react";
import toast from "react-hot-toast";
import Spinner from "./Spinner";
import Modal from "./Modal";
import Button from "./Button";
import { useNavigate } from "react-router-dom";
// import Uploader from "../data/Uploader";
function Sidebar() {
  const [language, setLanguage] = useState("English");
  const [country, setCountry] = useState("jordan");
  const { setShowSideBar } = useShowSideBar();
  const { isAuthenticated } = useUser();
  const { ref } = useOutsideClick(handleClose, true);
  const navigate = useNavigate();
  function handleNavigate(path) {
    navigate(path);
    setShowSideBar(false);
  }
  function handleClose() {
    setShowSideBar((show) => false);
  }
  // useEffect(() => {
  //   if (language !== "English")
  //     return toast.error("سيتم اضافة اللغة العربية قريبا ..");
  //   return null;
  // }, [language]);
  // if (language !== "English") return alert("mm",);
  return (
    <StyledSidebar ref={ref}>
      <StyledHeader>
        <Heading as="h3">Menu</Heading>
        <ButtonIcon onClick={handleClose}>
          <HiOutlineXMark color="red" />
        </ButtonIcon>
      </StyledHeader>
      <SideBarOptions />
      {/* <StyleCloser>
        <UserCard />
        <ButtonIcon onClick={handleClose}>
          <HiOutlineXMark color="red" />
        </ButtonIcon>
      </StyleCloser>

      <Heading as="h2">Options</Heading>

      <SideBarOptions /> */}
      {/* <Uploader /> */}
      <StyledFooter>
        <LayerOne>
          <DropDownList
            setter={setCountry}
            value={country}
            options={["jordan"]}
            labelText="country"
            width="50px"
            height="30px"
            withoutLabel={true}
            fontSize="x-small"
          />
          <DropDownList
            width="50px"
            height="30px"
            withoutLabel={true}
            setter={setLanguage}
            value={language}
            options={["English", "العربية"]}
            labelText="language"
            fontSize="x-small"
          />
        </LayerOne>
        <LayerTwo isauth={isAuthenticated}>
          {isAuthenticated ? (
            <UserCard />
          ) : (
            <Heading as="h6">Do not have an account ?</Heading>
          )}
          {isAuthenticated ? (
            <Logout />
          ) : (
            <Button
              onClick={() => handleNavigate("/login")}
              variation="primary"
              size="small"
            >
              sign in
            </Button>
          )}
        </LayerTwo>
      </StyledFooter>
    </StyledSidebar>
  );
}

export default Sidebar;

const StyledSidebar = styled.aside`
  display: flex;
  flex-direction: column;
  background-color: var(--color-grey-0);
  border: 1px solid var(--color-grey-100);
  grid-row: 1/-1;
  align-items: center;
  justify-content: space-between;
  height: 100%;
  overflow-y: hidden;
  position: fixed;
  z-index: 1;
  width: 30%;
  transform: scale(1); /* Add this line for initial scale */
  transition: opacity 1s ease-out 0.3s, box-shadow 0.5s ease-out,
    transform 0.5s ease-out;

  animation: fadeIn 1s ease-out forwards;

  @media (min-width: 900px) {
    display: none;
  }

  @keyframes fadeIn {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }
`;
const StyledHeader = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 15%;
  width: 100%;
  padding: 0rem 2rem;
  background-color: var(--color-grey-50);
  border-bottom: 1px solid var(--color-grey-300);
`;
// const StyleCloser = styled.div`
//   display: flex;
//   align-items: center;
//   justify-content: center;
//   width: 100%;
//   padding-top: 5px;
//   padding-right: 20px;
//   height: 7rem;
//   background-color: var(--color-grey-600);
// `;
const StyledFooter = styled.footer`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-end;
  padding-bottom: 1rem;

  height: 15%;
  width: 100%;
  background-color: var(--color-grey-50);
`;
const LayerOne = styled.div`
  display: flex;
  border-bottom: 1px solid var(--color-grey-200);
  border-top: 1px solid var(--color-grey-300);
  background-color: var(--color-grey-0);
  /* z-index: 1; */
  width: 100%;
  justify-content: space-between;
`;
const LayerTwo = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  padding-right: 1rem;
  /* padding-top: 1rem; */
  align-items: center;
  padding-left: ${(props) => (props.isauth ? "0rem" : "1rem")};
`;
