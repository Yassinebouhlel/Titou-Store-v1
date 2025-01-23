import React, { useState } from "react";
import { FaStar } from "react-icons/fa";

interface Review {
  name: string;
  rating: number;
  comment: string;
  date: string;
}

const ReviewSection = () => {
  const [reviews, setReviews] = useState<Review[]>([
    {
      name: "John Doe",
      rating: 5,
      comment: "Amazing product! Highly recommend.",
      date: new Date().toLocaleDateString(),
    },
    {
      name: "Sarah Williams",
      rating: 4,
      comment: "Great quality but took time to ship.",
      date: new Date().toLocaleDateString(),
    },
  ]);
  const [rating, setRating] = useState(0);
  const [hover, setHover] = useState(0);
  const [name, setName] = useState("");
  const [comment, setComment] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (name && comment && rating) {
      const newReview: Review = {
        name,
        rating,
        comment,
        date: new Date().toLocaleDateString(),
      };
      setReviews([newReview, ...reviews]); // Add new review at the top
      setName("");
      setComment("");
      setRating(0);
    }
  };

  return (
    <div className="w-full max-w-2xl mx-auto mt-8 p-6 bg-white shadow-lg rounded-lg">
      {/* Review Form */}
      <h2 className="text-xl font-semibold text-gray-800 mb-4">Leave a Review</h2>
      <form onSubmit={handleSubmit}>
        {/* Name Input */}
        <input
          type="text"
          placeholder="Your Name"
          className="w-full p-3 border rounded mb-3 focus:outline-none focus:ring-2 focus:ring-gray-400"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />

        {/* Star Rating */}
        <div className="flex space-x-1 mb-3">
          {[1, 2, 3, 4, 5].map((star) => (
            <FaStar
              key={star}
              className={`cursor-pointer text-2xl ${
                (hover || rating) >= star ? "text-yellow-500" : "text-gray-300"
              }`}
              onMouseEnter={() => setHover(star)}
              onMouseLeave={() => setHover(0)}
              onClick={() => setRating(star)}
            />
          ))}
        </div>

        {/* Comment Box */}
        <textarea
          placeholder="Write your review..."
          className="w-full p-3 border rounded mb-3 h-28 focus:outline-none focus:ring-2 focus:ring-gray-400"
          value={comment}
          onChange={(e) => setComment(e.target.value)}
          required
        ></textarea>

        {/* Submit Button */}
        <button
          type="submit"
          className="w-full bg-black text-white py-3 rounded-lg hover:bg-gray-800 transition"
        >
          Submit Review
        </button>
      </form>

      {/* Reviews List */}
      <h3 className="text-lg font-semibold text-gray-800 mt-6 mb-4">Customer Reviews</h3>
      {reviews.length === 0 ? (
        <p className="text-gray-600">No reviews yet. Be the first to leave one!</p>
      ) : (
        <ul className="space-y-4">
          {reviews.map((review, index) => (
            <li key={index} className="border-b pb-4">
              <div className="flex items-center">
                <p className="font-semibold text-gray-800">{review.name}</p>
                <span className="ml-2 text-sm text-gray-500">{review.date}</span>
              </div>
              <div className="flex">
                {[1, 2, 3, 4, 5].map((star) => (
                  <FaStar
                    key={star}
                    className={`text-sm ${
                      review.rating >= star ? "text-yellow-500" : "text-gray-300"
                    }`}
                  />
                ))}
              </div>
              <p className="text-gray-700 mt-2">{review.comment}</p>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default ReviewSection;