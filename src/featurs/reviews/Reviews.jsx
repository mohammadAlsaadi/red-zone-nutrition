import styled from "styled-components";
import StarRating from "../../components/StarRating";
import Heading from "../../components/Heading";
import CommintsList from "./CommintsList";
import useFetchReviews from "./useFetchReviews";
import Spinner from "../../components/Spinner";
import { useParams } from "react-router-dom";
import WriteReview from "./WriteReview";
import { useUser } from "../authentication/useUser";
import { useTranslation } from "react-i18next";
function Reviews() {
  const { data, isLoading } = useFetchReviews();
  const { user } = useUser();
  const userId = user?.id;
  const { productId } = useParams();
  const { t } = useTranslation();

  if (isLoading) return <Spinner />;

  const reviews = data?.filter(
    (review) => review.productId === Number(productId)
  );
  const isUserReviewedBefore = Boolean(
    reviews.find((review) => review.userId === userId)
  );
  const avgRatings = reviews?.reduce(
    (prev, curr) => prev + curr.rating / reviews.length,
    0
  );
  const fiveStars = reviews.filter(
    (review) => review.rating === Number(5)
  ).length;
  const fourStars = reviews.filter(
    (review) => review.rating === Number(4)
  ).length;
  const threeStars = reviews.filter(
    (review) => review.rating === Number(3)
  ).length;
  const twoStars = reviews.filter(
    (review) => review.rating === Number(2)
  ).length;
  const oneStar = reviews.filter(
    (review) => review.rating === Number(1)
  ).length;
  const reviewsForProduct = data?.filter(
    (product) => product.productId === Number(productId)
  );

  return (
    <ReviewsContainer>
      <RatingOverView>
        <ReviewsSummary>
          <Heading as="h3">{t("Reviews")} </Heading>
          <SummaryHeader />
        </ReviewsSummary>
        <AvgRating>
          <StarRatingOverView>
            <StarRating rating={Math.round(avgRatings)} readable={true} />
            <Heading color="var(--color-grey-500)" as="h5">
              {reviewsForProduct.length}{" "}
              {reviewsForProduct.length > 1 ? t("Review") : t("Review")}
            </Heading>
            <Heading color="var(--color-grey-400)" as="h2">
              {Math.round(avgRatings)}
            </Heading>
          </StarRatingOverView>
          <VerticalBar />
          <ReviewAnalysis>
            <SingleAnalysis>
              <StarRating rating={5} readable={true} size={15} />
              <Heading color="var(--color-grey-500)" as="h7">
                ({fiveStars})
              </Heading>
            </SingleAnalysis>
            <SingleAnalysis>
              <StarRating rating={4} readable={true} size={15} />
              <Heading color="var(--color-grey-500)" as="h7">
                ({fourStars})
              </Heading>
            </SingleAnalysis>
            <SingleAnalysis>
              <StarRating rating={3} readable={true} size={15} />
              <Heading color="var(--color-grey-500)" as="h7">
                ({threeStars})
              </Heading>
            </SingleAnalysis>
            <SingleAnalysis>
              <StarRating rating={2} readable={true} size={15} />
              <Heading color="var(--color-grey-500)" as="h7">
                ({twoStars})
              </Heading>
            </SingleAnalysis>
            <SingleAnalysis>
              <StarRating rating={1} readable={true} size={15} />
              <Heading color="var(--color-grey-500)" as="h7">
                ({oneStar})
              </Heading>
            </SingleAnalysis>
          </ReviewAnalysis>
          <VerticalBar />
          <WriteReview isUserReviewedBefore={isUserReviewedBefore} />
        </AvgRating>
        <UnderLine />
      </RatingOverView>
      <CommintsList />
    </ReviewsContainer>
  );
}

export default Reviews;
const ReviewsContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  gap: 1rem;
  background-color: var(--color-grey-50);
`;
const ReviewsSummary = styled.div`
  padding: 2rem;
  display: flex;
  align-items: flex-start;
  justify-content: flex-start;
  gap: 1rem;
  width: 100%;
`;
const SummaryHeader = styled.div`
  width: 80%;
  top: 20px;
  position: relative;
  border-top: 1px solid var(--color-grey-300);
`;
const RatingOverView = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  width: 100%;
  height: 100%;
`;
const AvgRating = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  padding: 0rem 4rem 2rem;
  width: 100%;
  @media (max-width: 600px) {
    padding: 0rem 1rem 1rem;
  }
`;

const VerticalBar = styled.div`
  display: flex;
  flex-direction: column;

  border-left: 1px solid var(--color-grey-300);
  vertical-align: middle;
  text-align: left;
  height: 110px;
`;

const StarRatingOverView = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-left: 1rem;
`;
const ReviewAnalysis = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding-left: 1rem;
`;
const SingleAnalysis = styled.div`
  display: flex;
  align-items: flex-start;
  gap: 2px;
`;

const UnderLine = styled.div`
  border-bottom: 1.5px solid var(--color-grey-300);
  width: 80%;
  padding-left: 2rem;
  @media (max-width: 700px) {
    width: 60%;
  }
`;
