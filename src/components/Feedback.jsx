import React, { useState, useEffect } from 'react';
import { db } from '../firebase/firebase';
import { collection, addDoc } from 'firebase/firestore';
import FeedbackQuotes from './FeedbackQuotes';
import FeedbackIcon from '../assets/feedback.svg';
import Confetti from 'react-confetti';
import { useWindowSize } from '@react-hook/window-size';

function Feedback() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [feedback, setFeedback] = useState('');
  const [submitted, setSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');
  const [feedbackType, setFeedbackType] = useState('general');
  const [rating, setRating] = useState(0);
  const [width, height] = useWindowSize();
  const [showConfetti, setShowConfetti] = useState(false);

  useEffect(() => {
    if (submitted) {
      const timer = setTimeout(() => setShowConfetti(false), 3000);
      return () => clearTimeout(timer);
    }
  }, [submitted]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    
    if (!feedback.trim()) {
      setError('Please provide your feedback before submitting');
      return;
    }

    setIsLoading(true);

    try {
      await addDoc(collection(db, 'feedback'), {
        name: name || 'Anonymous',
        email,
        feedback,
        type: feedbackType,
        rating,
        timestamp: new Date()
      });
      
      setSubmitted(true);
      setShowConfetti(true);
      setName('');
      setEmail('');
      setFeedback('');
      setRating(0);
    } catch (error) {
      console.error('Error adding document: ', error);
      setError('Failed to submit feedback. Please try again.');
    } finally {
      setIsLoading(false);
    }
  };

  if (submitted) {
    return (
      <div className="container my-5 text-center">
        {showConfetti && <Confetti width={width} height={height} recycle={false} />}
        <div className="card border-success mb-3">
          <div className="card-body text-success py-5">
            <h2 className="display-4 mb-3">🎉 Thank You!</h2>
            <p className="lead">Your feedback helps us improve tTextUtils</p>
            <div className="mt-4">
              <button 
                className="btn btn-outline-success me-2"
                onClick={() => setSubmitted(false)}
              >
                Submit Another
              </button>
              <a href="/" className="btn btn-success">
                Return Home
              </a>
            </div>
            <div className="mt-4">
              <h5>Share the Love</h5>
              <div className="btn-group">
                <a href="twitter.com/intent/tweet" className="btn btn-twitter">
                  <i className="bi bi-twitter"></i> Tweet
                </a>
                <a href="https://www.facebook.com/sharer/sharer.php" className="btn btn-facebook">
                  <i className="bi bi-facebook"></i> Share
                </a>
              </div>
            </div>
          </div>
        </div>
        <FeedbackQuotes />
      </div>
    );
  }

  return (
    <div className="container my-5">
      <div className="row justify-content-center">
        <div className="col-md-10 col-lg-8">
          <div className="card shadow-lg">
            <div className="card-header bg-primary text-white">
              <div className="d-flex align-items-center">
              <img src={FeedbackIcon} alt="Feedback" style={{ width: '2rem' }} />
                <h2 className="mb-0">Share Your Thoughts</h2>
              </div>
            </div>
            
            <div className="card-body p-4">
              <div className="text-center mb-4">
                <div className="rating-stars mb-3">
                  {[...Array(5)].map((_, index) => (
                    <button
                      key={index}
                      className={`btn btn-star ${index < rating ? 'text-warning' : 'text-muted'}`}
                      onClick={() => setRating(index + 1)}
                    >
                      ★
                    </button>
                  ))}
                </div>
                <p>How would you rate your experience?</p>
              </div>

              <form onSubmit={handleSubmit}>
                <div className="mb-4">
                  <label className="form-label">Feedback Type</label>
                  <div className="btn-group w-100">
                    {['bug', 'feature', 'general'].map((type) => (
                      <button
                        key={type}
                        type="button"
                        className={`btn btn-outline-primary ${
                          feedbackType === type ? 'active' : ''
                        }`}
                        onClick={() => setFeedbackType(type)}
                      >
                        {type.charAt(0).toUpperCase() + type.slice(1)}
                      </button>
                    ))}
                  </div>
                </div>

                <div className="mb-4">
                  <label htmlFor="feedback" className="form-label">
                    Your {feedbackType === 'bug' ? 'Bug Report' : 'Feedback'}
                  </label>
                  <textarea
                    className="form-control"
                    id="feedback"
                    rows="5"
                    value={feedback}
                    onChange={(e) => setFeedback(e.target.value)}
                    placeholder={`Describe your ${feedbackType} here...`}
                    style={{ minHeight: '150px' }}
                  ></textarea>
                </div>

                <div className="row g-3 mb-4">
                  <div className="col-md-6">
                    <label htmlFor="name" className="form-label">
                      Name (optional)
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      id="name"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      placeholder="John Doe"
                    />
                  </div>
                  <div className="col-md-6">
                    <label htmlFor="email" className="form-label">
                      Email (optional)
                    </label>
                    <input
                      type="email"
                      className="form-control"
                      id="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="john@example.com"
                    />
                  </div>
                </div>

                {error && (
                  <div className="alert alert-danger mb-4" role="alert">
                    {error}
                  </div>
                )}

                <div className="d-grid">
                  <button
                    type="submit"
                    className="btn btn-primary btn-lg"
                    disabled={isLoading}
                  >
                    {isLoading ? (
                      <>
                        <span className="spinner-border spinner-border-sm me-2"></span>
                        Submitting...
                      </>
                    ) : (
                      'Submit Feedback'
                    )}
                  </button>
                </div>
              </form>
            </div>
          </div>

          <div className="mt-4 text-center">
            <p className="text-muted">
              💡 Quick feedback? <a href="/twitter" className="text-decoration-none">Tweet us</a>
            </p>
          </div>
        </div>
      </div>
      
      <FeedbackQuotes />
    </div>
  );
}

export default Feedback;