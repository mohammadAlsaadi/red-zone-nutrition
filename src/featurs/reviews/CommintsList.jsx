import styled from "styled-components";
import Commint from "./Commint";
import Spinner from "../../components/Spinner";
import useFetchReviews from "./useFetchReviews";
import { useParams } from "react-router-dom";

// const FAKE_COMMINT =
function CommintsList() {
  const { data, isLoading } = useFetchReviews();
  const { productId } = useParams();
  if (isLoading) return <Spinner />;
  const reviews = data?.filter(
    (review) => review.productId === Number(productId)
  );
  return (
    <CommintsListLayout>
      {reviews?.map((commint) => (
        <Commint commintInfo={commint} key={commint.id} />
      ))}
    </CommintsListLayout>
  );
}

export default CommintsList;
const CommintsListLayout = styled.div`
  display: flex;
  justify-content: flex-start;
  flex-direction: column;
  border-bottom: 1px solid var(--color-grey-300);
  gap: 1rem;
  padding: 2rem 1rem;
  @media (min-width: 1000px) {
    padding: 2rem 3rem;
    width: 60%;
  }
  height: 100%;
  width: 100%;
`;
