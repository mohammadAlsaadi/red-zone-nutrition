import { HiArrowRightOnRectangle } from "react-icons/hi2";
import ButtonIcon from "./ButtonIcon";
import { useLogout } from "../featurs/authentication/useLogout";
import SpinnerMini from "./SpinnerMini";
import styled from "styled-components";
import ButtonText from "./ButtonText";
function Logout() {
  const { logout, isLogingOut } = useLogout();
  return (
    <ButtonIcon disabled={isLogingOut} onClick={() => logout()}>
      {isLogingOut ? (
        <SpinnerMini />
      ) : (
        <ButtonText color="red">Logout</ButtonText>
      )}
    </ButtonIcon>
  );
}

export default Logout;
