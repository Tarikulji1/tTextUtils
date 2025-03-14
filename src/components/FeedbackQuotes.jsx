import React, { useEffect, useState } from 'react';
import { db } from '../firebase/firebase';
import { collection, getDocs, query, orderBy, limit } from 'firebase/firestore';
import StarIcon from '../assets/star.svg';
import EmptyStarIcon from '../assets/star-empty.svg';
import DOMPurify from 'dompurify';

function FeedbackQuotes() {
  const [feedbacks, setFeedbacks] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState('');
  const [visibleCount, setVisibleCount] = useState(5);

  useEffect(() => {
    const fetchFeedbacks = async () => {
      try {
        const q = query(
          collection(db, 'feedback'),
          orderBy('timestamp', 'desc'),
          limit(20)
        );
        const querySnapshot = await getDocs(q);
        const feedbackList = querySnapshot.docs.map(doc => ({
          id: doc.id,
          ...doc.data()
        }));
        setFeedbacks(feedbackList);
      } catch (err) {
        setError('Failed to load feedback. Please try again later.');
      } finally {
        setIsLoading(false);
      }
    };
    fetchFeedbacks();
  }, []);

  const renderStars = (rating) => {
    return [...Array(5)].map((_, index) => (
      <span key={index} className="me-1">
        {index < rating ? (
          <StarIcon style={{ width: '20px', fill: '#ffd700' }} />
        ) : (
          <EmptyStarIcon style={{ width: '20px', fill: '#ddd' }} />
        )}
      </span>
    ));
  };

  const sanitizeContent = (text) => ({
    __html: DOMPurify.sanitize(text)
  });

  if (isLoading) {
    return (
      <div className="text-center my-5">
        <div className="spinner-border text-primary" role="status">
          <span className="visually-hidden">Loading...</span>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="alert alert-danger my-4" role="alert">
        {error}
      </div>
    );
  }

  return (
    <section className="container my-5">
      <h2 className="text-center mb-4">What Our Users Say</h2>
      
      <div className="row g-4">
        {feedbacks.slice(0, visibleCount).map((feedback) => (
          <div key={feedback.id} className="col-md-6 col-lg-4">
            <div className="card h-100 shadow-sm animate__animated animate__fadeIn">
              <div className="card-body">
                <div className="d-flex align-items-center mb-3">
                  {renderStars(feedback.rating || 0)}
                </div>
                <p 
                  className="mb-0 feedback-content" 
                  dangerouslySetInnerHTML={sanitizeContent(feedback.feedback)}
                />
              </div>
              <div className="card-footer bg-white border-top-0">
                <div className="d-flex justify-content-between align-items-center">
                  <div>
                    <strong className="text-primary">{feedback.name || 'Anonymous'}</strong>
                    <div className="text-muted small">
                      {new Date(feedback.timestamp?.toDate()).toLocaleDateString()}
                    </div>
                  </div>
                  <div className="btn-group">
                    <a
                      href={`https://twitter.com/intent/tweet?text=${encodeURIComponent(
                        `"${feedback.feedback.substring(0, 100)}..." - ${feedback.name || 'User'} @tTextUtils`
                      )}`}
                      className="btn btn-sm btn-outline-secondary"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <i className="bi bi-twitter"></i>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {visibleCount < feedbacks.length && (
        <div className="text-center mt-4">
          <button 
            className="btn btn-primary"
            onClick={() => setVisibleCount(prev => prev + 6)}
          >
            Load More Feedback
          </button>
        </div>
      )}

      {feedbacks.length === 0 && (
        <div className="text-center py-5">
          <h3 className="text-muted">No feedback yet</h3>
          <p>Be the first to share your experience!</p>
        </div>
      )}
    </section>
  );
}

export default FeedbackQuotes;