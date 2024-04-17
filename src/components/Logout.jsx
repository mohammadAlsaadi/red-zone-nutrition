import { useLogout } from "../featurs/authentication/useLogout";
import SpinnerMini from "./SpinnerMini";
import ButtonText from "./ButtonText";
import { useTranslation } from "react-i18next";
function Logout() {
  const { logout, isLogingOut } = useLogout();
  const { t } = useTranslation();

  return (
    <ButtonText
      color="red"
      fontSize="x-small"
      disabled={isLogingOut}
      onClick={() => logout()}
    >
      {isLogingOut ? <SpinnerMini /> : <p>{t("Logout")}</p>}
    </ButtonText>
  );
}

export default Logout;
