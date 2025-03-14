// src/components/FeedbackQuotes.jsx
import React, { useEffect, useState } from 'react';
import { db } from '../firebase/firebase';
import { collection, getDocs } from 'firebase/firestore';

function FeedbackQuotes() {
  const [feedbacks, setFeedbacks] = useState([]);

  useEffect(() => {
    const fetchFeedbacks = async () => {
      const querySnapshot = await getDocs(collection(db, 'feedback'));
      const feedbackList = querySnapshot.docs.map(doc => doc.data());
      setFeedbacks(feedbackList);
    };
    fetchFeedbacks();
  }, []);

  return (
    <div className="container my-3">
      <h2>User Feedback</h2>
      {feedbacks.map((feedback, index) => (
        <blockquote key={index} className="blockquote">
          <p className="mb-0">{feedback.feedback}</p>
          <footer className="blockquote-footer">{feedback.name}</footer>
        </blockquote>
      ))}
    </div>
  );
}

export default FeedbackQuotes;
