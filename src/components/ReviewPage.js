import React, { useState } from 'react';
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';
import { useAuthState } from 'react-firebase-hooks/auth';

const ReviewPage = () => {
  const [reviewContent, setReviewContent] = useState('');
  const [rating, setRating] = useState('');
  const [user] = useAuthState(firebase.auth());

  const handleReviewSubmit = (e) => {
    e.preventDefault();

    // Perform necessary validation on the review inputs

    // Save the review to the Firestore database
    firebase.firestore().collection('reviews').add({
      content: reviewContent,
      rating: rating,
      userId: user.uid,
      userName: user.displayName,
      // Additional fields can be added based on your requirements
    });

    // Clear the review inputs
    setReviewContent('');
    setRating('');
  };

  return (
    <div className="flex items-center justify-center h-screen">
      <div className="max-w-md w-full p-6 bg-white rounded shadow">
        <h2 className="text-2xl font-bold mb-6 text-center">Write a Review</h2>
        <form onSubmit={handleReviewSubmit}>
          <textarea
            value={reviewContent}
            onChange={(e) => setReviewContent(e.target.value)}
            placeholder="Enter your review"
            className="w-full p-2 border rounded mb-4"
          ></textarea>
          <input
            type="number"
            value={rating}
            onChange={(e) => setRating(e.target.value)}
            placeholder="Enter your rating"
            className="w-full p-2 border rounded mb-4"
          />
          <button
            type="submit"
            className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600"
          >
            Submit Review
          </button>
        </form>
      </div>
    </div>
  );
};

export default ReviewPage;
