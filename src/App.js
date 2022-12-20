import React from 'react';
import './style.css';
import User from './User.js';
export default function App() {
  return (
    <div>
      <h1>Hello StackBlitz!</h1>
      <p></p>
      <User data={{ name: 'tejas', age: 24 }} />
    </div>
  );
}
