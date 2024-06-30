import React, { useState, useEffect } from 'react';
import './App.css';

function App() {

  const [val, setVal] = useState("Shanmugam");
  const [value, setValue] = useState(0);
  const [name, setName] = useState();

  const handleAdd = () => {
    // console.log("Garu");
    setValue((num) => num + 1);
  };

  const handleSub = () => {
    if (value !== 0) {
      setValue((num) => num - 1);
    }
  };

  const multiply = () => {
    setValue((num) => num * 2);
  };

  const handleName = (e) => {
    setName(e.target.value);
    console.log(name);
  }

  useEffect(() => {
    console.log("Garunyaa");
  }, [value]);

  return (
    <div>
      <h1>Garu {val}</h1>
      <h1>{value}</h1>
      <button onClick={handleAdd}>Add</button>
      <br />
      <button onClick={handleSub}>Subtract</button>
      <br />
      <button onClick={multiply}>Multiply</button>
      <br />
      <input name="name" value={name} onChange={handleName} />
    </div>
  );
}

export default App;
