import React, { useState, useRef } from 'react';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import { modules, formats } from './modules';
import { fetchLLMResponse } from '../llmService';
import './TextEditor.css';

const TextEditor = () => {
  const [content, setContent] = useState('');
  const [suggestion, setSuggestion] = useState('');
  const quillRef = useRef(null);

  const handleChange = (value) => {
    setContent(value);
  };

  const handleAIRequest = async () => {
    try {
      const aiSuggestion = await fetchLLMResponse(content);
      setSuggestion(aiSuggestion);
    } catch (error) {
      console.error('Error fetching AI suggestion:', error);
    }
  };

  return (
    <div className="text-editor">
      <ReactQuill
        ref={quillRef}
        theme="snow"
        value={content}
        onChange={handleChange}
        modules={modules}
        formats={formats}
        placeholder="Write something..."
      />
      <button onClick={handleAIRequest}>Get AI Suggestion</button>
      {suggestion && (
        <div className="suggestion">
          <h3>AI Suggestion:</h3>
          <p>{suggestion}</p>
        </div>
      )}
    </div>
  );
};

export default TextEditor;