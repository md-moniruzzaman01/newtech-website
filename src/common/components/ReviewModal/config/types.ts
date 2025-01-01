export interface Review {
  name: string; // Changed to required
  rating: string; // Changed to required
  comment: string;
}

export interface ReviewModalProps {
  showModal: boolean;
  setShowModal: (value: boolean) => void;
  newReview: Review;
  setNewReview: React.Dispatch<React.SetStateAction<Review>>; // Corrected this line
  handleSubmit: () => void;
}
