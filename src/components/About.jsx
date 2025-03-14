import React from "react";

function About() {
  return (
    <div className="container my-5">
      <div className="text-center mb-5">
      <div className="h1 mb-4">📝 tTextUtils</div>
        <h1 className="display-4 fw-bold mt-3">Welcome to tTextUtils! ✨</h1>
        <p className="lead">Your Ultimate Text Transformation Toolkit</p>
      </div>

      {/* Hero Section */}
      <div className="card bg-light border-0 mb-5">
        <div className="card-body p-5">
          <h2 className="mb-4">Why tTextUtils Stands Out:</h2>
          <div className="row g-4">
            <div className="col-md-4 text-center">
              <div className="h1">📈</div>
              <h5>Daily Productivity Boost</h5>
              <p>Process 30% more text with our optimized workflows</p>
            </div>
            <div className="col-md-4 text-center">
              <div className="h1">🔒</div>
              <h5>Complete Privacy</h5>
              <p>Your data never leaves your device</p>
            </div>
            <div className="col-md-4 text-center">
              <div className="h1">⚡</div>
              <h5>Lightning Fast</h5>
              <p>Handles 10,000+ words instantly</p>
            </div>
          </div>
        </div>
      </div>

      {/* Features Section */}
      <section className="mb-5">
        <h2 className="mb-4 border-bottom pb-2">Key Features</h2>
        <div className="row g-4">
          <div className="col-md-6">
            <div className="card h-100">
              <div className="card-body">
                <h5 className="card-title">🔄 Text Transformations</h5>
                <ul className="list-unstyled">
                  <li>• Case conversion (UPPER/lower/Title)</li>
                  <li>• Sentence formatting</li>
                  <li>• Whitespace cleanup</li>
                </ul>
              </div>
            </div>
          </div>
          <div className="col-md-6">
            <div className="card h-100">
              <div className="card-body">
                <h5 className="card-title">📊 Analytics</h5>
                <ul className="list-unstyled">
                  <li>• Real-time word/character count</li>
                  <li>• Reading time estimation</li>
                  <li>• Keyword density analysis</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="mb-5">
        <h2 className="mb-4 border-bottom pb-2">Why Users Love Us</h2>
        <div className="accordion" id="whyChooseAccordion">
          <div className="accordion-item">
            <h3 className="accordion-header">
              <button className="accordion-button" type="button" data-bs-toggle="collapse" 
                data-bs-target="#userFriendly">
                🌟 Intuitive Interface
              </button>
            </h3>
            <div id="userFriendly" className="accordion-collapse collapse show" 
              data-bs-parent="#whyChooseAccordion">
              <div className="accordion-body">
                Clean design with zero learning curve. Everything you need is within reach.
              </div>
            </div>
          </div>
          
          <div className="accordion-item">
            <h3 className="accordion-header">
              <button className="accordion-button collapsed" type="button" 
                data-bs-toggle="collapse" data-bs-target="#customization">
                🎨 Personalization
              </button>
            </h3>
            <div id="customization" className="accordion-collapse collapse" 
              data-bs-parent="#whyChooseAccordion">
              <div className="accordion-body">
                Choose from multiple themes and create custom keyboard shortcuts.
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <div className="card bg-dark text-white mb-5">
        <div className="card-body p-5 text-center">
          <h3 className="mb-4">Join Our Growing Community</h3>
          <div className="row g-4">
            <div className="col-md-4">
              <div className="display-4 fw-bold">10K+</div>
              <div>Daily Users</div>
            </div>
            <div className="col-md-4">
              <div className="display-4 fw-bold">1M+</div>
              <div>Words Processed Daily</div>
            </div>
            <div className="col-md-4">
              <div className="display-4 fw-bold">99.9%</div>
              <div>Uptime Reliability</div>
            </div>
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="text-center mb-5">
        <h3 className="mb-4">Have Feature Requests?</h3>
        <a href="/feedback" className="btn btn-primary btn-lg">
          Share Your Ideas 💡
        </a>
        <div className="mt-3">
          <small className="text-muted">
            We implement top-voted features every month!
          </small>
        </div>
      </div>
    </div>
  );
}

export default About;