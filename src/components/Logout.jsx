import ButtonIcon from "./ButtonIcon";
import { useLogout } from "../featurs/authentication/useLogout";
import SpinnerMini from "./SpinnerMini";
import ButtonText from "./ButtonText";
function Logout() {
  const { logout, isLogingOut } = useLogout();
  return (
    <ButtonText
      color="red"
      fontSize="x-small"
      disabled={isLogingOut}
      onClick={() => logout()}
    >
      {isLogingOut ? <SpinnerMini /> : <p>Logout</p>}
    </ButtonText>
  );
}

export default Logout;
