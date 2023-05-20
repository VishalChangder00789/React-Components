import React, { useState } from "react";
import "./App.css";
import CheckBox from "./Component/CheckBox";

const App = () => {
  const [isCheckBoxFilled, setIsCheckBoxFilled] = useState(false);

  return (
    <div className="App">
      <CheckBox
        label=" MY CHECK BOX "
        name="checkbox"
        default={true}
        error="PLEASE CHECK THE BOX"
        success="GOOD TO GO"
        ButtonTitle="Submit"
        isCheckBoxFilled={isCheckBoxFilled}
        setIsCheckBoxFilled={setIsCheckBoxFilled}
      />
      {isCheckBoxFilled ? (
        <div className="Wonder">IT'S FILLED LETS GO</div>
      ) : (
        <div className="Wonder">UMMM No!!!!!</div>
      )}
    </div>
  );
};

export default App;
