import React, { createContext } from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';

export const MyContext = createContext('');

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <MyContext.Provider value="Hello World">
      <App />
    </MyContext.Provider>
  </React.StrictMode>,
);
