import React, { useState, useRef } from "react";
import "./Details.css";
import Popup from "./Popup";
const Details = ({ onSubmit }) => {
  const [username, setUsername] = useState("");
  const [age, setAge] = useState("");
  const [showPopup, setShowPopup] = useState(false);
  const [blank, isBlank] = useState(false);


  const college = useRef();
  const nameUpdate = (e) => setUsername(e.target.value);
  const ageUpdate = (e) => setAge(e.target.value);

  const handleSubmit = (e) => {
    e.preventDefault();
    const collegeName = college.current.value;
    const key = Math.random()
    if (username === "" || age === ""|| collegeName==="") {
      setShowPopup("true");
      isBlank(true);
    } else if (age < 0) {
      setShowPopup("true");
      isBlank(false);
    } else {
      onSubmit({key, username, age, collegeName });
      setUsername("");
      setAge("");
      setShowPopup(false);
    }

    college.current.value =""
  };

  const isClick = (e) => {
    setShowPopup(e);
    setAge("");
  };

  return (
    <div className="login-box">
      <form onSubmit={handleSubmit}>
        <div className="user-box">
          <input
            type="text"
            name="username"
            value={username}
            onChange={nameUpdate}
            // required
          />
          <label>Username</label>
        </div>
        <div className="user-box">
          <input
            type="number"
            name="age"
            value={age}
            onChange={ageUpdate}
            // required
          />
          <label>Age(Years)</label>
        </div>
        <div className="select">
          <label>College Name</label>
          <select className="options" ref={college}>
          <option value="">Select</option>
            <option >CU</option>
            <option >LPU</option>
            <option >GNE</option>
            <option >SDE</option>
          </select>
        </div>

        <button type="submit" className="submit-btn">
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          Submit
        </button>
      </form>

      {showPopup ? <Popup checkbtn={isClick} checkBlank={blank} /> : null}
    </div>
  );
};

export default Details;
