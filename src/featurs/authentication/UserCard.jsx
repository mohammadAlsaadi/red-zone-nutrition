import styled from "styled-components";
import { useUser } from "./useUser";
import { useScrolled } from "../../context/ScrolledContext";
import { useLocation } from "react-router-dom";
import { useDeviceWidth } from "../../context/DeviceWidthContext";
export const DEFAULT_USER_IMG =
  "https://spzjbqxdghtmflngjxqg.supabase.co/storage/v1/object/public/product-nutrition-facts/default-user.jpg";
function UserCard() {
  const { isScrolled } = useScrolled();
  const { user } = useUser();
  const { fullName, avatar } = user.user_metadata;
  const isHomePagePath = useLocation().pathname === "/home";
  const { isDesktopDevice } = useDeviceWidth();
  const color =
    isScrolled || !isHomePagePath
      ? "var(--color-grey-800)"
      : "var(--color-grey-0)";

  return (
    <CartContainer>
      <StyledUserCard>
        <Avatar
          alt={`avatar of ${fullName}`}
          src={avatar || DEFAULT_USER_IMG}
        />
        <StyledName
          color={color}
          isdesktopdevice={isDesktopDevice}
          //  ishomepagepath={isHomePagePath} isscrolled={isScrolled}
        >
          {fullName}
        </StyledName>
      </StyledUserCard>
    </CartContainer>
  );
}

export default UserCard;
const CartContainer = styled.div`
  border: none;
  padding: 2px 6px;
  border-radius: 10px;
  /* width: 40%; */
  /* @media (min-width: 1200px) {
    width: 100%;
  } */
`;
const StyledUserCard = styled.div`
  display: flex;
  gap: 1.2rem;
  align-items: center;
  font-weight: 500;
  font-size: 1.4rem;
  color: var(--color-grey-600);
`;
const StyledName = styled.div`
  color: ${(props) => props.color};
  font-size: x-small;
`;
const Avatar = styled.img`
  display: block;
  width: 4rem;
  width: 3.2rem;
  aspect-ratio: 1;
  object-fit: cover;
  object-position: center;
  border-radius: 50%;
  outline: 2px solid var(--color-grey-100);
`;
