import React, { useState } from 'react';
import './App.css';

const App = () => {
  const [text, setText] = useState('');
  var wordCount = text.trim().split(/\s+/).length;
  if (text === '') {
    wordCount = 0;
  }

  const handleChange = (e) => {
    setText(e.target.value);
  };

  return (
    <div className="app">
      <h1 className="header">Responsive Paragraph Word Counter</h1>
      <textarea
        className="input-text"
        placeholder="Type your text here..."
        value={text}
        onChange={handleChange}
      ></textarea>
      <p className="word-count">Word count: {wordCount}</p>
    </div>
  );
};

export default App;
