import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import App from './App';

const rootElement = document.getElementById('root');

if (rootElement) {
  const root = ReactDOM.createRoot(rootElement);

  root.render(
    <React.StrictMode>
      <BrowserRouter basename="/Booki">
        <App />
      </BrowserRouter>
    </React.StrictMode>,
  );
} else {
  console.error(
    "Root element not found. Make sure you have an element with id 'root' in your index.html.",
  );
}
