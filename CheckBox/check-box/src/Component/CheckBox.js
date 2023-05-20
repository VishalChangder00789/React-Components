import React, { useEffect, useState } from "react";
import "../Component/CheckBox.css";

const CheckBox = (props) => {
  // At first the defaul value is true
  // When the checkbox is clicked, the value

  const [isChecked, setChecked] = useState(props.default);
  const [isFirstTime, setIsFirstTime] = useState(true);
  const [isFilled, setIsFilled] = useState(false);

  // For the Button
  const [isAuthorized, setIsAuthorized] = useState(false);

  const Authenticate = () => {
    if (isFilled) {
      setIsAuthorized(true);
    } else {
      setIsAuthorized(false);
    }
  };

  const handleChange = (e, props) => {
    // For the first time the correct value is set : after first time it won't run
    if (isFirstTime) {
      setChecked(!isChecked);
      setIsFirstTime(false);
    }

    // setting the normal value
    setChecked(!isChecked);

    // Setting conditional value if it is filled or not
    if (isChecked) {
      setIsFilled(true);
    } else {
      setIsFilled(false);
    }

    // Child to parent
    props.setIsCheckBoxFilled(!props.isCheckBoxFilled);
  };

  return (
    <div
      className={
        isChecked && !isFirstTime
          ? "CheckBox-Container-error"
          : "CheckBox-Container"
      }
    >
      <label className="CheckBox-label">{props.label}</label>
      <input
        onClick={(e) => handleChange(e, props)}
        type="checkbox"
        name={props.name}
      />
      {isChecked && !isFirstTime ? (
        <label className="CheckBox-Error">{props.error}</label>
      ) : (
        ""
      )}

      {isFilled & !isFirstTime ? (
        <label className="CheckBox-label success">{props.success}</label>
      ) : (
        ""
      )}

      <button
        type="submit"
        onClick={Authenticate}
        className={isAuthorized ? "Authenticate" : "Denied"}
      >
        {props.ButtonTitle}
      </button>
    </div>
  );
};

export default CheckBox;
