import React from "react";

function About() {
  return (
    <div className="container my-3">
      <h2>Welcome to tTextUtils!</h2>
      <h4>About Us</h4>
      <p>
        At tTextUtils, we believe that your words matter. That's why we've designed a comprehensive text utility application to make your writing experience smooth, efficient, and enjoyable. Whether you're crafting a professional document, jotting down notes, or just playing around with text transformations, tTextUtils has got you covered.
      </p>
      <div className="accordion container my-3" id="accordionFeatures">
        <h3>Key Features:</h3>
        <div className="accordion-item">
          <h2 className="accordion-header">
            <button
              className="accordion-button"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseOne"
              aria-expanded="true"
              aria-controls="collapseOne"
            >
              Live Text Transformations:
            </button>
          </h2>
          <div
            id="collapseOne"
            className="accordion-collapse collapse show"
            data-bs-parent="#accordionFeatures"
          >
            <div className="accordion-body">
              Instantly convert your text to uppercase, lowercase, sentence case, or title case with just a click. Watch as your changes reflect in real-time in the preview pane.
            </div>
          </div>
        </div>
        <div className="accordion-item">
          <h2 className="accordion-header">
            <button
              className="accordion-button collapsed"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseTwo"
              aria-expanded="false"
              aria-controls="collapseTwo"
            >
              Autosave Functionality:
            </button>
          </h2>
          <div
            id="collapseTwo"
            className="accordion-collapse collapse"
            data-bs-parent="#accordionFeatures"
          >
            <div className="accordion-body">
              No more worries about losing your work. Our autosave feature ensures that your text is automatically saved locally on your device, so you can pick up right where you left off.
            </div>
          </div>
        </div>
        <div className="accordion-item">
          <h2 className="accordion-header">
            <button
              className="accordion-button collapsed"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseThree"
              aria-expanded="false"
              aria-controls="collapseThree"
            >
              Clipboard Copy:
            </button>
          </h2>
          <div
            id="collapseThree"
            className="accordion-collapse collapse"
            data-bs-parent="#accordionFeatures"
          >
            <div className="accordion-body">
              Need to transfer your text elsewhere? Copy your entire text to the clipboard with one click. No fuss, no hassle.
            </div>
          </div>
        </div>
        <div className="accordion-item">
          <h2 className="accordion-header">
            <button
              className="accordion-button collapsed"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseFour"
              aria-expanded="false"
              aria-controls="collapseFour"
            >
              Dark Mode and Light Mode:
            </button>
          </h2>
          <div
            id="collapseFour"
            className="accordion-collapse collapse"
            data-bs-parent="#accordionFeatures"
          >
            <div className="accordion-body">
              Customize your writing environment with our sleek dark mode for those late-night writing sessions or stick with the light mode for a brighter workspace. Switch effortlessly between modes with a simple toggle.
            </div>
          </div>
        </div>
        <div className="accordion-item">
          <h2 className="accordion-header">
            <button
              className="accordion-button collapsed"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseFive"
              aria-expanded="false"
              aria-controls="collapseFive"
            >
              Word Count and Reading Time:
            </button>
          </h2>
          <div
            id="collapseFive"
            className="accordion-collapse collapse"
            data-bs-parent="#accordionFeatures"
          >
            <div className="accordion-body">
              Keep track of your progress with our built-in word count and estimated reading time. Great for ensuring your content meets length requirements or planning your reading sessions.
            </div>
          </div>
        </div>
        <div className="accordion-item">
          <h2 className="accordion-header">
            <button
              className="accordion-button collapsed"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseSix"
              aria-expanded="false"
              aria-controls="collapseSix"
            >
              Download Options:
            </button>
          </h2>
          <div
            id="collapseSix"
            className="accordion-collapse collapse"
            data-bs-parent="#accordionFeatures"
          >
            <div className="accordion-body">
              Save your text as a .txt file or a Word document directly from the application. Perfect for archiving your notes or sharing your work with others.
            </div>
          </div>
        </div>
      </div>
      <div className="accordion container my-3" id="accordionWhyChoose">
        <h3>Why Choose tTextUtils?</h3>
        <div className="accordion-item">
          <h2 className="accordion-header">
            <button
              className="accordion-button"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseSeven"
              aria-expanded="true"
              aria-controls="collapseSeven"
            >
              User-Friendly Interface:
            </button>
          </h2>
          <div
            id="collapseSeven"
            className="accordion-collapse collapse show"
            data-bs-parent="#accordionWhyChoose"
          >
            <div className="accordion-body">
              Our intuitive design ensures that all features are easily accessible and straightforward to use, even for those who are not tech-savvy.
            </div>
          </div>
        </div>
        <div className="accordion-item">
          <h2 className="accordion-header">
            <button
              className="accordion-button collapsed"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseEight"
              aria-expanded="false"
              aria-controls="collapseEight"
            >
              Reliable and Secure:
            </button>
          </h2>
          <div
            id="collapseEight"
            className="accordion-collapse collapse"
            data-bs-parent="#accordionWhyChoose"
          >
            <div className="accordion-body">
              With local storage autosave, your data stays on your device, ensuring your privacy and security.
            </div>
          </div>
        </div>
        <div className="accordion-item">
          <h2 className="accordion-header">
            <button
              className="accordion-button collapsed"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseNine"
              aria-expanded="false"
              aria-controls="collapseNine"
            >
              Customization:
            </button>
          </h2>
          <div
            id="collapseNine"
            className="accordion-collapse collapse"
            data-bs-parent="#accordionWhyChoose"
          >
            <div className="accordion-body">
              Tailor your writing experience to suit your preferences, with various text transformation options and theme modes.
            </div>
          </div>
        </div>
        <div className="accordion-item">
          <h2 className="accordion-header">
            <button
              className="accordion-button collapsed"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseTen"
              aria-expanded="false"
              aria-controls="collapseTen"
            >
              Continuous Improvements:
            </button>
          </h2>
          <div
            id="collapseTen"
            className="accordion-collapse collapse"
            data-bs-parent="#accordionWhyChoose"
          >
            <div className="accordion-body">
              We're committed to making tTextUtils better with every update. Your feedback is invaluable to us, and we're always looking to enhance our features based on user suggestions.
            </div>
          </div>
        </div>
      </div>
      <p>
        At tTextUtils, we're here to make your text editing tasks easier and more enjoyable. Dive in and experience the convenience and power of having a versatile text utility tool at your fingertips!
      </p>
    </div>
  );
}

export default About;
