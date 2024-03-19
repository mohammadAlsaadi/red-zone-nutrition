import { createContext, useContext, useState } from "react";

const ReviewsContext = createContext();

function ReviewsProvider({ children }) {
  const [starsRating, setStarsRating] = useState(0);
  const [comment, setComment] = useState("");
  return (
    <ReviewsContext.Provider
      value={{ starsRating, setStarsRating, comment, setComment }}
    >
      {children}
    </ReviewsContext.Provider>
  );
}

function useReviews() {
  const context = useContext(ReviewsContext);
  if (context === undefined) {
    throw new Error("ReviewsContext was used outside of ReviewsContext");
  }
  return context;
}
export { ReviewsProvider, useReviews };
