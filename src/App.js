// we import the React library to enable the use of JSX
import React from 'react';
import './App.css';

function App() {
  return (
    // We cannot render two adjacent elements.
    // A workaround is to wrap them in a parent <div>
    <ul>
      <li>Item 1</li>
      <li>Item 2</li>
      <li>Item 3</li>
    </ul>
  );
}

export default App;
