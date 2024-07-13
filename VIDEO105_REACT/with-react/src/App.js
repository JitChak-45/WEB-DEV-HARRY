
import './App.css';
import { useState } from 'react';

function App() {
  const [value,setValue] = useState(40)
  return (
    <div className="App">
      <div className="value">{value}</div>
      <button onClick={()=>{setValue(value+1)}}>Click me</button>
      
    </div>
  );
}

export default App;
