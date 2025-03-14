import React, { useState } from 'react';
import { 
  FaTwitter, 
  FaFacebook, 
  FaLinkedin,
  FaWhatsapp,
  FaLink,
  FaRegCopy,
  FaCheck
} from 'react-icons/fa';
import { useLocation } from 'react-router-dom';

function SharePage() {
  const [isCopied, setIsCopied] = useState(false);
  const [customMessage, setCustomMessage] = useState('');
  const location = useLocation();
  
  const baseText = "Check out tTextUtils - a comprehensive text utility application!";
  const shareText = customMessage || baseText;
  const shareUrl = `${window.location.origin}${location.pathname}`;

  const socialPlatforms = [
    {
      name: 'Twitter',
      icon: <FaTwitter />,
      url: `https://twitter.com/share?url=${encodeURIComponent(shareUrl)}&text=${encodeURIComponent(shareText)}`,
      color: '#1DA1F2'
    },
    {
      name: 'Facebook',
      icon: <FaFacebook />,
      url: `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(shareUrl)}`,
      color: '#1877F2'
    },
    {
      name: 'LinkedIn',
      icon: <FaLinkedin />,
      url: `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(shareUrl)}`,
      color: '#0A66C2'
    },
    {
      name: 'WhatsApp',
      icon: <FaWhatsapp />,
      url: `https://api.whatsapp.com/send?text=${encodeURIComponent(`${shareText} ${shareUrl}`)}`,
      color: '#25D366'
    },
    {
      name: 'Email',
      icon: <FaLink />,
      url: `mailto:?subject=Check out tTextUtils&body=${encodeURIComponent(`${shareText}\n\n${shareUrl}`)}`,
      color: '#EA4335'
    }
  ];

  const copyToClipboard = async () => {
    try {
      await navigator.clipboard.writeText(shareUrl);
      setIsCopied(true);
      setTimeout(() => setIsCopied(false), 2000);
    } catch (err) {
      console.error('Failed to copy:', err);
    }
  };

  return (
    <div className="container my-5">
      <div className="card shadow-sm">
        <div className="card-body">
          <h2 className="card-title mb-4">Share tTextUtils</h2>
          
          <div className="mb-4">
            <label htmlFor="customMessage" className="form-label">
              Customize your message
            </label>
            <textarea
              id="customMessage"
              className="form-control"
              rows="3"
              value={customMessage}
              onChange={(e) => setCustomMessage(e.target.value)}
              placeholder={baseText}
            />
          </div>

          <div className="mb-4">
            <h5 className="mb-3">Share via:</h5>
            <div className="row g-3">
              {socialPlatforms.map((platform) => (
                <div key={platform.name} className="col-6 col-md-4 col-lg-3">
                  <a
                    href={platform.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn btn-outline-dark w-100 d-flex align-items-center justify-content-center gap-2"
                    style={{ backgroundColor: platform.color, borderColor: platform.color, color: 'white' }}
                  >
                    {platform.icon}
                    {platform.name}
                  </a>
                </div>
              ))}
            </div>
          </div>

          <div className="mb-4">
            <h5 className="mb-3">Or copy link:</h5>
            <div className="input-group">
              <input
                type="text"
                className="form-control"
                value={shareUrl}
                readOnly
              />
              <button
                className="btn btn-primary"
                type="button"
                onClick={copyToClipboard}
                disabled={isCopied}
              >
                {isCopied ? (
                  <>
                    <FaCheck className="me-2" />
                    Copied!
                  </>
                ) : (
                  <>
                    <FaRegCopy className="me-2" />
                    Copy Link
                  </>
                )}
              </button>
            </div>
          </div>

          <div className="alert alert-info mt-4">
            <strong>Pro Tip:</strong> Sharing helps others discover powerful text tools!
          </div>
        </div>
      </div>
    </div>
  );
}

export default SharePage;