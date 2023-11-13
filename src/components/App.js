import React from 'react'
import '../styles/App.css';
import React, {useState} from 'react';
const App = () => {
  const [selectedShape, setSelectedShape] = useState("square");
  const [shapeList, setShapeList] = useState([]);
  const onButtonClick = () => {
    setShapeList([...shapeList, setSelectedShape.toLowerCase()]);
  };

  return (
    <div id="main">
      <div id="shape-creator">
        <select value={selectedShape} 
        onChange={(e) => setSelectedShape(e.target.value)}>
          <option id='option-square'>Square</option>
          <option id='option-circle'>Circle</option>
        </select>
        <button onClick={onButtonClick}>Add Shape</button>
      </div>
      <div id="shapes-holder">
        {shapeList.map((item, index) => (
          <div key={index} className={item}>
            {index}
          </div>
        ))}
      </div>
    </div>
  );
};


export default App;
