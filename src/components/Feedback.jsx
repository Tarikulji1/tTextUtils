// src/components/FeedbackPage.jsx
import React, { useState } from 'react';
import { db } from '../firebase/firebase';
import { collection, addDoc } from 'firebase/firestore';
import FeedbackQuotes from './FeedbackQuotes';

function Feedback() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [feedback, setFeedback] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await addDoc(collection(db, 'feedback'), {
        name,
        email,
        feedback,
        timestamp: new Date()
      });
      alert('Feedback submitted! Thank you.');
      setName('');
      setEmail('');
      setFeedback('');
    } catch (error) {
      console.error('Error adding document: ', error);
    }
  };

  return (
    <div className="container my-3">
      <h2>Feedback</h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label htmlFor="name" className="form-label">Name</label>
          <input type="text" className="form-control" id="name" value={name} onChange={(e) => setName(e.target.value)} />
        </div>
        <div className="mb-3">
          <label htmlFor="email" className="form-label">Email</label>
          <input type="email" className="form-control" id="email" value={email} onChange={(e) => setEmail(e.target.value)} />
        </div>
        <div className="mb-3">
          <label htmlFor="feedback" className="form-label">Feedback</label>
          <textarea className="form-control" id="feedback" rows="5" value={feedback} onChange={(e) => setFeedback(e.target.value)}></textarea>
        </div>
        <button type="submit" className="btn btn-primary">Submit</button>
      </form>
      <FeedbackQuotes />
    </div>
  );
}

export default Feedback;
