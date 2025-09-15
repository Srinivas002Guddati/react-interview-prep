import React, { useState } from 'react';
import './style.css';

export const ConfirmationModal = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [result, setResult] = useState("");

  const handleButton = () =>{
    setIsOpen(true);
    setResult("");
  } 

  const handleConfirm = ()=>{
    setIsOpen(false);
    setResult("Confirmed");
  }

   const handleClose = ()=>{
    setIsOpen(false);
    setResult("Cancelled");
  }

  return (
    <div>
      <button onClick={handleButton}>Open Confirmation Modal</button>
      {isOpen && (
        <div className="overlay">
          <div className="modal-container">
            <h2>Confirm Action</h2>
            <p>Are you sure you want to proceed?</p>
            <div className="button-group">
              <button className="confirm-btn" onClick={handleConfirm}>Confirm</button>
              <button className="cancel-btn" onClick={handleClose}>Cancel</button>
            </div>
          </div>
        </div>        
      )}
      {result && <div className='results' data-testid="action-result">{result}</div>}
    </div>
  );
};