import React from 'react';
import './index.css';
import App from './App';
import { Toaster } from 'react-hot-toast'
import reportWebVitals from './reportWebVitals';
import PageWrapper from './components/global.styles'

import { createRoot } from 'react-dom/client';
const container = document.getElementById('root');

// @ts-ignore
const root = createRoot(container)

root.render(
  <React.StrictMode>
    <PageWrapper>
      <App />
      <Toaster
      toastOptions={{
        // Define default options
        style: {
          marginTop: '5.5rem',
          background: '#363636',
          color: '#fff',
          zIndex: 2000,
        },
        duration: 5000,
        // Default options for specific types
        success: {
          duration: 3000,
          theme: {
            primary: 'green',
            secondary: 'black',
          },
        },
      }}
    />
    </PageWrapper>
  </React.StrictMode>,
  // document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
