import React, { useEffect, useState } from "react";
import "../Component/Dropdown.css";

const Dropdown = (props) => {
  const [isOpen, setIsOpen] = useState(false);

  const handleButton = (event) => {
    setIsOpen(!isOpen);
  };

  const handleSelected = (option) => {
    props.Setselected(option);
  };

  // return <div className="option-item">{option}</div>;
  const renderList = props.options.map((option) => {
    return (
      <div onClick={(e) => handleSelected(option)} className="option-item">
        {option}
      </div>
    );
  });

  return (
    <div onClick={(e) => handleButton(e)} className="Dropdown-Container">
      {props.title}
      {isOpen ? (
        <div className="open-drop-box" id="open-drop-box-id">
          {renderList}
        </div>
      ) : (
        ""
      )}
    </div>
  );
};

export default Dropdown;
