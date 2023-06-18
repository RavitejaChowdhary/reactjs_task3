import React from 'react';
import ColorPicker from './ColorPicker';
import './App.css';

function App() {
  return (
    <div className="App">
     
      <ColorPicker colors={['#FF0000', '#00FF00', '#0000FF']} />
    </div>
  );
}

export default App;
