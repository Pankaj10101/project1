import React, { useState } from "react";
import './App.css'
import Details from "./Components/Input/Details";
import Data from "./Components/Output/Data";
function App() {
  const [showData, setShowData] = useState([]); 
  const outputData = (data) => {
    setShowData((prev) => [data, ...prev]);
  }


  return (
    <div className="app">
      <Details onSubmit={outputData} />
      <Data data={showData} />
    </div>
  );
}


export default App;
