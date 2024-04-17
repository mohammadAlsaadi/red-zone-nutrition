import styled from "styled-components";
import Heading from "../../components/Heading";
import StarRating from "../../components/StarRating";
import formatJordanDateTime from "../../utils/helper";
import { DEFAULT_USER_IMG } from "../authentication/UserCard";

function Commint({ commintInfo }) {
  const { userName, rating, comment, created_at } = commintInfo;

  return (
    <CommintLayout>
      <UserLayer>
        <UserInfo>
          <Avatar alt={`avatar of ${userName}`} src={DEFAULT_USER_IMG} />
          <UserRating>
            <Heading as="h6" color="var(--color-red-500)">
              {userName}
            </Heading>
            <StarRating rating={rating} size={12} readable={true} />
          </UserRating>
        </UserInfo>
        <Heading as="h7">{formatJordanDateTime(created_at)}</Heading>
      </UserLayer>
      <CommintLayer>
        <Heading as="h5">{comment}</Heading>
      </CommintLayer>
    </CommintLayout>
  );
}

export default Commint;
const CommintLayout = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  border-bottom: 1px solid var(--color-grey-300);
  padding-bottom: 1rem;
`;
const UserLayer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
`;
const UserInfo = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: flex-start;
  gap: 1rem;
`;
const UserRating = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
`;

const CommintLayer = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  justify-content: space-between;
  padding-top: 0.8rem;
  padding-left: 1rem;
`;

const Avatar = styled.img`
  display: block;
  width: 4rem;
  width: 3.6rem;
  aspect-ratio: 1;
  object-fit: cover;
  object-position: center;
  border-radius: 50%;
  outline: 2px solid var(--color-grey-100);
`;
