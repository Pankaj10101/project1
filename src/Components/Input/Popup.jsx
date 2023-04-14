import React from 'react';
import './Popup.css';

const Popup = ({checkbtn, checkBlank}) => {
    const handleOKClick = () => {
        checkbtn(false);
      };
  return (
    <div className="popup-container">
      <div className="popup">
        <h2>Invalid Input</h2>
        {checkBlank? <p> Please enter both username and age (non-empty values).</p> : <p>Please enter a valid age.</p> }
        <button onClick={handleOKClick} >Okay</button>
      </div>
    </div>
  );
};

export default Popup;
