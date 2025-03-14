import React from 'react';

function SharePage() {
  const shareText = "Check out tTextUtils - a comprehensive text utility application!";
  const shareUrl = window.location.href;

  return (
    <div className="container my-3">
      <h2>Share tTextUtils</h2>
      <p>{shareText}</p>
      <ul>
        <li><a href={`https://twitter.com/share?url=${shareUrl}&text=${shareText}`} target="_blank" rel="noopener noreferrer">Share on Twitter</a></li>
        <li><a href={`https://www.facebook.com/sharer/sharer.php?u=${shareUrl}`} target="_blank" rel="noopener noreferrer">Share on Facebook</a></li>
        <li><a href={`mailto:?subject=Check out tTextUtils&body=${shareText} - ${shareUrl}`} target="_blank" rel="noopener noreferrer">Share via Email</a></li>
      </ul>
    </div>
  );
}

export default SharePage;
