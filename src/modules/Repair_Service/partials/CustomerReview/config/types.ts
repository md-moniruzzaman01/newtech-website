// src/config/types.ts

export type Review = {
  id: number;
  name: string;
  date: string;
  rating: number;
  comment: string;
};

export type CustomerReviewProps = {
  reviews: Review[];
  setReviews: React.Dispatch<React.SetStateAction<Review[]>>;
  showModal: boolean;
  setShowModal: React.Dispatch<React.SetStateAction<boolean>>;
  newReview: { name: string; rating: string; comment: string };
  setNewReview: React.Dispatch<
    React.SetStateAction<{ name: string; rating: string; comment: string }>
  >;
  handleSubmit: () => void;
};
