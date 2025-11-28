import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './SmartSaver'; // 引入您的主程式
import './index.css'; // 如果有全域樣式

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);