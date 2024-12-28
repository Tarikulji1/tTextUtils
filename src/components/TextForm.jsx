import React, { useEffect } from "react";
import { useState } from "react";


function TextForm(props) {
    const [text, setText] = useState('');
    const [previewText, setPreviewText] = useState('');
    const [isCopied, setIsCopied] = useState(false);

    // Load saved text from localStorage when component mounts
    useEffect(() => {
      const savedText = localStorage.getItem('textInput');
      if (savedText) {
        setText(savedText);
        setPreviewText(savedText); // Load saved preview text as well
      }
    }, []);

    // Save text to localStorage whenever its changes
    useEffect(() => {
      localStorage.setItem('textInput', text);
    }, [text]);
    
    const handleUpChange = (event) => {
        setText(event.target.value);
        setPreviewText(event.target.value); // Update preview live as you type
    };

    const handleUpClick = () => {
        setPreviewText(text.toUpperCase());
    };

    const handleLowClick = () => {
        setPreviewText(text.toLowerCase());
    };

    const handleSentenceCase = () => {
      const sentenceCaseText = text.toLocaleLowerCase().replace(/(^\s*\w|[.!?]\s*\w)/g, c => c.toUpperCase());
        setPreviewText(sentenceCaseText);
    };
    const handleTitleCase = () => {
      const titleCaseText = text
      .toLowerCase()
      .split(' ')
      .map(word => word.charAt(0).toUpperCase() + word.slice(1))
      .join(' ');
      setPreviewText(titleCaseText);
    };

    const handleClear = () => {
        setText('');
        setPreviewText('');
    };

    const wordCount = text.trim().split(/\s+/).filter(Boolean).length;

    const handleSaveAsTxt = () => {
      const blob = new Blob([previewText], { type: 'text/plain' });
      const url = URL.createObjectURL(blob);
      const link = document.createElement('a');
      link.href = url;
      link.download = 'text.txt';
      link.click();
    };

    const handleSaveAsWord = () => {
      const header = `<html xmlns:o="urn:schemas-microsoft-com:office:office" ` + 
                    `xmlns:w="urn:schemas-microsoft-com:office:word" ` + 
                    `xmlns="http://www.w3.org/TR/REC-html40">` + 
                    `<head><meta charset="utf-8"></head><body>`;
      const footer = `</body></html>`;
      const sourceHTML = header + previewText + footer;
      const blob = new Blob(['\ufeff', sourceHTML], { type: 'application/msword' });
      const url = URL.createObjectURL(blob);
      const link = document.createElement('a');
      link.href = url;
      link.download = 'document.doc';
      link.click();
    };

    const handleCopyToClipboard = () => {
      navigator.clipboard.writeText(previewText).then(() => {
        setIsCopied(true);
        setTimeout(() => setIsCopied(false), 2000);
      }).catch(err => {
        console.error('Could not copy text: ', err);
      });
    };
    
  return (
    <>
    <div className="container my-3">
      <h1>{props.heading}</h1>
      <div className="mb-3">
        <textarea className="form-control" id="myBox" value={text} onChange={handleUpChange} rows="15" placeholder="Start typing, or copy and paste your document here..."></textarea>
      </div>
      <div className="d-flex justify-content-between my-3">
      <span><h5>{wordCount} words, {text.length} characters</h5></span>
      <div>
      <button className="btn btn-success mx-2" onClick={handleSaveAsTxt}>Save as .txt</button>
      <button className="btn btn-success mx-2" onClick={handleSaveAsWord}>Save as Word</button>
      </div>
      <span><h5>{(0.08 * wordCount).toFixed(2)} Minutes read</h5></span>
      </div>
      <button className="btn btn-primary mx-2" onClick={handleUpClick}>UpperCase</button>
      <button className="btn btn-primary mx-2" onClick={handleLowClick}>LowerCase</button>
      <button className="btn btn-dark mx-2" onClick={handleSentenceCase}>SentenceCase</button>
      <button className="btn btn-light mx-2" onClick={handleTitleCase}>TitleCase</button>
    </div>
    <div className="container my-3">
      <button className="btn btn-danger mx-2" onClick={handleClear}>Clear</button>
      <button style={{ backgroundColor: 'orange', color: 'white' }} className="btn mx-2" onClick={handleCopyToClipboard}> {isCopied ? 'Copied' : 'Copy'} <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-copy" style={{ marginLeft: '5px' }}> <rect x="9" y="9" width="13" height="13" rx="2" ry="2"></rect> <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"></path> </svg> </button>
    </div>
    <div className="container my-3">
      <h2>Your Text summary</h2>
      <h3>Preview Text</h3>
      <div className="preview-box" style={{ border: '1px solid grey', padding: '10px', color: 'black', marginTop: '10px', backgroundColor: '#fff' }}>
      <p>{previewText}</p>
      </div>
    </div>
    </>
  );
}

export default TextForm;
