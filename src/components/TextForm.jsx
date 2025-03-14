import React, { useState, useEffect, useCallback } from "react";
import { 
  FiCopy, 
  FiCheckCircle, 
  FiTrash2,
  FiSave,
  FiType,
  FiArrowUp,
  FiArrowDown,
  FiFileText,
  FiFile,
  FiClock
} from "react-icons/fi";
import { saveAs } from "file-saver";
import { Document, Packer, Paragraph, TextRun } from "docx";

function TextForm({ heading }) {
  const [text, setText] = useState('');
  const [previewText, setPreviewText] = useState('');
  const [isCopied, setIsCopied] = useState(false);
  const [processing, setProcessing] = useState(false);
  const [textStats, setTextStats] = useState({
    words: 0,
    characters: 0,
    paragraphs: 0,
    sentences: 0,
    readingTime: 0
  });

  // Text analysis calculations
  const analyzeText = useCallback((content) => {
    const words = content.trim().split(/\s+/).filter(Boolean).length;
    const characters = content.length;
    const paragraphs = content.split(/\n\s*\n/).filter(p => p.trim()).length;
    const sentences = content.split(/[.!?]+/).filter(s => s.trim()).length;
    const readingTime = (words / 200).toFixed(1); // 200 wpm average
    
    return { words, characters, paragraphs, sentences, readingTime };
  }, []);

  // Load/save text from localStorage
  useEffect(() => {
    const savedText = localStorage.getItem('textInput');
    if (savedText) {
      setText(savedText);
      setPreviewText(savedText);
      setTextStats(analyzeText(savedText));
    }
  }, [analyzeText]);

  useEffect(() => {
    localStorage.setItem('textInput', text);
    setTextStats(analyzeText(text));
  }, [text, analyzeText]);

  const handleTextChange = (e) => {
    const newText = e.target.value;
    setText(newText);
    setPreviewText(newText);
  };

  // Text transformation handlers
  const transformText = (transformFn) => {
    setProcessing(true);
    try {
      const transformed = transformFn(text);
      setPreviewText(transformed);
    } catch (error) {
      alert("Error processing text: " + error.message);
    }
    setProcessing(false);
  };

  const transformations = {
    uppercase: () => text.toUpperCase(),
    lowercase: () => text.toLowerCase(),
    sentenceCase: () => text.toLowerCase().replace(/(^\s*\w|[.!?]\s*\w)/g, c => c.toUpperCase()),
    titleCase: () => text.toLowerCase().split(' ').map(w => w[0].toUpperCase() + w.slice(1)).join(' '),
    inverseCase: () => text.split('').map(c => c === c.toLowerCase() ? c.toUpperCase() : c.toLowerCase()).join('')
  };

  // File export handlers
  const exportFile = (content, type, extension) => {
    const blob = new Blob([content], { type });
    saveAs(blob, `textutils-${Date.now()}.${extension}`);
  };

  const handleExport = async (format) => {
    if (!previewText.trim()) return alert("No content to export!");
  
    switch(format) {
      case 'txt':
        exportFile(previewText, 'text/plain', 'txt');
        break;
      case 'docx':
        const doc = new Document({
          sections: [{
            properties: {},
            children: [
              new Paragraph({
                children: [
                  new TextRun({
                    text: previewText,
                    font: "Arial",
                    size: 24,
                  }),
                ],
              }),
            ],
          }]
        });
  
        Packer.toBlob(doc).then((blob) => {
          saveAs(blob, `textutils-${Date.now()}.docx`);
        });
        break;
      default:
        break;
    }
  };

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(previewText);
      setIsCopied(true);
      setTimeout(() => setIsCopied(false), 2000);
    } catch (err) {
      alert("Failed to copy text!");
    }
  };

  const handleClear = () => {
    if (window.confirm("Are you sure you want to clear all text?")) {
      setText('');
      setPreviewText('');
    }
  };

  return (
    <div className="container-lg my-4">
      <div className="card shadow-lg">
        <div className="card-header bg-primary text-white">
          <h2 className="mb-0">{heading}</h2>
        </div>

        <div className="card-body">
          {/* Text Input Section */}
          <div className="mb-4">
            <label htmlFor="textInput" className="form-label fw-bold">
              Enter your text below
            </label>
            <textarea
              id="textInput"
              className="form-control border-primary"
              value={text}
              onChange={handleTextChange}
              rows="8"
              placeholder="Start typing or paste your content here..."
              style={{ resize: 'vertical' }}
            />
          </div>

          {/* Quick Stats */}
          <div className="row g-3 mb-4">
            <div className="col-md-3">
              <div className="card h-100 border-primary">
                <div className="card-body">
                  <FiFileText className="mb-2" size="1.5em" />
                  <h5>{textStats.words} words</h5>
                  <small className="text-muted">Word Count</small>
                </div>
              </div>
            </div>
            <div className="col-md-3">
              <div className="card h-100 border-primary">
                <div className="card-body">
                  <FiType className="mb-2" size="1.5em" />
                  <h5>{textStats.characters} chars</h5>
                  <small className="text-muted">Character Count</small>
                </div>
              </div>
            </div>
            <div className="col-md-3">
              <div className="card h-100 border-primary">
                <div className="card-body">
                  <FiClock className="mb-2" size="1.5em" />
                  <h5>{textStats.readingTime} min</h5>
                  <small className="text-muted">Reading Time</small>
                </div>
              </div>
            </div>
            <div className="col-md-3">
              <div className="card h-100 border-primary">
                <div className="card-body">
                  <FiFile className="mb-2" size="1.5em" />
                  <h5>{textStats.paragraphs}</h5>
                  <small className="text-muted">Paragraphs</small>
                </div>
              </div>
            </div>
          </div>

          {/* Transformation Buttons */}
          <div className="mb-4">
            <h5 className="mb-3">Text Transformations</h5>
            <div className="d-flex flex-wrap gap-2">
              {Object.entries(transformations).map(([key, transform]) => (
                <button
                  key={key}
                  className="btn btn-outline-primary d-flex align-items-center gap-2"
                  onClick={() => transformText(transform)}
                  disabled={!text.trim() || processing}
                >
                  <FiType />
                  {key.charAt(0).toUpperCase() + key.slice(1)}
                </button>
              ))}
            </div>
          </div>

          {/* Export Controls */}
          <div className="mb-4">
            <h5 className="mb-3">Export Options</h5>
            <div className="d-flex flex-wrap gap-2">
              <button 
                className="btn btn-success d-flex align-items-center gap-2"
                onClick={() => handleExport('txt')}
                disabled={!previewText.trim()}
              >
                <FiSave /> TXT
              </button>
              <button 
                className="btn btn-success d-flex align-items-center gap-2"
                onClick={() => handleExport('docx')}
                disabled={!previewText.trim()}
              >
                <FiSave /> DOCX
              </button>
              <button
                className="btn btn-danger d-flex align-items-center gap-2"
                onClick={handleClear}
                disabled={!text.trim()}
              >
                <FiTrash2 /> Clear All
              </button>
              <button
                className={`btn ${isCopied ? 'btn-success' : 'btn-warning'} d-flex align-items-center gap-2`}
                onClick={handleCopy}
                disabled={!previewText.trim()}
              >
                {isCopied ? <FiCheckCircle /> : <FiCopy />}
                {isCopied ? 'Copied!' : 'Copy'}
              </button>
            </div>
          </div>

          {/* Preview Section */}
          <div className="mb-4">
            <h5 className="mb-3">Preview</h5>
            <div className="card border-primary">
              <div className="card-body preview-content">
                {previewText || <span className="text-muted">Your transformed text will appear here...</span>}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default TextForm;