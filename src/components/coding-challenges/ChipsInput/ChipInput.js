import React, { useState } from 'react';
import './ChipsInput.css'

const ChipsInput = () => {
  const [chips, setChips] = useState([]);
  const [inputValue, setInputValue] = useState('');

  const handleKeyDown = (e) => {
    if (e.key === 'Enter' && inputValue.trim()) {
      if (!chips.includes(inputValue.trim())) {
        setChips([...chips, inputValue.trim()]);
      }
      setInputValue('');
    } else if (e.key === 'Backspace' && !inputValue) {
      setChips(chips.slice(0, -1));
    }
  };

  const removeChip = (chipToRemove) => {
    setChips(chips.filter(chip => chip !== chipToRemove));
  };

  return (
    <div className="chips-container">
      {chips.map((chip, index) => (
        <div key={index} className="chip">
          {chip}
          <button onClick={() => removeChip(chip)}>&times;</button>
        </div>
      ))}
      <input
        type="text"
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
        onKeyDown={handleKeyDown}
        placeholder="Type and press Enter"
      />
    </div>
  );
};

export default ChipsInput;