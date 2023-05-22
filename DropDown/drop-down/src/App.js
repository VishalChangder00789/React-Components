import React, { useEffect, useState } from "react";
import "./App.css";
import Dropdown from "./Component/Dropdown";

//TODO:: TO BE DONE
const App = () => {
  const [selected, setSelected] = useState("");

  useEffect(() => {
    console.log(selected);
  }, [selected]);

  const options = ["Santro", "City", "Vitara"];
  return (
    <div>
      <Dropdown title="CARS" options={options} Setselected={setSelected} />
    </div>
  );
};

export default App;
